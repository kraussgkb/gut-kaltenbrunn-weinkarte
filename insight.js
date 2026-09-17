/* WINEFUNDAY_INSIGHT_LOADER_V9 — deterministic insights loader with inline engagement tracking */
(()=>{'use strict';
const s=document.createElement('style');s.id='winefunday-mobile-card-restore-v1';
s.textContent='@media(max-width:580px){.card h2{font-size:18px!important;line-height:19px!important;margin:4px 0!important;letter-spacing:normal!important;height:38px!important;min-height:38px!important}.card .producer{font-size:15px!important;line-height:normal!important}.card .quick span{font-size:14px!important}.card .quick strong{font-size:13px!important;line-height:normal!important}}';
document.head.appendChild(s);
try{
  const U='https://ohyrmkopbjgevgzucila.supabase.co',K='sb_publishable_5ZDgYMpPlhXaJVoMr3b-eg_bFFRh3sA',H={apikey:K,Authorization:'Bearer '+K,'Content-Type':'application/json',Prefer:'return=minimal'},SK='wine_session_id';
  let sid;try{sid=sessionStorage.getItem(SK);if(!sid){sid=(crypto.randomUUID?crypto.randomUUID():Date.now()+'-'+Math.random().toString(36).slice(2));sessionStorage.setItem(SK,sid)}}catch(e){sid=Date.now()+'-'+Math.random().toString(36).slice(2)}
  const clean=(v,n=160)=>String(v??'').trim().slice(0,n),wid=()=>clean(new URLSearchParams(location.search).get('id')||'',60)||null;
  const send=(event_type,p={})=>{try{fetch(U+'/rest/v1/page_events',{method:'POST',headers:H,keepalive:true,body:JSON.stringify({session_id:sid,event_type,page_path:location.pathname+location.search,...p})}).catch(()=>{})}catch(e){}};
  send('engagement_loaded',{wine_id:wid(),filter_name:'version',filter_value:'inline-v9'});
  document.addEventListener('click',e=>{try{const t=e.target instanceof Element?e.target:null;if(!t)return;const el=t.closest('a,button,label');if(!el)return;const label=clean((el.getAttribute&&el.getAttribute('aria-label')||el.title||el.textContent||'').replace(/\s+/g,' '),160).toLowerCase(),id=wid();let href=null;if(el.tagName==='A'){try{href=new URL(el.href,location.href)}catch(x){}}
    if(el.closest('.rating-stars')||(/stern/.test(label)&&el.closest('.rating-box'))){send('rating_submit',{wine_id:id,filter_name:'rating',filter_value:clean(el.dataset.rating||el.dataset.value||el.getAttribute('aria-label')||label,40)});return}
    if(el.matches('label.winefunday-social-button')||/foto aufnehmen|dein moment zählt|dein moment zaehlt/.test(label)){send('photo_action',{wine_id:id,filter_name:'action',filter_value:'camera'});return}
    if(/auf instagram teilen|instagram teilen/.test(label)){send('instagram_share_click',{wine_id:id,filter_name:'action',filter_value:'instagram_share'});return}
    if(/markierung kopieren|winefundaysocialclub/.test(label)&&!href){send('social_tag_copy',{wine_id:id,filter_name:'action',filter_value:'@winefundaysocialclub'});return}
    if(href){const host=href.hostname.replace(/^www\./,'').toLowerCase();if(host==='winefunday.com')send('outbound_winefunday_com',{wine_id:id,filter_name:'target',filter_value:'winefunday.com'});if(host.includes('instagram.com'))send('outbound_socialclub',{wine_id:id,filter_name:'target',filter_value:'winefundaysocialclub'})}
  }catch(x){}},true);
  document.addEventListener('change',e=>{try{const el=e.target;if(el&&el.matches('input[type="file"],.winefunday-social-file'))send('photo_selected',{wine_id:wid(),filter_name:'action',filter_value:'photo_selected'})}catch(x){}},true);
}catch(e){}
const base=document.createElement('script');
base.src='insight-base.js?v=20260913-0938';
base.async=false;
base.onload=()=>{
  const icons=document.createElement('script');
  icons.src='pairing-icons.js?v=20260914-1520';
  icons.async=false;
  icons.onload=()=>{
    if(window.WinefundayPairingIconsApply)window.WinefundayPairingIconsApply();
    let fix=document.getElementById('winefunday-pairing-filled-subtle-fix');
    if(!fix){fix=document.createElement('style');fix.id='winefunday-pairing-filled-subtle-fix';fix.textContent='.wf-pi{width:52px!important;height:52px!important;margin:0 auto 9px!important;border:0!important;border-radius:50%!important;background:#f1eee8!important;color:#24372f!important;display:grid!important;place-items:center!important;overflow:visible!important;box-shadow:none!important}.wf-pi .wf-food-svg{display:block!important;width:32px!important;height:32px!important;fill:#24372f!important;stroke:none!important;overflow:visible!important}.wf-pi .wf-food-svg *{fill:#24372f!important;stroke:none!important}.wf-pl{color:#34463f!important;font-size:10px!important;line-height:1.25!important}@media(max-width:580px){.wf-pi{width:48px!important;height:48px!important}.wf-pi .wf-food-svg{width:29px!important;height:29px!important}}';document.head.appendChild(fix)}
  };
  document.head.appendChild(icons);
  const spacing=document.createElement('script');spacing.src='detail-spacing.js?v=20260913-1518';spacing.async=false;document.head.appendChild(spacing);
};
document.head.appendChild(base);
})();
