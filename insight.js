/* WINEFUNDAY_INSIGHT_LOADER_V11 — insights loader only; engagement lives in analytics.js */
(()=>{'use strict';
const s=document.createElement('style');s.id='winefunday-mobile-card-restore-v1';
s.textContent='@media(max-width:580px){.card h2{font-size:18px!important;line-height:19px!important;margin:4px 0!important;letter-spacing:normal!important;height:38px!important;min-height:38px!important}.card .producer{font-size:15px!important;line-height:normal!important}.card .quick span{font-size:14px!important}.card .quick strong{font-size:13px!important;line-height:normal!important}}';
document.head.appendChild(s);
const socialFix=document.createElement('style');socialFix.id='winefunday-social-spacing-v1';socialFix.textContent='.winefunday-social-block{padding:30px 30px 24px!important}.winefunday-social-layout{padding:4px 0 0!important}.winefunday-social-actions{margin-left:0!important;margin-right:0!important}.winefunday-social-closing{margin-top:24px!important}.winefunday-social-privacy{margin:10px 12px 2px!important}@media(max-width:620px){.winefunday-social-block{padding:26px 20px 21px!important}}';document.head.appendChild(socialFix);
const base=document.createElement('script');
base.src='insight-base.js?v=20260918-1000';
base.async=false;
base.onload=()=>{
  const icons=document.createElement('script');icons.src='pairing-icons-outline.js?v=20260918-1030';icons.async=false;document.head.appendChild(icons);
  const spacing=document.createElement('script');spacing.src='detail-spacing.js?v=20260913-1518';spacing.async=false;document.head.appendChild(spacing);
};
document.head.appendChild(base);
})();
