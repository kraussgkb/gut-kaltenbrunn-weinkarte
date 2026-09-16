/* WINEFUNDAY_ENGAGEMENT_ANALYTICS_V2 — isolated event tracking; never blocks the wine list */
(()=>{'use strict';
const U='https://ohyrmkopbjgevgzucila.supabase.co';
const K='sb_publishable_5ZDgYMpPlhXaJVoMr3b-eg_bFFRh3sA';
const H={apikey:K,Authorization:'Bearer '+K,'Content-Type':'application/json',Prefer:'return=minimal'};
const SESSION_KEY='wine_session_id';
let sid;
try{sid=sessionStorage.getItem(SESSION_KEY);if(!sid){sid=(crypto.randomUUID?crypto.randomUUID():Date.now()+'-'+Math.random().toString(36).slice(2));sessionStorage.setItem(SESSION_KEY,sid)}}catch(e){sid=Date.now()+'-'+Math.random().toString(36).slice(2)}
const clean=(v,n=160)=>String(v??'').trim().slice(0,n);
const wineId=()=>clean(new URLSearchParams(location.search).get('id')||'',60)||null;
function send(event_type,p={}){try{const body={session_id:sid,event_type,page_path:location.pathname+location.search,...p};fetch(U+'/rest/v1/page_events',{method:'POST',headers:H,keepalive:true,body:JSON.stringify(body)}).catch(()=>{})}catch(e){}}
function dayKey(){const d=new Date();return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0')}
try{const k='winefunday_daily_visitor_'+dayKey();if(!localStorage.getItem(k)){localStorage.setItem(k,'1');send('daily_visitor',{filter_name:'date',filter_value:dayKey()})}}catch(e){send('daily_visitor',{filter_name:'date',filter_value:dayKey()})}
function labelOf(el){return clean((el.getAttribute&&el.getAttribute('aria-label')||el.title||el.textContent||'').replace(/\s+/g,' '),160)}
function hrefOf(el){try{return new URL(el.href,location.href)}catch(e){return null}}
document.addEventListener('click',e=>{try{
  const target=e.target instanceof Element?e.target:null;if(!target)return;
  const el=target.closest('a,button,label');if(!el)return;
  const label=labelOf(el).toLowerCase();const href=el.tagName==='A'?hrefOf(el):null;const wid=wineId();
  if(el.closest('.rating-stars')||((/stern/.test(label))&&el.closest('.rating-box'))){const val=clean(el.dataset.value||el.dataset.rating||el.value||el.getAttribute('aria-label')||label,40);send('rating_submit',{wine_id:wid,filter_name:'rating',filter_value:val});return}
  if(el.matches('label.winefunday-social-button')||/foto aufnehmen|dein moment zählt|dein moment zaehlt/.test(label)){send('photo_action',{wine_id:wid,filter_name:'action',filter_value:'camera'});return}
  if(/auf instagram teilen|instagram teilen/.test(label)){send('instagram_share_click',{wine_id:wid,filter_name:'action',filter_value:'instagram_share'});return}
  if(/markierung kopieren|winefundaysocialclub/.test(label)&&!href){send('social_tag_copy',{wine_id:wid,filter_name:'action',filter_value:'@winefundaysocialclub'});return}
  if(href){const host=href.hostname.replace(/^www\./,'').toLowerCase();if(host==='winefunday.com')send('outbound_winefunday_com',{wine_id:wid,filter_name:'target',filter_value:'winefunday.com'});if(host.includes('instagram.com'))send('outbound_socialclub',{wine_id:wid,filter_name:'target',filter_value:'winefundaysocialclub'})}
}catch(err){}},true);
document.addEventListener('change',e=>{try{const el=e.target;if(el&&el.matches('input[type="file"],.winefunday-social-file'))send('photo_selected',{wine_id:wineId(),filter_name:'action',filter_value:'photo_selected'})}catch(err){}},true);
})();
