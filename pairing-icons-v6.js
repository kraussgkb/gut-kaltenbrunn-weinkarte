/* WINEFUNDAY_PAIRING_ICONS_V6 — robust filled subtle monochrome icons */
(()=>{'use strict';
const C='#26332f';
const svg=(body)=>`<svg viewBox="0 0 32 32" aria-hidden="true" style="width:32px!important;height:32px!important;display:block!important;fill:${C}!important;stroke:none!important;overflow:visible!important">${body}</svg>`;
const P=d=>`<path d="${d}" style="fill:${C}!important;stroke:none!important"/>`;
const I={
aperitif:svg(P('M7 3h8l-1 8c-.4 2.3-1.8 4-3.5 4.8V24h4v2H4v-2h4v-8.2C6.2 15 4.8 13.3 4.4 11L3 3h4Zm13 2h8l-1 7c-.3 1.8-1.4 3.2-3 4v7h3v2h-9v-2h3v-7c-1.6-.8-2.7-2.2-3-4l-1-7h3Z')),
game:svg(P('M10 11C7 9 5 6 5 2c3 1 4 3 4 6 1-1 2-4 2-6 3 3 3 6 2 9h6c-1-3-1-6 2-9 0 2 1 5 2 6 0-3 1-5 4-6 0 4-2 7-5 9 1 1 2 3 2 5 0 6-4 12-8 14-4-2-8-8-8-14 0-2 1-4 2-5Z')),
beef:svg(P('M5 10c3-5 9-8 15-6 6 1 10 6 9 11-1 6-7 11-14 11S3 22 3 16c0-2 1-4 2-6Zm9 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z')),
veal:svg(P('M6 9c3-4 8-6 13-4 5 2 8 6 8 11 0 6-5 11-12 11S3 23 3 16c0-3 1-5 3-7Zm6 4a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z')),
pork:svg(P('M4 11c2-5 7-8 13-8 7 0 11 4 11 9 0 2-.8 4-2 5l2 3-5 1c-2 3-6 5-10 5C6 26 2 22 2 16c0-2 1-4 2-5Zm19 1a2 2 0 1 0 0 .1Zm-9 6c2-1 5-1 7 0-2 3-5 3-7 0Z')),
lamb:svg(P('M6 11c0-4 3-7 7-7 3 0 5 1 6 3 4 0 7 3 7 7 0 3-2 6-5 7v6h-3v-5h-7v5H8v-6c-4-1-6-4-6-7 0-1 .5-2 1-3h3Z')),
poultry:svg(P('M6 8c5-5 12-4 15 2 3 6 0 13-7 15-6 2-12-2-12-8 0-4 1-7 4-9Zm16 2 7-2-4 5 4 3-7-1Z')),
duck:svg(P('M4 17c3-6 8-9 14-7 1-5 5-7 10-5-3 2-3 5 0 7-4 1-6 3-7 6-2 5-7 8-13 7-4-1-6-4-7-7l3-1Z')),
rabbit:svg(P('M10 10C7 6 7 2 10 0c3 2 4 6 4 9 2-5 5-8 7-8 1 4 0 8-3 11 4 2 6 6 6 10 0 6-5 10-11 10S2 28 2 22c0-5 3-9 8-12Z')),
schnitzel:svg(P('M5 9c2-4 7-6 13-6 7 0 12 4 12 9 0 6-6 12-14 13C9 26 3 22 2 17c-1-3 1-6 3-8Zm4 3c5-3 11-2 15 1l-2 2c-4-2-8-3-12 0l-1-3Z')),
fish:svg(P('M3 16c5-7 13-9 21-4l6-4-2 8 2 8-6-4c-8 5-16 3-21-4Zm7-2a2 2 0 1 0 0 .1Z')),
salmon:svg(P('M3 16c5-6 12-8 19-5l7-4-2 7 3 3-7 1c-7 6-15 4-20-2Zm8-2a2 2 0 1 0 0 .1Z')),
tuna:svg(P('M2 16c6-6 13-8 21-5l7-3-2 6 2 4-7-1c-8 5-15 5-21-1Zm9-2a2 2 0 1 0 0 .1Z')),
flatfish:svg(P('M5 16c2-7 8-11 14-9 7 2 10 8 8 14-2 6-9 9-16 6-6-2-8-7-6-11Zm6-4a1.5 1.5 0 1 0 0 .1Zm6 2a1.5 1.5 0 1 0 0 .1Z')),
lobster:svg(P('M13 7c0-4 6-4 6 0v15c0 4-6 4-6 0V7Zm-1 3L8 5 3 8l4 4-5 2 6 2 4-4v-2Zm8 0 4-5 5 3-4 4 5 2-6 2-4-4v-2ZM11 18l-6 4 4 2 4-3v-3Zm10 0 6 4-4 2-4-3v-3Z')),
shrimp:svg(P('M26 8C23 3 17 1 11 4 5 7 3 14 6 20c2 5 7 7 12 7 4 0 8-2 10-6-4 1-7 0-9-2 5 0 9-4 9-9l-2-2Zm-13 4c0-3 2-5 5-5 2 0 4 1 5 3-4-1-7 1-8 5-1-1-2-2-2-3Z')),
crab:svg(P('M10 10c3-4 9-4 12 0 3 3 3 7 0 10-3 4-9 4-12 0-3-3-3-7 0-10Zm-2 0L3 7 1 10l4 3-4 2 3 4 5-3v-6Zm16 0 5-3 2 3-4 3 4 2-3 4-5-3v-6ZM9 21l-5 5 4 1 4-5m11-1 5 5-4 1-4-5Z')),
scallop:svg(P('M16 4C9 4 4 10 4 17c2 5 6 9 12 12 6-3 10-7 12-12C28 10 23 4 16 4Zm0 3 2 18h-4l2-18Zm-5 2 3 15-6-12 3-3Zm10 0 3 3-6 12 3-15ZM6 15l7 11c-4-1-7-4-8-8l1-3Zm20 0 1 3c-1 4-4 7-8 8l7-11Z')),
mussel:svg(P('M7 26C4 19 5 10 12 4c7-2 12 1 13 8 1 8-5 14-18 14Zm4-4c5-1 9-5 11-10-5 2-8 5-11 10Z')),
oyster:svg(P('M3 18c1-8 8-13 17-12 7 1 10 6 9 11-1 7-8 11-16 10-7-1-11-4-10-9Zm7-1c2-4 8-6 13-3-2 5-8 7-13 3Z')),
squid:svg(P('M16 2c6 4 9 10 8 16l-4 1 3 11-5-8-2 9-2-9-5 8 3-11-4-1c-1-6 2-12 8-16Z')),
sushi:svg(P('M6 8h20v16H6V8Zm4 4h12v8H10v-8Zm2 2v4h8v-4h-8Z')),
asparagus:svg(P('M6 29V10l4-8 4 8v19H6Zm10 0V8l4-7 4 7v21h-8Zm10 0V11l3-6 3 6v18h-6Z')),
artichoke:svg(P('M16 2c3 2 5 5 5 9 2-2 5-3 7-2 0 5-2 9-6 12 2 0 4 1 5 3-3 5-7 7-11 7s-8-2-11-7c1-2 3-3 5-3-4-3-6-7-6-12 2-1 5 0 7 2 0-4 2-7 5-9Z')),
mushroom:svg(P('M3 15C4 8 9 4 16 4s12 4 13 11H3Zm10 2h6l2 12H11l2-12Z')),
tomato:svg(P('M16 7c8 0 13 4 13 10S24 29 16 29 3 24 3 17 8 7 16 7Zm0-6 2 5 6-1-4 4-4-2-4 2-4-4 6 1 2-5Z')),
pepper:svg(P('M14 5c-1-3 0-5 4-5 0 2 1 4 3 5 5 1 8 5 7 11-1 8-6 14-12 14S4 24 4 16C4 9 8 5 14 5Z')),
zucchini:svg(P('M7 25c-3-3-2-8 1-11L21 4l7 6-10 13c-3 4-8 5-11 2Zm14-21 1-4 5 3-2 4-4-3Z')),
aubergine:svg(P('M18 6c6 1 10 6 9 12-1 7-8 12-15 10-7-2-10-10-5-16 3-3 6-5 11-6Zm0 0 1-5 5 2 3-1-1 5-8-1Z')),
fennel:svg(P('M16 29c-6-2-10-8-9-14 1-5 4-8 9-9 5 1 8 4 9 9 1 6-3 12-9 14Zm0-23V0m0 6-6-5m6 5 6-5Z')),
carrot:svg(P('M12 8c5 1 8 4 10 9L9 30c-3-1-6-4-7-7L12 8Zm1-1-1-7 4 5 3-5 1 6 6-2-5 7-8-4Z')),
beet:svg(P('M16 10c6 0 11 4 11 9s-5 10-11 10S5 24 5 19s5-9 11-9Zm0 0-2-10 4 6 5-4-1 8-6 0Z')),
pumpkin:svg(P('M16 7c8 0 13 4 13 10S24 29 16 29 3 24 3 17 8 7 16 7Zm0 2v18m-6-17c-3 4-3 12 0 16m12-16c3 4 3 12 0 16M15 7l1-5 4 1-2 4Z')),
cabbage:svg(P('M16 3c8 0 13 6 13 14 0 7-6 12-13 12S3 24 3 17C3 9 8 3 16 3Zm0 4v19M7 12c5 2 8 7 9 12m9-12c-5 2-8 7-9 12Z')),
spinach:svg(P('M16 30C8 25 4 19 5 12 6 6 10 3 16 2c6 1 10 4 11 10 1 7-3 13-11 18Zm0-3V6m0 10-6-6m6 11 7-8Z')),
peas:svg(P('M4 21c5-9 15-13 25-11-2 11-10 18-22 19l-3-8Zm8 1a2 2 0 1 0 0 .1Zm7-4a2 2 0 1 0 0 .1Zm6-3a2 2 0 1 0 0 .1Z')),
salad:svg(P('M3 13h26c-2 11-7 17-13 17S5 24 3 13Zm5-2c0-5 5-7 8-3 3-4 8-2 8 3-5-1-11-1-16 0Z')),
herbs:svg(P('M15 30V15C8 16 5 11 5 5c6 0 10 3 11 8 1-6 6-9 11-9 0 7-5 11-11 11v15h-1Z')),
potato:svg(P('M5 11c3-6 11-9 17-6 7 3 9 11 6 17-3 7-11 9-18 6-6-3-8-11-5-17Zm7 2a1.5 1.5 0 1 0 0 .1Zm9 7a1.5 1.5 0 1 0 0 .1Zm-10 3a1.5 1.5 0 1 0 0 .1Z')),
rice:svg(P('M3 13h26c-1 11-6 17-13 17S4 24 3 13Zm4-2c2-5 16-5 18 0H7Z')),
pasta:svg(P('M5 8h22l-2 20H7L5 8Zm4 5c4-3 10 3 14 0m-13 6c4-3 8 3 12 0')),
risotto:svg(P('M3 13h26c-1 11-6 17-13 17S4 24 3 13Zm4-2c2-5 16-5 18 0H7Zm3 6h2v2h-2v-2Zm5 3h2v2h-2v-2Zm5-3h2v2h-2v-2Z')),
bread:svg(P('M5 12c2-6 7-9 13-9 7 0 12 5 12 12 0 8-6 13-15 13C7 28 2 23 3 17c0-2 1-4 2-5Zm6-4 3 5m2-7 3 5m2-4 3 5')),
cheese:svg(P('M3 11 16 4l13 7v17H3V11Zm0 0h26M10 17a2 2 0 1 0 0 .1Zm9 6a2 2 0 1 0 0 .1Zm5-7a1.5 1.5 0 1 0 0 .1Z')),
softcheese:svg(P('M6 7h20v21H6V7Zm3 4h14v13H9V11Z')),
goatcheese:svg(P('M5 10c4-6 18-6 22 0v14c-4 6-18 6-22 0V10Zm3 2c4 3 12 3 16 0v10c-4 3-12 3-16 0V12Z')),
bluecheese:svg(P('M3 11 16 4l13 7v17H3V11Zm0 0h26M9 17h3v3H9v-3Zm8 5h3v3h-3v-3Zm7-6h2v2h-2v-2Z')),
dessert:svg(P('M5 11h22l-2 17H7L5 11Zm3-2c1-5 15-5 16 0H8Zm4-3c0-3 4-4 4 0m0 0c0-3 4-3 4 0')),
chocolate:svg(P('M6 4h20v24H6V4Zm3 3v5h5V7H9Zm9 0v5h5V7h-5ZM9 16v5h5v-5H9Zm9 0v5h5v-5h-5Z')),
nuts:svg(P('M8 7c5-5 11 1 9 7-2 6-9 12-13 8-4-4 0-11 4-15Zm16 2c5-1 7 6 4 11-3 5-9 8-12 4-3-5 3-13 8-15Z')),
fruit:svg(P('M16 8c7 0 12 5 12 11s-5 11-12 11S4 25 4 19 9 8 16 8Zm0-1c-1-4 1-7 5-7-1 4-3 6-5 7Zm-1 1c-4-1-6-3-6-6 4 0 6 2 6 6Z')),
default:svg(P('M16 3a13 13 0 1 0 0 26 13 13 0 0 0 0-26Zm0 4a9 9 0 1 1 0 18 9 9 0 0 1 0-18Z'))
};
const rules=[
[/aperitif|apéritif|empfang|welcome/,'aperitif'],[/schnitzel/,'schnitzel'],[/hirsch|reh|wild|venison/,'game'],[/kalb|veal/,'veal'],[/steak|rinder?filet|entrec[oô]te|roastbeef|rind|ochse/,'beef'],[/schwein|pork|spanferkel|speck/,'pork'],[/lamm|lamb|karree/,'lamb'],[/ente|duck/,'duck'],[/kaninchen|rabbit/,'rabbit'],[/huhn|hähn|haehn|geflügel|poularde|poulet|backhendl|brathendl|hendl|gans|truthahn/,'poultry'],
[/jakobs?muschel|scallop|coquille/,'scallop'],[/auster|oyster/,'oyster'],[/miesmuschel/,'mussel'],[/hummer|lobster|languste/,'lobster'],[/garnele|shrimp|scampi/,'shrimp'],[/krabbe|krebs/,'crab'],[/calamari|kalamar|tintenfisch|squid/,'squid'],[/sushi|sashimi/,'sushi'],[/steinbutt|seezunge/,'flatfish'],[/lachs|salmon/,'salmon'],[/thunfisch|tuna/,'tuna'],[/zander|saibling|forelle|fisch|kabeljau|dorade|wolfsbarsch|hecht|karpfen|meeresfrüchte|meeresfruechte|krustentier/,'fish'],
[/spargel/,'asparagus'],[/artischocke/,'artichoke'],[/pilz|steinpilz|trüffel|truffel/,'mushroom'],[/tomate/,'tomato'],[/paprika/,'pepper'],[/zucchini/,'zucchini'],[/aubergine/,'aubergine'],[/fenchel/,'fennel'],[/karotte|möhre|moehre/,'carrot'],[/rote[\s-]*bete|rübe|ruebe/,'beet'],[/kürbis|kuerbis/,'pumpkin'],[/kohl/,'cabbage'],[/spinat/,'spinach'],[/erbse/,'peas'],[/salat/,'salad'],[/kräuter|kraeuter/,'herbs'],
[/kartoffel/,'potato'],[/risotto/,'risotto'],[/reis/,'rice'],[/pasta|nudel|spaghetti|tagliatelle|ravioli|gnocchi/,'pasta'],[/brot|baguette/,'bread'],
[/blauschimmel|gorgonzola|roquefort/,'bluecheese'],[/ziegenkäse|ziegenkaese/,'goatcheese'],[/weichkäse|weichkaese|camembert|brie/,'softcheese'],[/käse|kaese|parmesan|pecorino|comté|comte|gouda/,'cheese'],[/schokolade/,'chocolate'],[/nüsse|nuesse|mandel|haselnuss|walnuss/,'nuts'],[/dessert|torte|kuchen|sorbet|eis|crème|creme brulee/,'dessert'],[/frucht|obst|beere/,'fruit']
];
function type(label){const t=String(label||'').toLowerCase();for(const [r,k] of rules)if(r.test(t))return k;return'default'}
function apply(root=document){root.querySelectorAll('.wf-pair').forEach(p=>{const label=(p.querySelector('.wf-pl')?.textContent||'').trim(),box=p.querySelector('.wf-pi');if(!label||!box)return;const k=type(label);if(box.dataset.wfIconV6===k&&box.querySelector('svg'))return;box.dataset.wfIconV6=k;box.innerHTML=I[k]||I.default;box.style.cssText='width:52px!important;height:52px!important;margin:0 auto 9px!important;background:#f1eee8!important;border:0!important;border-radius:50%!important;display:grid!important;place-items:center!important;color:#26332f!important;overflow:visible!important;box-shadow:none!important';});}
window.WinefundayPairingIconsApply=apply;
apply();
const mo=new MutationObserver(()=>apply());mo.observe(document.documentElement,{childList:true,subtree:true});
document.addEventListener('click',()=>setTimeout(()=>apply(),0),true);document.addEventListener('DOMContentLoaded',()=>apply());
})();
