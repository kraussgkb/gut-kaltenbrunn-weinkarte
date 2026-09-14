/* WINEFUNDAY_PAIRING_ICONS_V5 — refined filled monochrome pairing icon system */
(()=>{'use strict';
const SVG=(body,view='0 0 32 32')=>'<svg class="wf-food-svg" viewBox="'+view+'" aria-hidden="true">'+body+'</svg>';
const I={
aperitif:SVG('<path d="M7 4h8l-1 6c-.4 2.3-1.8 4-3.8 4.8V23h4v2H4v-2h4v-8.2C6 14 4.6 12.3 4.2 10L3 4h4Zm13 1h7l-1 5c-.3 1.9-1.4 3.3-3 4v8h3v2h-8v-2h3v-8c-1.7-.7-2.7-2.1-3-4l-1-5h3Z"/>'),
wild:SVG('<path d="M11 10C8 8 6 5 6 2c2 1 3 3 3 5 1-1 2-3 2-5 2 2 2 5 1 8h8c-1-3-1-6 1-8 0 2 1 4 2 5 0-2 1-4 3-5 0 3-2 6-5 8 1 1 2 3 2 5 0 6-3 12-7 15-4-3-7-9-7-15 0-2 1-4 2-5Z"/>'),
beef:SVG('<path d="M8 7c5-4 13-2 16 2 3 4 1 10-4 13-6 4-15 2-17-3-2-4 1-9 5-12Zm5 5a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"/>'),
veal:SVG('<path d="M6 9c2-4 7-6 11-5 5 1 9 5 9 10 0 6-5 11-11 11S4 21 4 15c0-2 1-4 2-6Zm5 4a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z"/>'),
pork:SVG('<path d="M5 9c2-4 7-6 12-6 6 0 10 3 10 8 0 2-1 4-2 5l2 3-4 1c-2 3-5 5-9 5C7 25 3 21 3 15c0-2 1-4 2-6Zm17 2a2 2 0 1 0 0 .1Zm-8 5c2-1 4-1 6 0-1 2-5 2-6 0Z"/>'),
lamb:SVG('<path d="M7 11c0-4 3-7 7-7 2 0 4 1 5 3 4 0 7 3 7 7 0 3-2 6-5 7v6h-3v-5h-6v5H9v-6c-4-1-6-4-6-7 0-1 0-2 1-3l3 0Z"/>'),
poultry:SVG('<path d="M7 8c4-5 11-4 14 1 3 6 0 13-6 15-6 2-12-1-12-7 0-3 1-6 4-9Zm15 2 6-2-3 5 3 3-6-1Z"/>'),
duck:SVG('<path d="M5 15c3-6 8-8 14-6 1-4 4-6 8-5-2 2-2 4 0 6-3 1-5 3-6 5-2 5-7 8-12 7-4-1-6-3-7-6l3-1Z"/>'),
rabbit:SVG('<path d="M11 9C8 5 8 1 10 0c3 2 4 5 4 8 2-5 4-7 6-7 1 4 0 8-2 10 4 2 6 5 6 9 0 6-5 10-11 10S3 26 3 20c0-5 3-9 8-11Z"/>'),
fish:SVG('<path d="M4 16c5-7 12-9 20-4l5-4-1 8 1 8-5-4c-8 5-15 3-20-4Zm6-2a2 2 0 1 0 0 .1Z"/>'),
salmon:SVG('<path d="M3 16c5-6 11-8 18-5l7-4-2 7 3 3-7 1c-7 6-14 4-19-2Zm7-2a1.7 1.7 0 1 0 0 .1Z"/>'),
tuna:SVG('<path d="M3 16c5-5 12-8 20-5l6-3-2 6 2 4-6-1c-7 5-15 5-20-1Zm8-2a1.6 1.6 0 1 0 0 .1Z"/>'),
flatfish:SVG('<path d="M5 16c2-7 8-11 14-9 6 2 9 8 7 14-2 6-9 8-15 5-5-2-8-6-6-10Zm6-4a1.6 1.6 0 1 0 0 .1Zm5 2a1.6 1.6 0 1 0 0 .1Z"/>'),
lobster:SVG('<path d="M13 8c0-4 6-4 6 0v14c0 4-6 4-6 0V8Zm-1 2L8 6 4 8l3 3-4 2 5 2 4-3v-2Zm8 0 4-4 4 2-3 3 4 2-5 2-4-3v-2ZM10 17l-5 4 4 1 3-2v-3Zm12 0 5 4-4 1-3-2v-3Z"/>'),
shrimp:SVG('<path d="M25 8c-2-5-8-7-13-4C6 7 4 14 7 20c2 4 6 6 10 6 4 0 7-2 9-5-3 1-6 0-8-2 5 0 9-4 9-9l-2-2Zm-12 4c0-3 2-5 5-5 2 0 4 1 5 3-4-1-7 1-8 5-1-1-2-2-2-3Z"/>'),
crab:SVG('<path d="M10 10c3-4 9-4 12 0 2 2 2 6 0 8-3 4-9 4-12 0-2-2-2-6 0-8Zm-2 0L3 7 1 10l4 3-4 2 3 3 5-3V10Zm16 0 5-3 2 3-4 3 4 2-3 3-5-3V10ZM9 20l-5 5 4 1 4-5m11-1 5 5-4 1-4-5"/>'),
scallop:SVG('<path d="M16 5C9.5 5 5 10 5 17c2 5 6 9 11 11 5-2 9-6 11-11 0-7-4.5-12-11-12Zm0 2 2 16h-4l2-16Zm-5 2 3 14-5-11 2-3Zm10 0 2 3-5 11 3-14ZM7 14l6 10c-3-1-6-4-7-7l1-3Zm18 0 1 3c-1 3-4 6-7 7l6-10Z"/>'),
mussel:SVG('<path d="M8 25C5 19 6 11 12 5c6-2 11 1 12 7 1 7-5 13-16 13Zm3-3c5-1 9-5 10-10-4 2-7 5-10 10Z"/>'),
oyster:SVG('<path d="M4 18c1-7 8-12 16-11 6 1 9 5 8 10-1 6-8 10-15 9-6-1-10-4-9-8Zm6-1c2-4 8-6 12-3-2 5-7 7-12 3Z"/>'),
squid:SVG('<path d="M16 3c5 4 8 9 7 15l-4 1 3 9-4-7-2 8-2-8-4 7 3-9-4-1c-1-6 2-11 7-15Z"/>'),
asparagus:SVG('<path d="M7 28V10l3-7 3 7v18H7Zm9 0V8l3-6 3 6v20h-6Zm9 0V11l2-5 2 5v17h-4Z"/>'),
artichoke:SVG('<path d="M16 3c3 2 5 5 5 8 2-2 4-2 6-2 0 5-2 9-6 11 2 0 4 1 5 2-3 5-7 7-10 7s-7-2-10-7c1-1 3-2 5-2-4-2-6-6-6-11 2 0 4 0 6 2 0-3 2-6 5-8Z"/>'),
mushroom:SVG('<path d="M4 15C5 8 10 4 16 4s11 4 12 11H4Zm9 1h6l2 12H11l2-12Z"/>'),
tomato:SVG('<path d="M16 7c7 0 12 4 12 10S23 28 16 28 4 23 4 17 9 7 16 7Zm0-5 2 4 5-1-3 4-4-2-4 2-3-4 5 1 2-4Z"/>'),
pepper:SVG('<path d="M15 5c-1-2 0-4 3-5 0 2 1 3 2 4 5 1 8 5 7 11-1 7-5 13-11 13S5 22 5 15c0-6 4-10 10-10Z"/>'),
zucchini:SVG('<path d="M7 24C5 21 6 17 9 14l11-9 6 5-9 12c-3 4-7 5-10 2Zm13-19 1-4 4 3-1 3-4-2Z"/>'),
aubergine:SVG('<path d="M18 6c5 1 9 6 8 12-1 7-8 11-14 9-7-2-9-10-4-15 2-3 5-5 10-6Zm0 0 1-5 4 2 3-1-1 5-7-1Z"/>'),
fennel:SVG('<path d="M16 28c-6-2-9-7-8-13 1-4 4-7 8-8 4 1 7 4 8 8 1 6-2 11-8 13Zm0-21V1m0 6-5-5m5 5 5-5"/>'),
carrot:SVG('<path d="M12 8c5 1 8 4 9 9L9 29c-3-1-5-3-6-6L12 8Zm1-1-1-6 4 4 2-5 1 6 5-2-4 6-7-3Z"/>'),
beet:SVG('<path d="M16 10c6 0 10 4 10 9s-4 9-10 9S6 24 6 19s4-9 10-9Zm0 0-2-9 4 5 4-4-1 7-5 1Z"/>'),
pumpkin:SVG('<path d="M16 7c7 0 12 4 12 10S23 28 16 28 4 23 4 17 9 7 16 7Zm0 2v17m-5-16c-3 4-3 11 0 15m10-15c3 4 3 11 0 15M15 7l1-5 3 1-1 4"/>'),
cabbage:SVG('<path d="M16 4c7 0 12 6 12 13 0 6-5 11-12 11S4 23 4 17C4 10 9 4 16 4Zm0 3v18M8 12c5 2 7 6 8 11m8-11c-5 2-7 6-8 11"/>'),
spinach:SVG('<path d="M16 29C9 24 5 18 6 12c1-5 5-8 10-9 5 1 9 4 10 9 1 6-3 12-10 17Zm0-3V7m0 9-5-5m5 9 6-7"/>'),
peas:SVG('<path d="M5 20c5-8 14-12 23-10-1 10-9 17-20 18l-3-8Zm7 1a2 2 0 1 0 0 .1Zm6-3a2 2 0 1 0 0 .1Zm6-3a2 2 0 1 0 0 .1Z"/>'),
salad:SVG('<path d="M4 13h24c-2 10-6 15-12 15S6 23 4 13Zm5-2c0-4 4-6 7-3 3-3 7-1 7 3-4-1-10-1-14 0Z"/>'),
herbs:SVG('<path d="M16 29V14C9 15 6 11 6 6c5 0 9 2 10 7 1-5 5-8 10-8 0 6-4 10-10 10v14h-3Z"/>'),
potato:SVG('<path d="M6 11c3-6 10-8 16-5 6 3 8 10 5 16-3 6-10 8-16 5-6-3-8-10-5-16Zm6 2a1.5 1.5 0 1 0 0 .1Zm8 7a1.5 1.5 0 1 0 0 .1Zm-9 3a1.5 1.5 0 1 0 0 .1Z"/>'),
rice:SVG('<path d="M4 13h24c-1 10-5 15-12 15S5 23 4 13Zm4-2c2-6 14-6 16 0H8Z"/>'),
pasta:SVG('<path d="M5 12h22l-4 15H9L5 12Zm3-2 4-6 4 5 4-5 4 6H8Z"/>'),
risotto:SVG('<path d="M4 13h24c-1 10-5 15-12 15S5 23 4 13Zm4-2c2-5 14-5 16 0H8Zm4 7a1.5 1.5 0 1 0 0 .1Zm5 3a1.5 1.5 0 1 0 0 .1Zm4-4a1.5 1.5 0 1 0 0 .1Z"/>'),
lentils:SVG('<path d="M6 9c3-4 7-5 10-2 3-3 8-2 10 2 2 4 0 8-4 10 4 4 1 10-4 10-3 0-5-1-6-3-3 3-8 2-10-2-2-4 0-8 4-10-3-1-3-4 0-5Z"/>'),
beans:SVG('<path d="M11 6c5-1 8 2 7 7-1 4-5 7-9 7-5 0-7-4-5-8 1-3 3-5 7-6Zm10 7c5-1 8 2 7 7-1 4-5 7-9 7-5 0-7-4-5-8 1-3 3-5 7-6Z"/>'),
polenta:SVG('<path d="M5 12h22l-3 16H8L5 12Zm4-2c2-5 12-5 14 0H9Z"/>'),
bread:SVG('<path d="M4 18c0-7 5-12 12-12s12 5 12 12v8H4v-8Zm6-6 3 4m3-6 3 4m3-1 3 3"/>'),
cheese:SVG('<path d="M4 13 17 5l11 8v15H4V13Zm0 0h24M11 18a2 2 0 1 0 0 .1Zm9 5a2 2 0 1 0 0 .1Z"/>'),
softcheese:SVG('<path d="M6 10c0-4 20-4 20 0v14c0 4-20 4-20 0V10Zm0 0c0 4 20 4 20 0"/>'),
goatcheese:SVG('<path d="M7 11c0-4 18-4 18 0v15H7V11Zm0 0c0 4 18 4 18 0m3-7-2 4m2-4-5 1"/>'),
bluecheese:SVG('<path d="M4 13 17 5l11 8v15H4V13Zm0 0h24M9 18a2 2 0 1 0 0 .1Zm8 5a2 2 0 1 0 0 .1Zm7-6a1.6 1.6 0 1 0 0 .1Z"/>'),
dessert:SVG('<path d="M6 12h20l-3 16H9L6 12Zm3-2 5-6h4l5 6H9Zm5 7h8l-1 4h-8l1-4Z"/>'),
chocolate:SVG('<path d="M6 5h20v22H6V5Zm2 2v8h8V7H8Zm10 0v8h6V7h-6ZM8 17v8h8v-8H8Zm10 0v8h6v-8h-6Z"/>'),
nuts:SVG('<path d="M11 4c5 0 8 5 6 10-2 5-7 9-12 7-4-2-4-7-1-11 2-3 4-5 7-6Zm11 4c5 0 8 5 6 10-2 5-7 9-12 7 4-2 6-5 7-9 1-3 0-6-1-8Z"/>'),
fruit:SVG('<path d="M16 8c7 0 12 5 12 11 0 7-5 11-12 11S4 26 4 19C4 13 9 8 16 8Zm0 0c-1-4 1-7 5-8 0 4-2 7-5 8Zm0 0C13 5 10 4 7 5c2 3 5 4 9 3Z"/>'),
default:SVG('<path d="M5 16a11 11 0 1 0 22 0 11 11 0 0 0-22 0Zm4 0a7 7 0 1 0 14 0 7 7 0 0 0-14 0Z"/>')
};
const R=[
[/aperitif|empfang|welcome|apéritif/,'aperitif'],
[/jakobs?muschel|coquille|scallop/,'scallop'],[/auster|oyster/,'oyster'],[/miesmuschel|muschel(?!gericht)/,'mussel'],
[/hummer|lobster|languste/,'lobster'],[/garnele|shrimp|prawn/,'shrimp'],[/krabbe|crab/,'crab'],[/scampi|langoustine|langoustinen|krebs|krustentier|meeresfrüchte|meeresfruechte|seafood/,'shrimp'],[/calamari|tintenfisch|sepia|squid/,'squid'],
[/steinbutt|turbot/,'flatfish'],[/seezunge|sole/,'flatfish'],[/lachs|salmon/,'salmon'],[/thunfisch|tuna/,'tuna'],[/zander|saibling|forelle|fisch|kabeljau|dorade|wolfsbarsch|hecht|karpfen/,'fish'],
[/schnitzel/,'veal'],[/kalb|veal/,'veal'],[/rind|beef|steak|filet|entrec[oô]te|roastbeef|ochse|wagyu/,'beef'],[/lamm|lamb|karree/,'lamb'],[/wild|reh|hirsch|venison/,'wild'],[/schwein|pork|spanferkel|speck/,'pork'],[/ente|duck/,'duck'],[/kaninchen|rabbit/,'rabbit'],[/gans|huhn|hähn|haehn|geflügel|poularde|poulet|backhendl|brathendl|hendl|truthahn|pute/,'poultry'],
[/spargel/,'asparagus'],[/artischock/,'artichoke'],[/pilz|steinpilz|trüffel|truffel/,'mushroom'],[/tomat/,'tomato'],[/paprika/,'pepper'],[/zucchini/,'zucchini'],[/aubergine/,'aubergine'],[/fenchel/,'fennel'],[/karotte|möhre|moehre/,'carrot'],[/rote bete|rote beete/,'beet'],[/kürbis|kuerbis/,'pumpkin'],[/kohl/,'cabbage'],[/spinat/,'spinach'],[/erbse/,'peas'],[/salat/,'salad'],[/kräuter|kraeuter/,'herbs'],
[/kartoffel/,'potato'],[/risotto/,'risotto'],[/reis/,'rice'],[/pasta|nudel|spaghetti|tagliatelle|ravioli|gnocchi/,'pasta'],[/linse/,'lentils'],[/bohne/,'beans'],[/polenta/,'polenta'],[/brot|baguette/,'bread'],
[/blauschimmel|roquefort|gorgonzola/,'bluecheese'],[/ziegenkäse|ziegenkaese/,'goatcheese'],[/weichkäse|weichkaese|brie|camembert/,'softcheese'],[/käse|kaese|parmesan|pecorino|comté|comte|gouda/,'cheese'],
[/schokolade|chocolate/,'chocolate'],[/nuss|nüsse|nuesse|mandel|haselnuss/,'nuts'],[/dessert|torte|kuchen|sorbet|eis|crème|creme brulee/,'dessert'],[/frucht|obst|beere/,'fruit'],[/gemüse|gemuese|vegetar/,'salad']
];
const type=l=>{const t=(l||'').toLowerCase();for(const [r,k] of R)if(r.test(t))return k;return'default'};
function apply(root=document){root.querySelectorAll('.wf-pair').forEach(p=>{const label=(p.querySelector('.wf-pl')?.textContent||'').trim(),box=p.querySelector('.wf-pi');if(!label||!box)return;const k=type(label);if(box.dataset.wfIconV5===k&&box.querySelector('.wf-food-svg'))return;box.dataset.wfIconV5=k;box.innerHTML=I[k]||I.default})}
const s=document.createElement('style');s.id='winefunday-pairing-icons-v5-style';s.textContent='.wf-pi{width:46px!important;height:46px!important;background:#f1eee8!important;border:0!important;border-radius:50%!important;color:#26332f!important;box-shadow:none!important;overflow:hidden!important}.wf-food-svg{display:block;width:28px!important;height:28px!important;fill:currentColor!important;stroke:none!important}.wf-pair{color:#34463f!important}.wf-pl{font-weight:600!important}@media(max-width:580px){.wf-pi{width:44px!important;height:44px!important}.wf-food-svg{width:27px!important;height:27px!important}}';document.head.appendChild(s);
window.WinefundayPairingIconsApply=apply;apply();const mo=new MutationObserver(()=>apply());mo.observe(document.documentElement,{childList:true,subtree:true});document.addEventListener('click',()=>setTimeout(()=>apply(),0),true);document.addEventListener('DOMContentLoaded',()=>apply());
})();
