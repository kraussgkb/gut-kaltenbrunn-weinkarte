(()=>{const U='https://ohyrmkopbjgevgzucila.supabase.co',K='sb_publishable_5ZDgYMpPlhXaJVoMr3b-eg_bFFRh3sA',H={apikey:K,Authorization:'Bearer '+K,'Content-Type':'application/json',Prefer:'return=minimal'},S='wine_session_id';let sid=sessionStorage.getItem(S);if(!sid){sid=(crypto.randomUUID?crypto.randomUUID():Date.now()+'-'+Math.random().toString(36).slice(2));sessionStorage.setItem(S,sid)}const clean=(v,n=160)=>String(v??'').trim().slice(0,n),send=(event_type,p={})=>fetch(U+'/rest/v1/page_events',{method:'POST',headers:H,keepalive:true,body:JSON.stringify({session_id:sid,event_type,page_path:location.pathname+location.search,...p})}).catch(()=>{});document.addEventListener('DOMContentLoaded',()=>{const id=new URLSearchParams(location.search).get('id');send('page_view',{wine_id:id||null});if(id)send('wine_open',{wine_id:clean(id,60)});let timer;document.addEventListener('input',e=>{if(e.target.id!=='q')return;clearTimeout(timer);timer=setTimeout(()=>{const v=clean(e.target.value);if(v.length>1)send('search',{search_term:v})},900)});document.addEventListener('change',e=>{if(!['category','country','region','producer','grapes'].includes(e.target.id))return;const v=clean(e.target.value);if(v)send('filter',{filter_name:e.target.id,filter_value:v})});document.addEventListener('click',e=>{const b=e.target.closest('[data-group],[data-pick]');if(!b)return;const n=b.dataset.group!==undefined?'category':'recommendation',v=clean(b.dataset.group??b.dataset.pick);if(v)send('filter',{filter_name:n,filter_value:v})})});const style=document.createElement('style');style.textContent='@media(max-width:580px){.card{grid-template-columns:112px 1fr!important}.card .pic{height:140px!important;margin:5px!important;padding:4px!important}.card .pic img{width:100%!important;max-width:100%!important;height:100%!important;max-height:132px!important;object-fit:contain!important}.card .txt{padding-left:14px!important}}';document.head.appendChild(style)})();

/* WINEFUNDAY_SOCIAL_IMAGE_FIX_V1 — protected helper; keeps the approved social UI untouched */
(()=>{'use strict';
const id=new URLSearchParams(location.search).get('id');if(!id)return;
function wire(){
  const preview=document.querySelector('.winefunday-social-preview');
  if(!preview||preview.dataset.wfImageFix==='1')return false;
  preview.dataset.wfImageFix='1';
  const image=preview.querySelector('img');
  const input=document.querySelector('.winefunday-social-file');
  if(!image)return true;
  if(input)input.addEventListener('change',()=>{preview.dataset.userPhoto='1'},{capture:true});
  const detailImage=document.querySelector('.bottle img');
  const candidates=[];
  if(detailImage){const s=detailImage.currentSrc||detailImage.getAttribute('src');if(s)candidates.push(s)}
  ['jpeg','jpg','png','webp'].forEach(ext=>candidates.push('Weinbilder/'+id+'.'+ext));
  let i=0;
  const tryNext=()=>{
    if(preview.dataset.userPhoto==='1')return;
    if(i>=candidates.length)return;
    const src=candidates[i++];
    const probe=new Image();
    probe.onload=()=>{
      if(preview.dataset.userPhoto==='1')return;
      image.src=src;
      image.alt='Flaschenbild zum aktuellen Wein';
      preview.classList.add('has-photo');
    };
    probe.onerror=tryNext;
    probe.src=src;
  };
  tryNext();
  return true;
}
if(!wire()){
  const observer=new MutationObserver(()=>{if(wire())observer.disconnect()});
  observer.observe(document.body,{childList:true,subtree:true});
  setTimeout(()=>observer.disconnect(),10000);
}
})();
