/* WINEFUNDAY_ENGAGEMENT_CORE_V1 — isolated; tracking only */
(()=>{'use strict';
const U='https://ohyrmkopbjgevgzucila.supabase.co',K='sb_publishable_5ZDgYMpPlhXaJVoMr3b-eg_bFFRh3sA',H={apikey:K,Authorization:'Bearer '+K,'Content-Type':'application/json',Prefer:'return=minimal'},S='wine_session_id';
let sid;try{sid=sessionStorage.getItem(S);if(!sid){sid=(crypto.randomUUID?crypto.randomUUID():Date.now()+'-'+Math.random().toString(36).slice(2));sessionStorage.setItem(S,sid)}}catch(e){sid=Date.now()+'-'+Math.random().toString(36).slice(2)}
const clean=(v,n=160)=>String(v??'').trim().slice(0,n),wid=()=>clean(new URLSearchParams(location.search).get('id')||'',60)||null;
const send=(event_type,p={})=>{try{return fetch(U+'/rest/v1/page_events',{method:'POST',headers:H,keepalive:true,body:JSON.stringify({session_id:sid,event_type,page_path:location.pathname+location.search,...p})}).catch(()=>{})}catch(e){}};
send('engagement_loaded',{wine_id:wid(),filter_name:'version',filter_value:'core-v1'});
document.addEventListener('click',e=>{try{const t=e.target instanceof Element?e.target:null;if(!t)return;const el=t.closest('a,button,label');if(!el)return;const label=clean((el.getAttribute('aria-label')||el.title||el.textContent||'').replace(/\s+/g,' '),160).toLowerCase(),id=wid();let href=null;if(el.tagName==='A'){try{href=new URL(el.href,location.href)}catch(_){}}
if(el.closest('.rating-stars')||(/stern/.test(label)&&el.closest('.rating-box'))){send('rating_submit',{wine_id:id,filter_name:'rating',filter_value:clean(el.dataset.rating||el.dataset.value||el.getAttribute('aria-label')||label,40)});return}
if(el.matches('label.winefunday-social-button')||/foto aufnehmen|dein moment zählt|dein moment zaehlt/.test(label)){send('photo_action',{wine_id:id,filter_name:'action',filter_value:'camera'});return}
if(/auf instagram teilen|instagram teilen/.test(label)){send('instagram_share_click',{wine_id:id,filter_name:'action',filter_value:'instagram_share'});return}
if(/markierung kopieren|winefundaysocialclub/.test(label)&&!href){send('social_tag_copy',{wine_id:id,filter_name:'action',filter_value:'@winefundaysocialclub'});return}
if(href){const host=href.hostname.replace(/^www\./,'').toLowerCase();if(host==='winefunday.com')send('outbound_winefunday_com',{wine_id:id,filter_name:'target',filter_value:'winefunday.com'});if(host.includes('instagram.com'))send('outbound_socialclub',{wine_id:id,filter_name:'target',filter_value:'winefundaysocialclub'})}
}catch(_){}} ,true);
document.addEventListener('change',e=>{try{const el=e.target;if(el&&el.matches('input[type="file"],.winefunday-social-file'))send('photo_selected',{wine_id:wid(),filter_name:'action',filter_value:'photo_selected'})}catch(_){}} ,true);
})();