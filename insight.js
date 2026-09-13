/* WINEFUNDAY_INSIGHT_LOADER_V1 — loads the preserved insight implementation and restores the proven mobile card typography */
(()=>{'use strict';
const s=document.createElement('style');
s.id='winefunday-mobile-card-restore-v1';
s.textContent='@media(max-width:580px){.card h2{font-size:18px!important;line-height:19px!important;margin:4px 0!important;letter-spacing:normal!important;height:38px!important;min-height:38px!important}.card .producer{font-size:15px!important;line-height:normal!important}.card .quick span{font-size:14px!important}.card .quick strong{font-size:13px!important;line-height:normal!important}}';
document.head.appendChild(s);
const base=document.createElement('script');
base.src='insight-base.js';
base.defer=true;
document.head.appendChild(base);
})();

/* WINEFUNDAY_PAIRING_VISUAL_V2 — visually explicit icons; leaves pairing text and data untouched */
(()=>{'use strict';
const style=document.createElement('style');
style.id='winefunday-pairing-visual-v2';
style.textContent=`
.wf-pair.wf-explicit-icon .wf-pi svg{display:none!important}
.wf-pair.wf-explicit-icon .wf-pi::before{content:"";display:block;width:27px;height:27px;background-repeat:no-repeat;background-position:center;background-size:contain}
.wf-pair.wf-icon-aperitif .wf-pi::before{background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' fill='none' stroke='%23004438' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M10 4h12l-1 8c-.5 4-2.5 7-5 8-2.5-1-4.5-4-5-8L10 4Z'/%3E%3Cpath d='M12 10h8M16 20v7M11 28h10'/%3E%3Ccircle cx='14' cy='8' r='1' fill='%23004438' stroke='none'/%3E%3Ccircle cx='18' cy='6.5' r='.8' fill='%23004438' stroke='none'/%3E%3C/svg%3E")}
.wf-pair.wf-icon-seafood .wf-pi::before{background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' fill='none' stroke='%23004438' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M5 17c5-6 12-6 18 0-6 6-13 6-18 0Z'/%3E%3Cpath d='m23 17 5-5v10l-5-5Z'/%3E%3Ccircle cx='11' cy='15.5' r='1' fill='%23004438' stroke='none'/%3E%3Cpath d='M8 24c5 2 11 2 16 0'/%3E%3C/svg%3E")}
.wf-pair.wf-icon-scallop .wf-pi::before{background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' fill='none' stroke='%23004438' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M16 5C9 5 5 10 5 18c3 5 7 8 11 9 4-1 8-4 11-9 0-8-4-13-11-13Z'/%3E%3Cpath d='M16 6v19M16 7 10 24M16 7l6 17M15 8 7 20M17 8l8 12'/%3E%3C/svg%3E")}
.wf-pair.wf-icon-oyster .wf-pi::before{background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' fill='none' stroke='%23004438' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 19c2-8 18-8 20 0-3 6-17 6-20 0Z'/%3E%3Cpath d='M8 17c3-5 13-5 16 0M10 21c4 2 8 2 12 0'/%3E%3Ccircle cx='16' cy='18' r='2.2' fill='%23004438' stroke='none'/%3E%3C/svg%3E")}
.wf-pair.wf-icon-mussel .wf-pi::before{background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' fill='none' stroke='%23004438' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M16 5C8 8 6 14 8 21c2 5 6 7 8 7s6-2 8-7c2-7 0-13-8-16Z'/%3E%3Cpath d='M16 6v20M16 8 11 24M16 8l5 16'/%3E%3C/svg%3E")}
`;
document.head.appendChild(style);
function classify(){
  document.querySelectorAll('.wf-pair').forEach(pair=>{
    const label=(pair.querySelector('.wf-pl')?.textContent||'').trim().toLowerCase();
    pair.classList.remove('wf-explicit-icon','wf-icon-aperitif','wf-icon-seafood','wf-icon-scallop','wf-icon-oyster','wf-icon-mussel');
    let cls='';
    if(/aperitif|apéritif/.test(label))cls='wf-icon-aperitif';
    else if(/jakobsmuschel|scallop|coquille/.test(label))cls='wf-icon-scallop';
    else if(/auster|oyster/.test(label))cls='wf-icon-oyster';
    else if(/muschel|miesmuschel|vongole/.test(label))cls='wf-icon-mussel';
    else if(/meeresfrüchte|meeresfruechte|seafood|fisch/.test(label))cls='wf-icon-seafood';
    if(cls)pair.classList.add('wf-explicit-icon',cls);
  });
}
classify();
const mo=new MutationObserver(classify);
mo.observe(document.documentElement,{childList:true,subtree:true});
setTimeout(()=>mo.disconnect(),12000);
})();
