/* WINEFUNDAY_PAIRING_ICONS_V7 — refined editorial glyphs, centered pairing layout */
(()=>{'use strict';
const C='#26332f', BG='#f3efe7';
const svg=(body)=>`<svg class="wf-food-svg" viewBox="0 0 48 48" aria-hidden="true" focusable="false">${body}</svg>`;
const fill=d=>`<path d="${d}" fill="${C}"/>`;
const stroke=d=>`<path d="${d}" fill="none" stroke="${C}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>`;
const circle=(cx,cy,r)=>`<circle cx="${cx}" cy="${cy}" r="${r}" fill="${C}"/>`;
const I={
  aperitif:svg(stroke('M13 8h10l-2 11c-.6 3.2-2.5 5.7-5 6.8V37h6M10 37h12M29 9h8l-1.5 9c-.5 2.5-2 4.4-4.5 5.4V37h5M27 37h9')+stroke('M12 14h10M28 15h8')),
  game:svg(stroke('M17 14c-5-2-8-6-8-11M15 13c-1-4-1-8 1-11M31 14c5-2 8-6 8-11M33 13c1-4 1-8-1-11')+fill('M16 16c2-4 5-6 8-6s6 2 8 6l2 8c1 5-2 13-10 19-8-6-11-14-10-19l2-8Z')+circle(20,25,1.5)+circle(28,25,1.5)),
  beef:svg(fill('M8 15c4-7 12-10 21-7 8 3 13 10 11 17-2 8-11 14-21 13C10 37 4 32 5 25c0-4 1-7 3-10Z')+`<ellipse cx="22" cy="24" rx="7" ry="5" fill="${BG}"/>`+circle(22,24,2.5)),
  veal:svg(fill('M9 14c4-6 10-8 17-7 9 2 15 9 14 17-1 9-9 15-18 15S6 33 6 25c0-4 1-8 3-11Z')+`<ellipse cx="19" cy="24" rx="6" ry="4.5" fill="${BG}"/>`),
  pork:svg(fill('M10 15c5-5 11-8 19-7 8 1 13 6 13 12 0 5-3 9-7 11-3 6-9 9-16 8C10 38 5 33 5 26c0-4 2-8 5-11Z')+circle(34,19,2)+`<ellipse cx="28" cy="29" rx="6" ry="3.5" fill="${BG}"/>`+circle(26,29,1)+circle(30,29,1)),
  lamb:svg(fill('M10 20c0-7 5-12 12-12 4 0 7 2 9 5 7 0 12 5 12 11 0 5-3 9-8 11v8h-5v-7H19v7h-5v-9c-5-2-8-7-8-12 0-1 0-2 .5-3L10 20Z')),
  poultry:svg(fill('M9 14c6-7 16-7 22-1 6 7 4 17-4 23-8 6-19 4-22-4-3-6-1-13 4-18Z')+fill('M32 16l11-5-5 8 5 4-12-1 1-6Z')),
  duck:svg(fill('M7 28c4-9 12-13 21-10 2-7 8-10 15-7-5 3-5 8 0 11-6 1-9 4-11 9-3 7-11 11-19 9-6-1-9-5-11-10l5-2Z')),
  rabbit:svg(fill('M17 15C13 9 13 3 17 1c5 3 6 8 6 13 3-7 7-11 10-11 2 6 1 12-3 16 6 3 9 8 9 14 0 9-7 14-16 14S7 42 7 33c0-8 4-14 10-18Z')),
  schnitzel:svg(fill('M8 15c5-7 15-10 25-7 9 3 13 10 10 18-3 9-14 15-25 13C8 37 3 31 5 24c.5-3 1.5-6 3-9Z')+stroke('M13 19c7-4 16-3 23 2M12 28c7-2 14-1 20 3')),
  fish:svg(fill('M4 24c7-9 18-12 30-6l10-7-3 13 3 13-10-7C22 36 11 33 4 24Z')+`<circle cx="15" cy="21" r="2" fill="${BG}"/>`),
  salmon:svg(fill('M4 24c8-8 18-11 29-7l11-7-4 11 4 5-11 2c-11 8-22 6-29-4Z')+`<circle cx="14" cy="21" r="2" fill="${BG}"/>`),
  tuna:svg(fill('M3 24c8-7 19-11 31-7l10-6-4 10 4 6-10-2c-11 8-23 7-31-1Z')+`<circle cx="15" cy="21" r="2" fill="${BG}"/>`),
  flatfish:svg(fill('M9 24c3-10 12-16 22-13 9 3 14 12 11 20-3 9-13 13-23 9C10 37 6 31 9 24Z')+`<circle cx="19" cy="20" r="2" fill="${BG}"/><circle cx="26" cy="22" r="2" fill="${BG}"/>`),
  lobster:svg(fill('M20 11c0-6 8-6 8 0v21c0 6-8 6-8 0V11Z')+fill('M18 15l-6-8-7 4 6 6-8 4 9 3 6-5v-4Zm12 0 6-8 7 4-6 6 8 4-9 3-6-5v-4ZM18 28l-9 7 6 3 5-5v-5Zm12 0 9 7-6 3-5-5v-5Z')),
  shrimp:svg(stroke('M38 13c-4-8-15-10-23-4C7 15 7 27 14 34c6 6 15 7 22 3-6 0-11-3-13-8 7 2 14-3 15-10 0-2 0-4-1-6')+circle(29,15,1.8)),
  crab:svg(fill('M15 18c5-6 13-6 18 0 4 5 4 11 0 16-5 6-13 6-18 0-4-5-4-11 0-16Z')+fill('M12 18 5 13 2 18l6 5-6 3 4 5 7-5v-8Zm24 0 7-5 3 5-6 5 6 3-4 5-7-5v-8ZM15 35l-8 8 6 1 5-7m15-2 8 8-6 1-5-7Z')),
  scallop:svg(fill('M24 7C14 7 7 15 7 25c3 8 9 14 17 18 8-4 14-10 17-18 0-10-7-18-17-18Z')+stroke('M24 10v29M18 11l4 28M30 11l-4 28M12 18l9 22M36 18l-9 22')),
  mussel:svg(fill('M11 39C7 29 9 16 18 8c9-3 17 1 18 10 2 11-7 21-25 21Z')+stroke('M16 34c7-2 13-8 16-16')),
  oyster:svg(fill('M6 28c2-11 13-19 25-17 9 2 14 9 12 17-2 9-13 15-23 14C10 41 4 36 6 28Z')+`<ellipse cx="25" cy="27" rx="10" ry="6" fill="${BG}"/>`),
  squid:svg(fill('M24 5c8 6 12 14 10 23l-6 2 5 14-7-10-2 13-3-13-7 10 5-14-6-2c-2-9 3-17 11-23Z')),
  sushi:svg(fill('M10 13h28v22H10V13Zm5 5v12h18V18H15Z')+`<rect x="18" y="21" width="12" height="6" rx="2" fill="${BG}"/>`),
  asparagus:svg(fill('M8 43V15l5-10 5 10v28H8Zm13 0V12l5-9 5 9v31H21Zm13 0V17l4-8 4 8v26h-8Z')),
  artichoke:svg(fill('M24 5c5 3 8 8 8 13 3-3 7-4 10-3 0 7-3 13-9 17 3 0 6 2 8 4-5 7-11 10-17 10S12 43 7 36c2-2 5-4 8-4-6-4-9-10-9-17 3-1 7 0 10 3 0-5 3-10 8-13Z')),
  mushroom:svg(fill('M5 24C7 14 14 8 24 8s17 6 19 16H5Zm15 2h8l3 17H17l3-17Z')),
  tomato:svg(fill('M24 11c11 0 18 7 18 16S35 44 24 44 6 36 6 27 13 11 24 11Zm0-8 3 7 8-2-5 6-6-3-6 3-5-6 8 2 3-7Z')),
  pepper:svg(fill('M22 10c-2-4 0-7 5-8 0 4 2 6 4 7 8 2 12 8 11 17-1 11-8 19-18 19S7 37 7 26c0-9 6-15 15-16Z')),
  zucchini:svg(fill('M11 38c-4-4-3-11 2-16L32 7l10 9-15 20c-5 6-12 7-16 2Zm21-31 2-6 7 4-2 6-7-4Z')),
  aubergine:svg(fill('M27 10c8 2 14 9 12 18-2 11-13 17-23 14C6 39 2 27 10 19c4-5 9-8 17-9Zm0 0 2-8 7 3 5-2-2 8-12-1Z')),
  fennel:svg(fill('M24 44c-9-3-14-11-13-20 1-7 6-12 13-13 7 1 12 6 13 13 1 9-4 17-13 20Z')+stroke('M24 11V2M24 11 15 3M24 11l9-8')),
  carrot:svg(fill('M18 13c8 1 13 7 15 14L13 46c-5-2-9-6-10-11l15-22Zm1-1L17 2l6 7 4-8 2 9 8-4-6 10-12-4Z')),
  beet:svg(fill('M24 15c9 0 16 6 16 14S33 44 24 44 8 37 8 29s7-14 16-14Zm0 0L21 1l6 9 7-6-2 11h-8Z')),
  pumpkin:svg(fill('M24 12c11 0 18 7 18 16S35 44 24 44 6 37 6 28s7-16 18-16Z')+stroke('M24 15v26M16 16c-5 6-5 18 0 24M32 16c5 6 5 18 0 24')+fill('M22 12l2-8 5 2-3 6Z')),
  cabbage:svg(fill('M24 7c11 0 18 9 18 20 0 10-8 17-18 17S6 37 6 27C6 16 13 7 24 7Z')+stroke('M24 12v27M12 20c7 3 11 9 12 17M36 20c-7 3-11 9-12 17')),
  spinach:svg(fill('M24 45C13 38 7 29 9 19c2-8 8-13 15-15 8 2 14 7 16 15 2 10-5 19-16 26Z')+stroke('M24 40V10M24 24l-9-8M24 31l10-10')),
  peas:svg(fill('M6 31c8-13 22-19 36-16-2 15-14 25-31 26L6 31Z')+`<circle cx="18" cy="31" r="3" fill="${BG}"/><circle cx="27" cy="26" r="3" fill="${BG}"/><circle cx="35" cy="21" r="3" fill="${BG}"/>`),
  salad:svg(fill('M5 20h38c-3 16-10 24-19 24S8 36 5 20Z')+fill('M12 17c0-7 7-10 12-5 5-5 12-2 12 5-8-2-16-2-24 0Z')),
  herbs:svg(stroke('M24 43V20M24 20C14 21 9 15 9 7c8 0 14 4 15 12M24 20c1-9 8-14 16-14 0 10-7 16-16 16')),
  potato:svg(fill('M8 16c4-9 15-13 24-9 10 4 14 15 9 25-4 10-15 14-25 9C7 37 3 25 8 16Z')+`<circle cx="19" cy="20" r="2" fill="${BG}"/><circle cx="30" cy="30" r="2" fill="${BG}"/><circle cx="17" cy="33" r="2" fill="${BG}"/>`),
  rice:svg(fill('M5 19h38c-2 16-9 24-19 24S7 35 5 19Z')+stroke('M11 16c4-7 22-7 26 0')),
  pasta:svg(fill('M8 12h32l-3 30H11L8 12Z')+stroke('M14 20c6-5 14 5 20 0M15 29c6-5 12 5 18 0')),
  risotto:svg(fill('M5 19h38c-2 16-9 24-19 24S7 35 5 19Z')+stroke('M11 16c4-7 22-7 26 0')+`<circle cx="18" cy="27" r="1.7" fill="${BG}"/><circle cx="25" cy="32" r="1.7" fill="${BG}"/><circle cx="32" cy="27" r="1.7" fill="${BG}"/>`),
  bread:svg(fill('M8 18c3-9 11-14 20-13 10 1 17 9 16 19-1 12-10 19-23 19C9 43 3 35 5 26c.5-3 1.5-6 3-8Z')+stroke('M16 14l5 7M24 10l5 7M32 12l5 7')),
  cheese:svg(fill('M5 17 24 7l19 10v26H5V17Z')+stroke('M5 17h38')+`<circle cx="16" cy="28" r="3" fill="${BG}"/><circle cx="29" cy="35" r="3" fill="${BG}"/><circle cx="36" cy="25" r="2.5" fill="${BG}"/>`),
  softcheese:svg(fill('M11 10h26v33H11V10Z')+`<rect x="16" y="16" width="16" height="21" rx="2" fill="${BG}"/>`),
  goatcheese:svg(fill('M8 16c6-8 26-8 32 0v20c-6 8-26 8-32 0V16Z')+stroke('M12 19c6 4 18 4 24 0M12 33c6 4 18 4 24 0')),
  bluecheese:svg(fill('M5 17 24 7l19 10v26H5V17Z')+stroke('M5 17h38')+`<circle cx="16" cy="28" r="3" fill="${BG}"/><circle cx="29" cy="35" r="3" fill="${BG}"/><circle cx="36" cy="25" r="2.5" fill="${BG}"/><circle cx="22" cy="22" r="2" fill="${BG}"/>`),
  dessert:svg(fill('M9 17h30l-3 26H12L9 17Z')+fill('M13 14c2-8 20-8 22 0H13Z')+circle(24,7,4)),
  chocolate:svg(fill('M10 6h28v36H10V6Z')+`<rect x="14" y="10" width="8" height="8" rx="1" fill="${BG}"/><rect x="26" y="10" width="8" height="8" rx="1" fill="${BG}"/><rect x="14" y="22" width="8" height="8" rx="1" fill="${BG}"/><rect x="26" y="22" width="8" height="8" rx="1" fill="${BG}"/>`),
  nuts:svg(fill('M13 9c7-6 15 2 12 10-3 8-12 17-18 11-6-5 0-15 6-21Zm22 3c7-2 10 8 6 15-4 7-12 12-17 6-5-7 4-19 11-21Z')),
  fruit:svg(fill('M24 13c10 0 17 7 17 16s-7 16-17 16S7 38 7 29s7-16 17-16Z')+fill('M24 11c-2-6 1-10 7-10-1 6-4 9-7 10Zm-2 2c-6-1-9-4-9-9 6 0 9 3 9 9Z')),
  default:svg(stroke('M24 7v34M12 8v14c0 4 3 7 7 7M8 8v11M16 8v11M33 8v33M33 8c6 4 8 10 8 16h-8'))
};
const rules=[
[/aperitif|apéritif|empfang|welcome/,'aperitif'],[/schnitzel/,'schnitzel'],[/hirsch|reh|wild|venison/,'game'],[/kalb|veal/,'veal'],[/steak|rinder?filet|entrec[oô]te|roastbeef|rind|ochse/,'beef'],[/schwein|pork|spanferkel|speck/,'pork'],[/lamm|lamb|karree/,'lamb'],[/ente|duck/,'duck'],[/kaninchen|rabbit/,'rabbit'],[/huhn|hähn|haehn|geflügel|poularde|poulet|backhendl|brathendl|hendl|gans|truthahn/,'poultry'],
[/jakobs?muschel|scallop|coquille/,'scallop'],[/auster|oyster/,'oyster'],[/miesmuschel/,'mussel'],[/hummer|lobster|languste/,'lobster'],[/garnele|shrimp|scampi/,'shrimp'],[/krabbe|krebs/,'crab'],[/calamari|kalamar|tintenfisch|squid/,'squid'],[/sushi|sashimi/,'sushi'],[/steinbutt|seezunge/,'flatfish'],[/lachs|salmon/,'salmon'],[/thunfisch|tuna/,'tuna'],[/zander|saibling|forelle|fisch|kabeljau|dorade|wolfsbarsch|hecht|karpfen|meeresfrüchte|meeresfruechte|krustentier/,'fish'],
[/spargel/,'asparagus'],[/artischocke/,'artichoke'],[/pilz|steinpilz|trüffel|truffel/,'mushroom'],[/tomate/,'tomato'],[/paprika/,'pepper'],[/zucchini/,'zucchini'],[/aubergine/,'aubergine'],[/fenchel/,'fennel'],[/karotte|möhre|moehre/,'carrot'],[/rote bete|rübe|ruebe/,'beet'],[/kürbis|kuerbis/,'pumpkin'],[/kohl/,'cabbage'],[/spinat/,'spinach'],[/erbse/,'peas'],[/salat/,'salad'],[/kräuter|kraeuter/,'herbs'],[/kartoffel/,'potato'],
[/risotto/,'risotto'],[/reis/,'rice'],[/pasta|nudel|spaghetti|tagliatelle|ravioli|gnocchi/,'pasta'],[/brot|baguette/,'bread'],[/blauschimmel|gorgonzola|roquefort/,'bluecheese'],[/ziegenkäse|ziegenkaese/,'goatcheese'],[/weichkäse|weichkaese|camembert|brie/,'softcheese'],[/käse|kaese|parmesan|pecorino|comté|comte|gouda/,'cheese'],[/schokolade/,'chocolate'],[/nüsse|nuesse|mandel|haselnuss|walnuss/,'nuts'],[/dessert|torte|kuchen|sorbet|eis|crème|creme brulee/,'dessert'],[/frucht|obst|beere/,'fruit']
];
function type(label){const t=String(label||'').toLowerCase();for(const [r,k] of rules)if(r.test(t))return k;return'default'}
function apply(root=document){root.querySelectorAll('.wf-pair').forEach(p=>{const label=(p.querySelector('.wf-pl')?.textContent||'').trim(),box=p.querySelector('.wf-pi');if(!label||!box)return;const k=type(label);box.dataset.wfIconV7=k;box.innerHTML=I[k]||I.default;});}
const style=document.createElement('style');
style.id='winefunday-pairing-icons-v7-style';
style.textContent=`
.wf-pairs{display:flex!important;flex-wrap:wrap!important;justify-content:center!important;align-items:flex-start!important;gap:16px 12px!important;margin-left:auto!important;margin-right:auto!important}
.wf-pair{flex:0 0 88px!important;width:88px!important;text-align:center!important;color:#34463f!important;font-size:10px!important}
.wf-pi{width:64px!important;height:64px!important;margin:0 auto 9px!important;display:grid!important;place-items:center!important;background:${BG}!important;border:0!important;border-radius:50%!important;box-shadow:none!important;overflow:hidden!important;color:${C}!important}
.wf-food-svg{display:block!important;width:40px!important;height:40px!important;overflow:visible!important}
.wf-pl{display:block!important;min-height:0!important;color:#34463f!important;font-size:10px!important;font-weight:600!important;line-height:1.25!important;letter-spacing:.01em!important}
@media(max-width:520px){.wf-pairs{gap:15px 8px!important}.wf-pair{flex-basis:78px!important;width:78px!important}.wf-pi{width:58px!important;height:58px!important}.wf-food-svg{width:36px!important;height:36px!important}}
`;
document.head.appendChild(style);
window.WinefundayPairingIconsApply=apply;apply();
const mo=new MutationObserver(()=>apply());mo.observe(document.documentElement,{childList:true,subtree:true});
document.addEventListener('click',()=>setTimeout(()=>apply(),0),true);document.addEventListener('DOMContentLoaded',()=>apply());
})();
