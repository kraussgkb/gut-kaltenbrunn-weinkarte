/* WINEFUNDAY_PAIRING_ICONS_V6 — isolated visual enhancement; no observer, no capture listener, no Insights logic */
(()=>{'use strict';
const ICONS={
schnitzel:'<path d="M3 15c1-4 4-7 9-7 5 0 8 3 9 7-2 3-5 5-9 5s-7-2-9-5Z"/><path d="M7 14c2-2 8-2 10 0M8 17c2-1 6-1 8 0"/>',
beef:'<path d="M4 10c3-5 13-6 17-1 3 4 0 10-6 11-6 2-12-1-12-6 0-1 0-3 1-4Z"/><path d="M8 11c2-2 7-3 10 0 2 2 1 5-2 6-4 2-8 0-9-3"/><circle cx="17" cy="11" r=".7"/>',
poultry:'<path d="M5 15c0-5 4-9 9-9 4 0 7 3 7 7 0 5-4 8-9 8-4 0-7-2-7-6Z"/><path d="M16 7l3-3m-1 1 3 1M9 19l-1 3m6-2 1 2"/>',
fish:'<path d="M3 13c4-5 10-6 15-2l3-3v9l-3-3c-5 4-11 3-15-1Z"/><circle cx="8" cy="12" r=".7"/><path d="M13 9l2-3M13 16l2 3"/>'
};
function typeFor(label){const t=(label||'').toLowerCase();if(/tafelspitz|steak|rinder?filet|entrec[oô]te|roastbeef|rind/.test(t))return'beef';if(/schnitzel/.test(t))return'schnitzel';if(/brathendl|backhendl|hendl|huhn|hähn|haehn|geflügel|poularde|poulet/.test(t))return'poultry';if(/zander|saibling|forelle|fisch|lachs|thunfisch|seezunge|steinbutt|kabeljau/.test(t))return'fish';return null}
function apply(){document.querySelectorAll('.wf-pair').forEach(pair=>{const label=pair.querySelector('.wf-pl')?.textContent||'';const type=typeFor(label);const svg=pair.querySelector('.wf-pi svg');if(!type||!svg||svg.dataset.wfPairingIcon===type)return;svg.innerHTML=ICONS[type];svg.dataset.wfPairingIcon=type})}
function schedule(){setTimeout(apply,80)}
window.WinefundayPairingIconsApply=apply;
window.addEventListener('load',schedule,{once:true});
document.addEventListener('click',schedule,false);
})();
