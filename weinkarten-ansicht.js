(()=>{
 function enhance(){
  const card=document.querySelector('.filter-card');if(card&&!card.querySelector('.view-switch')){const nav=document.createElement('nav');nav.className='view-switch';nav.setAttribute('aria-label','Ansicht der Weinkarte');nav.innerHTML='<a href="index.html" aria-current="page">Weine entdecken & suchen</a><a href="klassische-weinkarte.html">Klassische Weinkarte</a>';card.prepend(nav);}
  const back=document.getElementById('backToResults');if(back&&new URLSearchParams(location.search).get('ansicht')==='klassisch'){back.textContent='Zur klassischen Weinkarte';back.onclick=()=>{location.href='klassische-weinkarte.html#wein-'+encodeURIComponent(new URLSearchParams(location.search).get('id'));};}
 }
 const style=document.createElement('style');style.textContent='.view-switch{display:flex;gap:6px;border:1px solid #aab9b1;border-radius:10px;padding:5px;background:white;margin-bottom:20px}.view-switch a{flex:1;text-align:center;padding:12px 8px;border-radius:6px;color:#004438;text-decoration:none;font-weight:700}.view-switch a[aria-current=page]{background:#004438;color:white}.view-switch a:focus-visible{outline:3px solid #b3772d;outline-offset:3px}@media(max-width:600px){.view-switch a{font-size:14px;padding:10px 6px}}';document.head.append(style);
 new MutationObserver(enhance).observe(document.getElementById('app'),{childList:true});enhance();
})();
