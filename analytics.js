(()=>{const U='https://ohyrmkopbjgevgzucila.supabase.co',K='sb_publishable_5ZDgYMpPlhXaJVoMr3b-eg_bFFRh3sA',H={apikey:K,Authorization:'Bearer '+K,'Content-Type':'application/json',Prefer:'return=minimal'},S='wine_session_id';let sid=sessionStorage.getItem(S);if(!sid){sid=(crypto.randomUUID?crypto.randomUUID():Date.now()+'-'+Math.random().toString(36).slice(2));sessionStorage.setItem(S,sid)}const clean=(v,n=160)=>String(v??'').trim().slice(0,n),send=(event_type,p={})=>fetch(U+'/rest/v1/page_events',{method:'POST',headers:H,keepalive:true,body:JSON.stringify({session_id:sid,event_type,page_path:location.pathname+location.search,...p})}).catch(()=>{});document.addEventListener('DOMContentLoaded',()=>{const id=new URLSearchParams(location.search).get('id');send('page_view',{wine_id:id||null});if(id)send('wine_open',{wine_id:clean(id,60)});let timer;document.addEventListener('input',e=>{if(e.target.id!=='q')return;clearTimeout(timer);timer=setTimeout(()=>{const v=clean(e.target.value);if(v.length>1)send('search',{search_term:v})},900)});document.addEventListener('change',e=>{if(!['category','country','region','producer','grapes'].includes(e.target.id))return;const v=clean(e.target.value);if(v)send('filter',{filter_name:e.target.id,filter_value:v})});document.addEventListener('click',e=>{const b=e.target.closest('[data-group],[data-pick]');if(!b)return;const n=b.dataset.group!==undefined?'category':'recommendation',v=clean(b.dataset.group??b.dataset.pick);if(v)send('filter',{filter_name:n,filter_value:v})})});const style=document.createElement('style');style.textContent='@media(max-width:580px){.card{grid-template-columns:112px 1fr!important}.card .pic{height:140px!important;margin:5px!important;padding:4px!important}.card .pic img{width:100%!important;max-width:100%!important;height:100%!important;max-height:132px!important;object-fit:contain!important}.card .txt{padding-left:14px!important}}';document.head.appendChild(style)})();

/* WINEFUNDAY_REQUEST_STORM_FIX_V1 — protected; exact image manifest avoids 404 probing */
(()=>{'use strict';
const IMAGE_MANIFEST={
'CH801-0-NV':'Weinbilder/CH801-0-NV.jpg','CH801-1-NV':'Weinbilder/CH801-1-NV.jpg','CH801-2-NV':'Weinbilder/CH801-2-NV.jpg','CH801-3-NV':'Weinbilder/CH801-3-NV.jpg','CH801-4-NV':'Weinbilder/CH801-4-NV.jpg','CH802-1-NV':'Weinbilder/CH802-1-NV.jpg','CH803-1-NV':'Weinbilder/CH803-1-NV.png','CH805-1-NV':'Weinbilder/CH805-1-NV.jpg','CH805-2-NV':'Weinbilder/CH805-2-NV.jpg','CH805-3-NV':'Weinbilder/CH805-3-NV.jpg','RI132-1-22':'Weinbilder/RI132-1-22.jpeg','WÖ401-1-22':'Weinbilder/W%C3%96401-1-22.png'};
const preferredSrc=w=>{const explicit=String((w&&w.image)||'').trim();if(explicit)return explicit;return IMAGE_MANIFEST[String((w&&w.id)||'')]||''};
function protectRenderers(){
  if(typeof window.card==='function'&&!window.card.__wfRequestFix){
    const originalCard=window.card;
    const wrapped=function(w){
      let html=originalCard(w);
      if(String((w&&w.image)||'').trim())return html;
      const src=preferredSrc(w);
      if(!src)return html.replace(/<div class="pic"><img src=""[^>]*><\/div>/,'<div class="pic missing"></div>');
      return html.replace(/<div class="pic"><img src=""[^>]*><\/div>/,'<div class="pic"><img src="'+src+'" alt="" loading="lazy" onerror="this.onerror=null;this.style.display=\'none\';this.parentElement.classList.add(\'missing\')"></div>');
    };
    wrapped.__wfRequestFix=true;
    window.card=wrapped;
  }
  if(typeof window.detail==='function'&&!window.detail.__wfRequestFix){
    const originalDetail=window.detail;
    const wrapped=function(w){
      let html=originalDetail(w);
      if(String((w&&w.image)||'').trim())return html;
      const src=preferredSrc(w);
      if(!src)return html.replace(/<div class="bottle"><img src=""[^>]*><\/div>/,'<div class="bottle missing"></div>');
      return html.replace(/<div class="bottle"><img src=""[^>]*><\/div>/,'<div class="bottle"><img src="'+src+'" alt="Flaschenbild zum aktuellen Wein" onerror="this.onerror=null;this.style.display=\'none\';this.parentElement.classList.add(\'missing\')"></div>');
    };
    wrapped.__wfRequestFix=true;
    window.detail=wrapped;
  }
}
protectRenderers();
const timer=setInterval(()=>{protectRenderers();if(document.getElementById('app')&&document.getElementById('app').children.length)clearInterval(timer)},25);
setTimeout(()=>clearInterval(timer),3000);
})();

/* WINEFUNDAY_SOCIAL_IMAGE_FIX_V1 — protected helper; reuses the already loaded detail bottle and never probes multiple extensions */
(()=>{'use strict';
const id=new URLSearchParams(location.search).get('id');if(!id)return;
function wire(){
  const preview=document.querySelector('.winefunday-social-preview');
  if(!preview||preview.dataset.wfImageFix==='1')return false;
  const image=preview.querySelector('img');
  const input=document.querySelector('.winefunday-social-file');
  if(!image)return true;
  const detailImage=document.querySelector('.bottle img');
  if(!detailImage)return false;
  preview.dataset.wfImageFix='1';
  if(input)input.addEventListener('change',()=>{preview.dataset.userPhoto='1'},{capture:true});
  const apply=()=>{if(preview.dataset.userPhoto==='1'||!detailImage.naturalWidth)return;image.src=detailImage.currentSrc||detailImage.src;image.alt='Flaschenbild zum aktuellen Wein';preview.classList.add('has-photo')};
  if(detailImage.complete)apply();else detailImage.addEventListener('load',apply,{once:true});
  return true;
}
if(!wire()){
  const observer=new MutationObserver(()=>{if(wire())observer.disconnect()});
  observer.observe(document.body,{childList:true,subtree:true});
  setTimeout(()=>observer.disconnect(),5000);
}
})();

/* WINEFUNDAY_SOCIAL_FRAME_FIX_V1 — protected visual frame tuning */
(()=>{'use strict';
const s=document.createElement('style');
s.id='winefunday-social-frame-fix';
s.textContent='\n.winefunday-social-block{margin:38px 8px 14px!important;padding:34px 30px 26px!important;border:1px solid #d8d0c2!important;border-radius:18px!important;background:#fbf7ef!important;box-shadow:0 10px 28px rgba(38,51,47,.06)!important;overflow:visible!important}\n.winefunday-social-layout{gap:34px!important}\n.winefunday-social-polaroid{margin:6px 8px 8px!important}\n.winefunday-social-actions{margin-top:32px!important}\n@media(max-width:620px){.winefunday-social-block{margin:32px 6px 14px!important;padding:28px 20px 22px!important;border-radius:16px!important}.winefunday-social-layout{gap:28px!important}.winefunday-social-polaroid{width:min(205px,68vw)!important;margin:4px auto 10px!important}.winefunday-social-actions{margin-top:28px!important;gap:12px!important}.winefunday-social-closing{margin-top:22px!important}.winefunday-social-privacy{margin-top:8px!important;padding:0 4px!important}}\n';
document.head.appendChild(s);
})();

/* WINEFUNDAY_SOCIAL_SHARPNESS_FIX_V1 — protected; preserves original bottle proportions and reduces transform blur */
(()=>{'use strict';
const s=document.createElement('style');
s.id='winefunday-social-sharpness-fix';
s.textContent='.winefunday-social-preview{background:#fff!important}.winefunday-social-preview img{width:100%!important;height:100%!important;object-fit:contain!important;object-position:center!important;background:#fff!important;padding:8px!important;image-rendering:auto!important;filter:none!important}.winefunday-social-polaroid{transform:rotate(.8deg)!important}';
document.head.appendChild(s);
})();
