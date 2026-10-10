(()=>{
 if(new URLSearchParams(location.search).has('id'))return;
 const script=document.currentScript,preview=script.hasAttribute('data-preview'),root=new URL('.',script.src),key='winefunday-instagram-last-shown',day=86400000;
 const style=document.createElement('link');style.rel='stylesheet';style.href=new URL('instagram-popup.css',root);document.head.append(style);
 const dialog=document.createElement('dialog');dialog.className='wf-insta-dialog';dialog.setAttribute('aria-labelledby','wf-insta-title');dialog.setAttribute('aria-describedby','wf-insta-copy');
 dialog.innerHTML=`<button type="button" class="wf-insta-close" aria-label="Schließen">×</button><div class="wf-insta-logo"><img src="${new URL('winefunday-logo.png',root)}" alt="Winefunday · Serious · Not so serious"></div><div class="wf-insta-rule"></div><h2 id="wf-insta-title">Serious wine.<br>Not so serious.</h2><p id="wf-insta-copy">Guter Wein. Gute Geschichten.<br>Entdecke mehr Weinmomente im<br>Winefunday Social Club.</p><a class="wf-insta-follow" href="https://www.instagram.com/winefundaysocialclub/" target="_blank" rel="noopener noreferrer"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".8" fill="currentColor" stroke="none"/></svg>Auf Instagram folgen</a><span class="wf-insta-handle">@winefundaysocialclub</span><button type="button" class="wf-insta-later">Weiter zur Weinkarte</button>`;
 document.body.append(dialog);let previous;
 const close=()=>{dialog.close();previous?.focus?.();};dialog.querySelector('.wf-insta-close').onclick=close;dialog.querySelector('.wf-insta-later').onclick=close;dialog.querySelector('.wf-insta-follow').onclick=close;
 dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)close();}});
 function shownRecently(){try{return Date.now()-Number(localStorage.getItem(key)||0)<day;}catch{try{return sessionStorage.getItem(key)==='shown';}catch{return false;}}}
 function show(){if(!preview&&shownRecently())return;if(document.querySelector('dialog[open]')){setTimeout(show,5000);return;}previous=document.activeElement;dialog.showModal();if(!preview){try{localStorage.setItem(key,String(Date.now()));}catch{try{sessionStorage.setItem(key,'shown');}catch{}}}dialog.querySelector('.wf-insta-close').focus();}
 setTimeout(show,preview?600:10000);
})();
