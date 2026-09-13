/* WINEFUNDAY_INSIGHT_LOADER_V3 — deterministic load order for insights, pairing icons and reversible detail polish */
(()=>{'use strict';
const s=document.createElement('style');
s.id='winefunday-mobile-card-restore-v1';
s.textContent='@media(max-width:580px){.card h2{font-size:18px!important;line-height:19px!important;margin:4px 0!important;letter-spacing:normal!important;height:38px!important;min-height:38px!important}.card .producer{font-size:15px!important;line-height:normal!important}.card .quick span{font-size:14px!important}.card .quick strong{font-size:13px!important;line-height:normal!important}}';
document.head.appendChild(s);
const base=document.createElement('script');
base.src='insight-base.js?v=20260913-0946';
base.async=false;
base.onload=()=>{
  const icons=document.createElement('script');
  icons.src='pairing-icons.js?v=20260913-0946';
  icons.async=false;
  icons.onload=()=>{if(window.WinefundayPairingIconsApply)window.WinefundayPairingIconsApply()};
  document.head.appendChild(icons);
  const polish=document.createElement('script');
  polish.src='detail-polish.js?v=20260913-0946';
  polish.async=false;
  document.head.appendChild(polish);
};
document.head.appendChild(base);
})();
