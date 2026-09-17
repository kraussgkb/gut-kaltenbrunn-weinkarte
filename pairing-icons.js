/* WINEFUNDAY_PAIRING_ICONS_V14 — rebuilds only PASST BESONDERS ZU visual row */
(()=>{'use strict';
const G='#004438';
const ICON={
aperitif:'<path d="M5 5h14l-6 7v7h4M9 19h8M13 12 9 8h8M16 5l3-2M17 5l2 2"/>',
fish:'<path d="M3 12c4-5 10-6 15-2l4-3v10l-4-3c-5 4-11 3-15-2Z"/><circle cx="8" cy="11" r=".7"/><path d="m13 9 2-3m-2 9 2 3"/>',
seafood:'<path d="M5 15c1-5 4-8 9-8 4 0 7 2 8 5-2 5-6 8-11 7-3-.5-5-2-6-4Z"/><path d="M8 11c2 3 5 4 8 2m2-4 3-3m-2 6 4-1M8 18l-3 3"/>',
scallop:'<path d="M12 4C7 4 3 8 3 14c0 4 4 7 9 8 5-1 9-4 9-8 0-6-4-10-9-10Z"/><path d="M12 5v16M8 6l3 15m5-15-3 15M5 9l5 12m9-12-5 12"/>',
oyster:'<path d="M4 15C5 9 9 5 15 5c5 0 8 3 7 7-1 6-6 10-12 10-5 0-8-3-6-7Z"/><path d="M7 16c2-5 7-7 11-5-1 4-5 7-9 6m1-7c2-1 5-1 7 1"/>',
poultry:'<path d="M5 15c0-5 4-9 9-9 4 0 7 3 7 7 0 5-4 8-9 8-4 0-7-2-7-6Z"/><path d="m16 7 3-3m-1 1 3 1M9 19l-1 3m6-2 1 2"/>',
beef:'<path d="M4 10c3-5 13-6 17-1 3 4 0 10-6 11-6 2-12-1-12-6 0-1 0-3 1-4Z"/><path d="M8 11c2-2 7-3 10 0 2 2 1 5-2 6-4 2-8 0-9-3"/><circle cx="17" cy="11" r=".8"/>',
lamb:'<path d="M4 18c2-5 5-8 10-9 3 0 5 2 6 5-2 1-4 1-6 0l-3 7M8 15l-3 6M15 10l2-5m1 6 3-3"/><path d="M10 11c2 1 4 1 6 0"/>',
game:'<path d="M12 21v-9M12 12c-3-1-5-3-5-6 3 0 5 1 5 4 0-3 2-4 5-4 0 3-2 5-5 6Z"/><path d="M8 7 5 3m11 4 3-4M7 11l-4-2m14 2 4-2M9 15l3 2 3-2"/>',
wildpoultry:'<path d="M4 16c2-6 7-9 12-8 3 1 5 3 5 6-3 0-5 1-7 3-3 3-8 2-10-1Z"/><path d="m16 8 2-4 1 4M7 18l-1 3m6-3 1 3"/>',
cheese:'<path d="M4 17 15 6l6 5-10 10H4Z"/><circle cx="13" cy="13" r="1"/><circle cx="9" cy="17" r="1"/><path d="M15 6 4 10l7 3"/>',
truffle:'<path d="M6 16c-2-2-1-5 1-6-1-3 2-5 5-4 2-2 5 0 5 2 3 0 4 3 3 5 2 2 0 5-2 5-2 3-6 3-8 1-2 1-5-1-6-3Z"/><path d="M8 12c3-1 6 0 8 3m-6-7c1 2 1 5 0 7"/>',
vegetable:'<path d="M8 21c-1-6 0-11 4-15 4 4 5 9 4 15M8 13h8M9 17h6"/><path d="M12 6V3m0 3L9 4m3 2 3-2"/>',
mushroom:'<path d="M4 12c1-5 4-8 8-8s7 3 8 8H4Z"/><path d="M10 12c1 3 1 6-1 9h6c-2-3-2-6-1-9"/>',
mediterranean:'<circle cx="12" cy="13" r="7"/><path d="M12 6c-1-2-3-3-5-2m5 2c1-2 3-3 5-2M8 11c3-2 6-2 8 0M9 16c2 1 4 1 6 0"/>',
asian:'<path d="M5 12h14c0 5-3 8-7 8s-7-3-7-8Z"/><path d="M7 9 18 3m-8 7L21 4M9 20h6"/>',
dessert:'<path d="M5 19h14L16 8H8L5 19Z"/><path d="M7 15h10M9 8c0-2 1-3 3-3s3 1 3 3"/><circle cx="12" cy="4" r="1"/>',
chocolate:'<path d="M5 6h14v14H5Z"/><path d="M5 11h14M5 16h14M10 6v14M15 6v14"/>'};
function typeFor(label){const t=(label||'').toLowerCase();if(/jakobsmuschel|scallop/.test(t))return'scallop';if(/auster|oyster/.test(t))return'oyster';if(/aperitif|apéritif/.test(t))return'aperitif';if(/fasan|wachtel|wildgeflügel|wildgefluegel/.test(t))return'wildpoultry';if(/kaviar|caviar|seeigel|sea urchin|meeresfrüchte|meeresfruechte|seafood|garnele|shrimp|krabbe|krebs|hummer|lobster|muschel/.test(t))return'seafood';if(/zander|saibling|forelle|fisch|lachs|thunfisch|seezunge|steinbutt|kabeljau/.test(t))return'fish';if(/wagyu|tafelspitz|geschmort.*rind|rind|steak|rinder?filet|entrec[oô]te|roastbeef/.test(t))return'beef';if(/lamm|karree/.test(t))return'lamb';if(/wild|reh|hirsch|venison/.test(t))return'game';if(/brathendl|backhendl|hendl|huhn|hähn|haehn|geflügel|gefluegel|poularde|poulet/.test(t))return'poultry';if(/trüffel|trueffel/.test(t))return'truffle';if(/käse|kaese|parmesan|ziegenkäse|ziegenkaese|blauschimmel/.test(t))return'cheese';if(/pilz|steinpilz|morchel|champignon/.test(t))return'mushroom';if(/spargel|gemüse|gemuese|artischock|zucchini|aubergine|fenchel|tomat/.test(t))return'vegetable';if(/asiatisch|asia|sushi|curry|thai/.test(t))return'asian';if(/mediterran|pizza|pasta|risotto/.test(t))return'mediterranean';if(/schokolade|chocolate/.test(t))return'chocolate';if(/dessert|kuchen|tarte|süß|suess/.test(t))return'dessert';return'fish'}
function rebuild(){document.querySelectorAll('.wf-pairing').forEach(section=>{const old=[...section.querySelectorAll('.wf-pair')];if(!old.length)return;const data=old.map(x=>x.querySelector('.wf-pl')?.textContent?.trim()).filter(Boolean);const grid=section.querySelector('.wf-pairs');if(!grid||!data.length)return;grid.innerHTML=data.map(label=>{const type=typeFor(label);return '<div class="wf-pair wf-pair-new"><span class="wf-pi"><svg viewBox="0 0 24 24" aria-hidden="true">'+ICON[type]+'</svg></span><span class="wf-pl">'+label.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))+'</span></div>'}).join('');section.dataset.wfPairRebuilt='14'})}
function run(){[0,80,200,450,900].forEach(ms=>setTimeout(rebuild,ms))}
window.WinefundayPairingIconsApply=rebuild;window.addEventListener('load',run,{once:true});document.addEventListener('click',run,false);
const style=document.createElement('style');style.textContent='.wf-pairing .wf-pair-new .wf-pi{color:'+G+'!important}.wf-pairing .wf-pair-new .wf-pi svg{display:block!important;overflow:visible!important}';document.head.appendChild(style);
})();