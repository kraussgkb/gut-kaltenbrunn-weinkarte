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
const icons=document.createElement('script');
icons.src='pairing-icons.js';
icons.defer=true;
document.head.appendChild(icons);
})();
