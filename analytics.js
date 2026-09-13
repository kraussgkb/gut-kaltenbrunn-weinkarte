(()=>{const U='https://ohyrmkopbjgevgzucila.supabase.co',K='sb_publishable_5ZDgYMpPlhXaJVoMr3b-eg_bFFRh3sA',H={apikey:K,Authorization:'Bearer '+K,'Content-Type':'application/json',Prefer:'return=minimal'},S='wine_session_id';let sid=sessionStorage.getItem(S);if(!sid){sid=(crypto.randomUUID?crypto.randomUUID():Date.now()+'-'+Math.random().toString(36).slice(2));sessionStorage.setItem(S,sid)}const clean=(v,n=160)=>String(v??'').trim().slice(0,n),send=(event_type,p={})=>fetch(U+'/rest/v1/page_events',{method:'POST',headers:H,keepalive:true,body:JSON.stringify({session_id:sid,event_type,page_path:location.pathname+location.search,...p})}).catch(()=>{});document.addEventListener('DOMContentLoaded',()=>{const id=new URLSearchParams(location.search).get('id');send('page_view',{wine_id:id||null});if(id)send('wine_open',{wine_id:clean(id,60)});let timer;document.addEventListener('input',e=>{if(e.target.id!=='q')return;clearTimeout(timer);timer=setTimeout(()=>{const v=clean(e.target.value);if(v.length>1)send('search',{search_term:v})},900)});document.addEventListener('change',e=>{if(!['category','country','region','producer','grapes'].includes(e.target.id))return;const v=clean(e.target.value);if(v)send('filter',{filter_name:e.target.id,filter_value:v})});document.addEventListener('click',e=>{const b=e.target.closest('[data-group],[data-pick]');if(!b)return;const n=b.dataset.group!==undefined?'category':'recommendation',v=clean(b.dataset.group??b.dataset.pick);if(v)send('filter',{filter_name:n,filter_value:v})})});const style=document.createElement('style');style.textContent='@media(max-width:580px){.card{grid-template-columns:112px 1fr!important}.card .pic{height:140px!important;margin:5px!important;padding:4px!important}.card .pic img{width:100%!important;max-width:100%!important;height:100%!important;max-height:132px!important;object-fit:contain!important}.card .txt{padding-left:14px!important}}';document.head.appendChild(style)})();

/* WINEFUNDAY_REQUEST_STORM_FIX_V1 — protected; exact manifest + DOM resolver, no extension probing */
(()=>{'use strict';
const IMAGE_MANIFEST={
'CH801-0-NV':'Weinbilder/CH801-0-NV.jpg',
'CH801-1-NV':'Weinbilder/CH801-1-NV.jpg',
'CH801-2-NV':'Weinbilder/CH801-2-NV.jpg',
'CH801-3-NV':'Weinbilder/CH801-3-NV.jpg',
'CH801-4-NV':'Weinbilder/CH801-4-NV.jpg',
'CH802-1-NV':'Weinbilder/CH802-1-NV.jpg',
'CH803-1-NV':'Weinbilder/CH803-1-NV.png',
'CH805-1-NV':'Weinbilder/CH805-1-NV.jpg',
'CH805-2-NV':'Weinbilder/CH805-2-NV.jpg',
'CH805-3-NV':'Weinbilder/CH805-3-NV.jpg',
'RI132-1-22':'Weinbilder/RI132-1-22.jpeg',
'WÖ401-1-22':'Weinbilder/W%C3%96401-1-22.png'
};
const preferredSrc=w=>{const explicit=String((w&&w.image)||'').trim();if(explicit)return explicit;return IMAGE_MANIFEST[String((w&&w.id)||'')]||''};
function protectRenderers(){
  if(typeof window.card==='function'&&!window.card.__wfRequestFix){
    const originalCard=window.card;
    const wrapped=function(w){
      const html=originalCard(w),src=preferredSrc(w);
      if(String((w&&w.image)||'').trim())return html;
      if(!src)return html.replace(/<div class="pic"><img src=""[^>]*><\/div>/,'<div class="pic missing"></div>');
      return html.replace(/<div class="pic"><img src=""[^>]*><\/div>/,'<div class="pic"><img src="'+src+'" alt="" loading="lazy" onerror="this.onerror=null;this.style.display=\'none\';this.parentElement.classList.add(\'missing\')"></div>');
    };
    wrapped.__wfRequestFix=true;window.card=wrapped;
  }
  if(typeof window.detail==='function'&&!window.detail.__wfRequestFix){
    const originalDetail=window.detail;
    const wrapped=function(w){
      const html=originalDetail(w),src=preferredSrc(w);
      if(String((w&&w.image)||'').trim())return html;
      if(!src)return html.replace(/<div class="bottle"><img src=""[^>]*><\/div>/,'<div class="bottle missing"></div>');
      return html.replace(/<div class="bottle"><img src=""[^>]*><\/div>/,'<div class="bottle"><img src="'+src+'" alt="Flaschenbild zum aktuellen Wein" onerror="this.onerror=null;this.style.display=\'none\';this.parentElement.classList.add(\'missing\')"></div>');
    };
    wrapped.__wfRequestFix=true;window.detail=wrapped;
  }
}
function setExactImage(box,id,alt){
  const src=IMAGE_MANIFEST[id];if(!box)return;
  let img=box.querySelector('img');
  if(!src){if(img&&!img.getAttribute('src'))img.remove();if(!box.querySelector('img'))box.classList.add('missing');return}
  box.classList.remove('missing');
  if(!img){img=document.createElement('img');box.appendChild(img)}
  img.style.display='';img.alt=alt||'';img.loading='lazy';
  img.onerror=function(){this.onerror=null;this.style.display='none';box.classList.add('missing')};
  const target=new URL(src,location.href).href;
  if(img.src!==target)img.src=src;
}
function resolveRenderedImages(root=document){
  root.querySelectorAll('.card').forEach(card=>{try{const href=card.getAttribute('href')||'',u=new URL(href,location.href),id=u.searchParams.get('id');if(id)setExactImage(card.querySelector('.pic'),id,'')}catch(e){}});
  const detailId=new URLSearchParams(location.search).get('id');if(detailId)setExactImage(root.querySelector('.detail .bottle'),detailId,'Flaschenbild zum aktuellen Wein');
}
protectRenderers();resolveRenderedImages();
const timer=setInterval(()=>{protectRenderers();resolveRenderedImages();if(document.getElementById('app')&&document.getElementById('app').children.length)clearInterval(timer)},25);
setTimeout(()=>clearInterval(timer),3000);
const observer=new MutationObserver(m=>{if(m.some(x=>x.addedNodes&&x.addedNodes.length))resolveRenderedImages()});
observer.observe(document.documentElement,{childList:true,subtree:true});
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

/* WINEFUNDAY_TYPOGRAPHY_POLISH_V1 — isolated, reversible visual polish only */
(()=>{'use strict';
const s=document.createElement('style');
s.id='winefunday-typography-polish-v1';
s.textContent=`
body{font-size:16px;line-height:1.48}
.card h2{font-size:26px;line-height:1.14;letter-spacing:-.01em;margin:14px 0 10px}
.producer{font-size:14.5px;line-height:1.3}
.quick span{font-size:13px}
.quick strong{font-size:19px;line-height:1.15}
.content h1{font-size:clamp(36px,4vw,50px);line-height:1.04;letter-spacing:-.012em}
.lead{font-size:16px;line-height:1.5}
.sections{font-size:15.5px}
.sections section{line-height:1.62}
.sections h3{font-size:20px;line-height:1.25;margin-bottom:9px}
.estate-story p{font-size:14px;line-height:1.58}
.profile-item small{font-size:10px;line-height:1.25}
.profile-item b{font-size:13.5px;line-height:1.45}
.fact{line-height:1.35}
.fact small{font-size:10.5px;line-height:1.25}
.rating-meta,.rating-help,.rating-message{font-size:12.5px;line-height:1.4}
@media(max-width:580px){
  .card h2{font-size:20px;line-height:1.12;margin:8px 0 7px}
  .producer{font-size:13.5px}
  .quick span{font-size:12px}
  .quick strong{font-size:17px}
  .content h1{font-size:clamp(32px,10vw,42px);line-height:1.02}
  .lead{font-size:15.5px}
  .sections{font-size:15px}
  .sections h3{font-size:19px}
  .profile-item b{font-size:13px}
}
`;
document.head.appendChild(s);
})();

/* WINEFUNDAY_LAYOUT_POLISH_V2 — isolated, reversible alignment polish only */
(()=>{'use strict';
const s=document.createElement('style');
s.id='winefunday-layout-polish-v2';
s.textContent=`
.search{font-size:16px;line-height:1.35}
.selects select{font-size:14px;line-height:1.25}
.tag{font-size:10px;line-height:1;letter-spacing:.13em}
.resultbar b{font-size:14px;line-height:1.35}
.reset{font-size:12.5px;line-height:1.3}
.back{font-size:14px;line-height:1.35;text-underline-offset:3px}
.core{line-height:1.35}
.core strong{font-size:21px;line-height:1.15}
.fact{padding:11px 12px}
.profile-box{padding:20px}
.tasting-note{padding:20px!important}
@media(max-width:580px){
  .detail{padding-top:28px}
  .back{margin-bottom:18px}
  .bottle{margin-left:22px!important;margin-right:22px!important}
  .content{padding-left:22px!important;padding-right:22px!important}
  .sections{padding-left:22px!important;padding-right:22px!important}
  .sections section{padding-top:18px;padding-bottom:18px}
  .facts{gap:8px}
  .profile-box{padding:18px}
  .tasting-note{padding:18px!important}
  .filter-card{padding:14px}
  .resultbar{padding-top:21px}
}
`;
document.head.appendChild(s);
})();

/* WINEFUNDAY_PAIRING_ICON_FIX_V1 — exact, readable food icons for "Passt besonders zu" */
(()=>{'use strict';
const ICONS={
  schnitzel:'<path d="M4 12c1-4 4-6 8-6s7 2 8 6c-1 4-4 6-8 6s-7-2-8-6Z"/><path d="M7 10c3-1 7-1 10 0M8 14c2 1 6 1 8 0"/>',
  beef:'<path d="M5 8c3-3 11-3 14 1 2 3 0 8-4 9-4 2-10 0-11-4-1-2 0-4 1-6Z"/><circle cx="10" cy="12" r="2.2"/>',
  veal:'<path d="M6 9c2-3 10-4 13 0 2 3 0 7-3 8-4 2-9 1-11-2-1-2 0-4 1-6Z"/><path d="M9 12h6"/>',
  lamb:'<path d="M7 9c0-3 2-5 5-5s5 2 5 5v5c-1 3-3 5-5 5s-4-2-5-5V9Z"/><path d="M7 8 4 5M17 8l3-3M9 13h.1M15 13h.1M10 16h4"/>',
  game:'<path d="M8 9c0-3 1-5 4-5s4 2 4 5v5c0 3-2 5-4 5s-4-2-4-5V9Z"/><path d="M8 7 5 3M16 7l3-4M6 5 4 2M18 5l2-3M10 13h.1M14 13h.1"/>',
  pork:'<path d="M5 10c1-4 4-6 8-6 5 0 8 3 8 7 0 4-4 7-9 7-4 0-7-2-7-5v-3Z"/><circle cx="17" cy="10" r="1"/><path d="M8 17v3M15 17v3"/>',
  poultry:'<path d="M8 7c3-2 7 0 8 3 1 4-2 8-6 8-3 0-5-2-5-5 0-3 1-5 3-6Z"/><path d="M16 10l4-2-2 4M8 18l-1 3M13 17l2 4"/>',
  fish:'<path d="M3 12c4-5 9-5 14 0-5 5-10 5-14 0Z"/><path d="m17 12 4-4v8l-4-4Z"/><circle cx="8" cy="11" r=".8"/>',
  shellfish:'<path d="M5 15c1-6 13-6 14 0-2 4-5 5-7 5s-5-1-7-5Z"/><path d="M7 14c2-3 8-3 10 0M9 11l-2-3M15 11l2-3"/>',
  lobster:'<path d="M10 7c0-3 4-3 4 0v10h-4V7Z"/><path d="M10 10 6 7 3 9m11 1 4-3 3 2M10 14l-5 4m9-4 5 4M12 5V2"/>',
  pasta:'<path d="M5 8h14l-2 10H7L5 8Z"/><path d="M7 11c3-2 7 2 10 0M8 14c3-2 5 2 8 0"/>',
  risotto:'<path d="M4 10h16c-1 6-4 9-8 9s-7-3-8-9Z"/><path d="M6 10c2-4 10-4 12 0"/><circle cx="9" cy="13" r=".6"/><circle cx="13" cy="14" r=".6"/><circle cx="16" cy="12" r=".6"/>',
  pizza:'<path d="m12 3 8 17H4L12 3Z"/><path d="M7 15h10"/><circle cx="10" cy="11" r="1"/><circle cx="14" cy="14" r="1"/>',
  cheese:'<path d="m4 9 8-5 8 5v10H4V9Z"/><path d="M4 9h16"/><circle cx="9" cy="13" r="1"/><circle cx="15" cy="16" r="1"/>',
  asparagus:'<path d="M8 21V8l2-5 2 5v13M14 21V10l2-4 2 4v11M6 11h6M14 13h6"/>',
  mushroom:'<path d="M4 11c1-6 15-6 16 0H4Z"/><path d="M10 11v8h4v-8"/>',
  vegetable:'<path d="M12 21c-1-6-5-7-7-9 2-5 6-7 7-9 1 2 5 4 7 9-2 2-6 3-7 9Z"/><path d="M8 13c3 0 5-2 7-5"/>',
  salad:'<path d="M4 11h16c-1 6-4 9-8 9s-7-3-8-9Z"/><path d="M7 9c0-3 3-4 5-1 2-3 5-2 5 1M12 8V4"/>',
  dessert:'<path d="M6 9h12l-1 10H7L6 9Z"/><path d="M8 9c0-4 8-4 8 0M10 6c0-2 2-3 2 0m0 0c0-2 2-2 2 0"/>',
  plate:'<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="4.5"/><path d="M3 5v14M21 5v14M19 5v5M23 5v5"/>'
};
const RULES=[
  [/(schnitzel)/,'schnitzel'],
  [/(kalb|veal|kalbs)/,'veal'],
  [/(rind|beef|steak|filet|entrec[oô]te|roastbeef|ochse)/,'beef'],
  [/(lamm|lamb|karree)/,'lamb'],
  [/(wild|reh|hirsch|venison|ente? wild)/,'game'],
  [/(schwein|pork|spanferkel|speck)/,'pork'],
  [/(ente|gans|huhn|hähn|haehn|geflügel|poularde|poulet|backhendl|brathendl|hendl)/,'poultry'],
  [/(hummer|lobster|languste|langostino|garnele|shrimp|scampi|krebs)/,'lobster'],
  [/(auster|muschel|coquille|jakobsmuschel|meeresfrüchte|seafood)/,'shellfish'],
  [/(zander|saibling|forelle|fisch|lachs|thunfisch|seezunge|steinbutt|kabeljau|dorade|wolfsbarsch)/,'fish'],
  [/(pasta|nudel|spaghetti|tagliatelle|ravioli|gnocchi)/,'pasta'],
  [/(risotto|reis)/,'risotto'],
  [/(pizza)/,'pizza'],
  [/(käse|kaese|parmesan|pecorino|comté|comte|gouda)/,'cheese'],
  [/(spargel)/,'asparagus'],
  [/(pilz|steinpilz|trüffel|truffel)/,'mushroom'],
  [/(salat)/,'salad'],
  [/(dessert|schokolade|torte|kuchen|sorbet|eis|crème|creme brulee)/,'dessert'],
  [/(gemüse|gemuese|vegetar|aubergine|zucchini|kürbis|kuerbis)/,'vegetable']
];
function iconType(label){const t=(label||'').toLowerCase();for(const [re,type] of RULES)if(re.test(t))return type;return'plate'}
function fixPairingIcons(root=document){
  root.querySelectorAll('.wf-pair').forEach(pair=>{
    const label=(pair.querySelector('.wf-pl')?.textContent||'').trim();
    const svg=pair.querySelector('.wf-pi svg');
    if(!svg||!label)return;
    const type=iconType(label);
    if(svg.dataset.wfPairType===type)return;
    svg.innerHTML=ICONS[type]||ICONS.plate;
    svg.dataset.wfPairType=type;
    svg.setAttribute('aria-label',label);
  });
}
fixPairingIcons();
const mo=new MutationObserver(()=>fixPairingIcons());
mo.observe(document.documentElement,{childList:true,subtree:true});
setTimeout(()=>mo.disconnect(),8000);
})();