/* WINEFUNDAY_INSIGHT_LOADER_V6 — deterministic load order for insights, pairing icons, spacing and engagement analytics */
(()=>{'use strict';
const s=document.createElement('style');
s.id='winefunday-mobile-card-restore-v1';
s.textContent='@media(max-width:580px){.card h2{font-size:18px!important;line-height:19px!important;margin:4px 0!important;letter-spacing:normal!important;height:38px!important;min-height:38px!important}.card .producer{font-size:15px!important;line-height:normal!important}.card .quick span{font-size:14px!important}.card .quick strong{font-size:13px!important;line-height:normal!important}}';
document.head.appendChild(s);
const engagement=document.createElement('script');
engagement.src='engagement-analytics.js?v=20260916-1735';
engagement.async=false;
document.head.appendChild(engagement);
const base=document.createElement('script');
base.src='insight-base.js?v=20260913-0938';
base.async=false;
base.onload=()=>{
  const icons=document.createElement('script');
  icons.src='pairing-icons.js?v=20260914-1520';
  icons.async=false;
  icons.onload=()=>{
    if(window.WinefundayPairingIconsApply)window.WinefundayPairingIconsApply();
    let fix=document.getElementById('winefunday-pairing-filled-subtle-fix');
    if(!fix){
      fix=document.createElement('style');
      fix.id='winefunday-pairing-filled-subtle-fix';
      fix.textContent='.wf-pi{width:52px!important;height:52px!important;margin:0 auto 9px!important;border:0!important;border-radius:50%!important;background:#f1eee8!important;color:#24372f!important;display:grid!important;place-items:center!important;overflow:visible!important;box-shadow:none!important}.wf-pi .wf-food-svg{display:block!important;width:32px!important;height:32px!important;fill:#24372f!important;stroke:none!important;overflow:visible!important}.wf-pi .wf-food-svg *{fill:#24372f!important;stroke:none!important}.wf-pl{color:#34463f!important;font-size:10px!important;line-height:1.25!important}@media(max-width:580px){.wf-pi{width:48px!important;height:48px!important}.wf-pi .wf-food-svg{width:29px!important;height:29px!important}}';
      document.head.appendChild(fix);
    }
  };
  document.head.appendChild(icons);
  const spacing=document.createElement('script');
  spacing.src='detail-spacing.js?v=20260913-1518';
  spacing.async=false;
  document.head.appendChild(spacing);
};
document.head.appendChild(base);
})();
