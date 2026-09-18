/* WINEFUNDAY_INSIGHT_INTERACTIONS_V1 — sheet drag-to-close + shared scroll-to-top */
(()=>{'use strict';
const style=document.createElement('style');
style.id='winefunday-insight-interactions-v1';
style.textContent='.wf-handle{width:76px!important;height:24px!important;margin:-4px auto 0!important;position:relative!important;cursor:grab!important;touch-action:none!important;background:transparent!important}.wf-handle:after{content:"";position:absolute;left:16px;right:16px;top:10px;height:4px;background:#bdc5c1;border-radius:4px}.wf-handle:active{cursor:grabbing!important}.wf-sheet.wf-dragging{animation:none!important;transition:none!important;user-select:none!important}.to-top{z-index:10050!important}';
document.head.appendChild(style);

function wireSheet(modal){
  if(!modal||modal.dataset.dragReady)return;
  const sheet=modal.querySelector('.wf-sheet'),handle=modal.querySelector('.wf-handle'),closeButton=modal.querySelector('.wf-x');
  if(!sheet||!handle||!closeButton)return;
  modal.dataset.dragReady='1';
  handle.setAttribute('role','button');
  handle.setAttribute('aria-label','Nach unten ziehen zum Schließen');
  handle.tabIndex=0;
  let dragging=false,startY=0,lastY=0,startTime=0;
  const reset=()=>{dragging=false;sheet.classList.remove('wf-dragging');sheet.style.transition='transform .22s ease';sheet.style.transform='translateY(0)';setTimeout(()=>{if(!dragging)sheet.style.transition=''},230)};
  const finish=(event,cancelled=false)=>{
    if(!dragging)return;
    const y=event.clientY??lastY,dy=Math.max(0,y-startY),elapsed=Math.max(1,performance.now()-startTime),velocity=dy/elapsed;
    dragging=false;
    try{handle.releasePointerCapture(event.pointerId)}catch(e){}
    if(!cancelled&&(dy>96||(dy>38&&velocity>.65))){
      sheet.classList.remove('wf-dragging');sheet.style.transition='transform .22s ease-in';sheet.style.transform='translateY(105%)';
      setTimeout(()=>{closeButton.click();sheet.style.transition='';sheet.style.transform=''},220);
    }else reset();
  };
  handle.addEventListener('pointerdown',event=>{
    if(event.button!=null&&event.button!==0)return;
    dragging=true;startY=lastY=event.clientY;startTime=performance.now();
    sheet.classList.add('wf-dragging');sheet.style.transform='translateY(0)';
    try{handle.setPointerCapture(event.pointerId)}catch(e){}
  });
  handle.addEventListener('pointermove',event=>{
    if(!dragging)return;lastY=event.clientY;const dy=Math.max(0,event.clientY-startY);sheet.style.transform=`translateY(${dy}px)`;
  });
  handle.addEventListener('pointerup',event=>finish(event));
  handle.addEventListener('pointercancel',event=>finish(event,true));
  handle.addEventListener('keydown',event=>{if(event.key==='Enter'||event.key===' '){event.preventDefault();closeButton.click()}});
  sheet.addEventListener('scroll',()=>{if(window.WinefundayUpdateToTop)window.WinefundayUpdateToTop()},{passive:true});
}

function activeSheet(){return document.querySelector('.wf-modal:not([hidden]) .wf-sheet')}
function wireToTop(){
  const button=document.getElementById('toTop');if(!button)return;
  const update=()=>{const sheet=activeSheet(),distance=sheet?sheet.scrollTop:window.scrollY;button.classList.toggle('visible',distance>(sheet?160:360))};
  if(button.dataset.wfTopReady){update();return}
  button.dataset.wfTopReady='1';
  button.onclick=()=>{const sheet=activeSheet();if(sheet)sheet.scrollTo({top:0,behavior:'smooth'});else window.scrollTo({top:0,behavior:'smooth'})};
  window.addEventListener('scroll',update,{passive:true});
  document.addEventListener('scroll',update,true);
  update();
  window.WinefundayUpdateToTop=update;
}

function scan(){document.querySelectorAll('.wf-modal').forEach(wireSheet);wireToTop();if(window.WinefundayUpdateToTop)window.WinefundayUpdateToTop()}
scan();
const observer=new MutationObserver(scan);observer.observe(document.documentElement,{childList:true,subtree:true,attributes:true,attributeFilter:['hidden']});
document.addEventListener('DOMContentLoaded',scan,{once:true});
})();
