/* WINEFUNDAY_INSIGHTS_CLEAN_V16 — force radar-only Insights + compact selection footer */
(()=>{'use strict';
function clean(){document.querySelectorAll('.wf-eye').forEach(eye=>{
  eye.querySelectorAll('.wf-pairing').forEach(el=>el.remove());
  const all=[...eye.querySelectorAll('*')];
  all.forEach(el=>{const t=(el.textContent||'').replace(/\s+/g,' ').trim();if(!t)return;
    if(/^PASST BESONDERS ZU/i.test(t)||/Elegant\s*[·•]|Komplex\s*[·•]|Mineralisch\s*[·•]|Präzise|Frisch, elegant|Vollmundig,|Reife Früchte|Runde Textur|feiner Säure|mineralisches Finish/i.test(t)){
      if(!el.querySelector('canvas')&&!el.querySelector('svg'))el.style.display='none';
    }
  });
  const footer=[...eye.querySelectorAll('*')].filter(el=>/^WINEFUNDAY\s*[·•]\s*SELECTION$/i.test((el.textContent||'').replace(/\s+/g,' ').trim())).sort((a,b)=>a.querySelectorAll('*').length-b.querySelectorAll('*').length)[0];
  if(footer){footer.style.display='block';footer.style.margin='18px 0 0';footer.style.padding='18px 0 8px';footer.style.borderTop='1px solid #bdc8c3';footer.style.minHeight='0';footer.style.height='auto';
    let p=footer.parentElement;while(p&&p!==eye){p.style.minHeight='0';p.style.height='auto';p.style.paddingBottom='0';p=p.parentElement;}
  }
  eye.style.minHeight='0';eye.style.height='auto';eye.style.paddingBottom='6px';
});}
function run(){clean();[50,120,250,500,1000,1600].forEach(ms=>setTimeout(clean,ms))}
window.WinefundayInsightsClean=clean;
window.addEventListener('load',run,{once:true});document.addEventListener('click',run,false);
})();