/* WINEFUNDAY_ENGAGEMENT_ANALYTICS_V1 — event tracking only; no visual changes */
(()=>{'use strict';
const U='https://ohyrmkopbjgevgzucila.supabase.co';
const K='sb_publishable_5ZDgYMpPlhXaJVoMr3b-eg_bFFRh3sA';
const H={apikey:K,Authorization:'Bearer '+K,'Content-Type':'application/json',Prefer:'return=minimal'};
const SESSION_KEY='wine_session_id';
let sid=sessionStorage.getItem(SESSION_KEY);
if(!sid){sid=(crypto.randomUUID?crypto.randomUUID():Date.now()+'-'+Math.random().toString(36).slice(2));sessionStorage.setItem(SESSION_KEY,sid)}
const clean=(v,n=160)=>String(v??'').trim().slice(0,n);
const wineId=()=>clean(new URLSearchParams(location.search).get('id')||'',60)||null;
function send(event_type,p={}){
  const body={session_id:sid,event_type,page_path:location.pathname+location.search,...p};
  fetch(U+'/rest/v1/page_events',{method:'POST',headers:H,keepalive:true,body:JSON.stringify(body)}).catch(()=>{});
}
function dayKey(){const d=new Date();return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0')}
try{
  const k='winefunday_daily_visitor_'+dayKey();
  if(!localStorage.getItem(k)){localStorage.setItem(k,'1');send('daily_visitor',{filter_name:'date',filter_value:dayKey()})}
}catch(e){send('daily_visitor',{filter_name:'date',filter_value:dayKey()})}

function labelOf(el){return clean((el.getAttribute('aria-label')||el.title||el.textContent||'').replace(/\s+/g,' '),120)}
function hrefOf(el){try{return new URL(el.href,location.href)}catch(e){return null}}

document.addEventListener('click',e=>{
  const el=e.target.closest('a,button'); if(!el)return;
  const label=labelOf(el).toLowerCase();
  const href=el.tagName==='A'?hrefOf(el):null;
  const wid=wineId();

  if(el.closest('.rating-stars')||/1 bis 5 sterne|stern/.test(label)&&el.closest('.rating-box')){
    const val=clean(el.dataset.value||el.value||el.getAttribute('aria-label')||label,40);
    send('rating_submit',{wine_id:wid,filter_name:'rating',filter_value:val});
    return;
  }
  if(/foto aufnehmen|dein moment zählt|dein moment zaehlt/.test(label)){
    send('photo_action',{wine_id:wid,filter_name:'action',filter_value:'camera'});return;
  }
  if(/auf instagram teilen|instagram teilen/.test(label)){
    send('instagram_share_click',{wine_id:wid,filter_name:'action',filter_value:'instagram_share'});return;
  }
  if(/markierung kopieren|winefundaysocialclub/.test(label)&&!href){
    send('social_tag_copy',{wine_id:wid,filter_name:'action',filter_value:'@winefundaysocialclub'});return;
  }
  if(href){
    const host=href.hostname.replace(/^www\./,'').toLowerCase();
    if(host==='winefunday.com')send('outbound_winefunday_com',{wine_id:wid,filter_name:'target',filter_value:'winefunday.com'});
    if(host.includes('instagram.com')||host.includes('winefundaysocialclub'))send('outbound_socialclub',{wine_id:wid,filter_name:'target',filter_value:'winefundaysocialclub'});
  }
},true);

document.addEventListener('change',e=>{
  const el=e.target;
  if(el&&el.matches('input[type="file"],.winefunday-social-file'))send('photo_selected',{wine_id:wineId(),filter_name:'action',filter_value:'photo_selected'});
},true);
})();
