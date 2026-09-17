/* WINEFUNDAY_INSIGHTS_CLEAN_V15 — remove pairing and tasting-copy blocks; keep radar + compact selection footer */
(()=>{'use strict';
function clean(){document.querySelectorAll('.wf-eye').forEach(eye=>{
  const pairing=eye.querySelector('.wf-pairing');
  if(pairing)pairing.remove();
  [...eye.children].forEach(el=>{
    const t=(el.textContent||'').replace(/\s+/g,' ').trim();
    if(!t)return;
    if(/^PASST BESONDERS ZU/i.test(t))el.remove();
    else if(/Elegant\s*[·•]|Komplex\s*[·•]|Mineralisch\s*[·•]|Präzise/i.test(t))el.remove();
    else if(/Vollmundig,|Reife Früchte|Runde Textur|feiner Säure/i.test(t))el.remove();
  });
  const footer=[...eye.querySelectorAll('*')].find(el=>/^WINEFUNDAY\s*[·•]\s*SELECTION$/i.test((el.textContent||'').replace(/\s+/g,' ').trim()));
  if(footer){footer.style.marginTop='18px';footer.style.paddingTop='18px';footer.style.borderTop='1px solid #bdc8c3';footer.style.paddingBottom='8px';}
});}
function run(){[0,80,180,350,700].forEach(ms=>setTimeout(clean,ms))}
window.addEventListener('load',run,{once:true});document.addEventListener('click',run,false);
})();