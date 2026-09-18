/* WINEFUNDAY_PAIRING_ICONS_OUTLINE_V1 — elegant food-specific line icons */
(()=>{'use strict';
const P=d=>`<path d="${d}"/>`;
const I={
aperitif:P('M7 3h10l-1 6c-.4 3-2 5-4 6-2-1-3.6-3-4-6L7 3zm5 12v6m-4 0h8M8 8h8'),
occasion:P('M12 3l1.7 5.2L19 10l-5.3 1.8L12 17l-1.7-5.2L5 10l5.3-1.8L12 3zm7 12 .8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15'),
cloche:P('M4 15h16M6 15a6 6 0 0112 0M3 18h18M12 7V5m-2 0h4'),
schnitzel:P('M5 8c2-3 12-3 14 0 2 4-1 9-7 9S3 12 5 8zm2 2c3-2 7-2 10 0M8 14h8'),
beef:P('M5 9c2-4 12-4 14 0 1 4-2 8-7 8s-8-4-7-8zm3 1h.1M16 12h.1M9 15h6'),
veal:P('M5 10c3-4 11-4 14 0 1 4-2 7-7 7s-8-3-7-7zm5 1a3 3 0 106 0 3 3 0 10-6 0'),
lamb:P('M7 8c0-3 3-5 5-3 2-2 5 0 5 3 2 1 2 4 0 5-1 3-9 3-10 0-2-1-2-4 0-5zm2 8-1 4m7-4 1 4'),
game:P('M7 9c0-3 2-5 5-5s5 2 5 5v5c-2 3-8 3-10 0V9zm1-4L5 2m11 3 3-3m-9 9h.1m4 0h.1M10 14h4'),
pork:P('M4 12c1-4 5-7 10-7 6 0 9 3 9 7 0 4-4 7-9 7-6 0-10-3-10-7zm16-1h.1M7 8 5 5m3 12-1 3m11-3 1 3M10 14h6'),
poultry:P('M8 7c2-3 7-2 8 2 1 4-2 8-6 8-3 0-5-2-5-5 0-2 1-4 3-5zm8 2 3-1-2 3m-8 6-1 4m5-5 2 4'),
duck:P('M3 15c3-4 7-5 12-3 0-4 3-7 7-6-2 1-2 3 0 4-3 0-4 2-5 4-2 4-6 6-10 4-2-1-3-2-4-3zM18 8h.1'),
pigeon:P('M5 14c2-5 6-7 10-5 1-3 4-5 7-3-2 1-2 3 0 4-3 0-4 2-5 4-2 4-6 6-10 4m8 0-1 3m4-4 2 4'),
foiegras:P('M4 9c4-4 12-4 16 0v7c-4 4-12 4-16 0V9zm0 0c4 4 12 4 16 0M8 13h8'),
charcuterie:P('M4 6h16v12H4V6zm4 3 3 3-3 3m8-6-3 3 3 3M3 20h18'),
fish:P('M3 12c4-5 9-5 14 0-5 5-10 5-14 0zm14 0 4-4v8zM8 11h.1'),
flatfish:P('M5 12c2-6 8-8 13-4 4 3 3 8-1 11-5 3-11 0-12-7zm5-2h.1m4 1h.1M8 16c3 1 6 1 9-1'),
salmon:P('M3 12c4-5 10-6 15-2l3-3-1 5 1 5-3-3c-6 4-11 3-15-2zM8 11h.1m4-2 2 3-2 3'),
tuna:P('M2 12c5-4 11-5 16-2l4-3-1 5 1 5-4-3c-7 3-12 2-16-2zM7 11h.1m8-2 2-3m-2 9 2 3'),
scallop:P('M12 4c-5 0-8 4-8 9 1 4 4 7 8 9 4-2 7-5 8-9 0-5-3-9-8-9zm0 2v14M8 7l3 13m5-13-3 13M5 11l5 9m9-9-5 9'),
oyster:P('M4 14c1-7 15-7 16 0-3 5-13 5-16 0zm3-1c2-3 8-3 10 0m-5 1h.1'),
lobster:P('M9 8c0-4 6-4 6 0v8H9V8zm0 2L5 7 3 9m12 1 4-3 2 2M9 14l-4 3m10-3 4 3m-7-9v8'),
shrimp:P('M18 7c-5-4-12 0-11 6 1 5 7 7 11 4-4 0-7-2-7-5 0-2 2-4 4-4 3 0 5 2 5 5m-2-6h.1M7 16l-3 3'),
mussel:P('M6 18C4 12 7 6 13 4c5 0 8 4 7 9-1 6-7 9-14 5zm3-2c4-1 7-4 9-8'),
sushi:P('M5 7h14v11H5V7zm3 3h8v5H8v-5zm-2 8h12'),
caviar:P('M5 8h14l-2 11H7L5 8zm2 0c1-4 9-4 10 0M9 12h.1m3 2h.1m3-2h.1'),
asparagus:P('M8 21V8l2-5 2 5v13M14 21V10l2-4 2 4v11M6 11h6m8 2h-6'),
mushroom:P('M4 11c1-6 15-6 16 0H4zm6 0v8h4v-8'),
truffle:P('M6 9c1-3 4-5 7-4 3-2 7 1 7 4 3 2 1 7-2 8-2 4-8 4-10 1-4-1-5-6-2-9zm3 3h.1m4-3h.1m2 5h.1'),
beet:P('M12 8c5 0 8 3 8 7s-4 7-8 7-8-3-8-7 3-7 8-7zm0 0c-1-4 0-6 2-7m-2 7c2-4 5-5 8-4m-8 4C9 5 6 5 4 6m8 16v2'),
pumpkin:P('M12 7c6 0 9 3 9 7s-3 7-9 7-9-3-9-7 3-7 9-7zm0 0v14M8 8c-2 4-2 8 0 12m8-12c2 4 2 8 0 12m-5-13 1-4 3 1'),
vegetable:P('M12 21c-1-6-5-7-7-9 2-5 6-7 7-9 1 2 5 4 7 9-2 2-6 3-7 9zM8 13c3 0 5-2 7-5'),
salad:P('M4 11h16c-1 6-4 9-8 9s-7-3-8-9zm3-2c0-3 3-4 5-1 2-3 5-2 5 1M12 8V4'),
herbs:P('M12 21V9m0 5c-5 0-7-3-7-7 4 0 7 2 7 7zm0-3c5 0 7-3 7-7-4 0-7 2-7 7z'),
pasta:P('M5 8h14l-2 10H7L5 8zm2 3c3-2 7 2 10 0m-9 3c3-2 5 2 8 0'),
risotto:P('M4 10c1 8 15 8 16 0H4zm2 0c2-4 10-4 12 0M8 13h.1m3 1h.1m3-1h.1'),
pizza:P('M12 3 4 20h16L12 3zm-5 12h10M10 11h.1m4 3h.1m-2-6h.1'),
bread:P('M5 13c0-5 3-8 7-8s7 3 7 8v5H5v-5zm4-6 2 4m2-5 2 4'),
cheese:P('M4 9l8-5 8 5v10H4V9zm0 0h16M9 13h.1M14 16h.1'),
goatcheese:P('M5 9c3-4 11-4 14 0v8c-3 4-11 4-14 0V9zm0 0c3 3 11 3 14 0M9 13h.1m5 2h.1'),
softcheese:P('M5 7h14v12H5V7zm3 3h8v6H8v-6'),
bluecheese:P('M4 9l8-5 8 5v10H4V9zm0 0h16M8 13h2m3 3h2m2-4h1'),
dessert:P('M5 10h14l-2 9H7l-2-9zm2 0c0-4 10-4 10 0M9 6c0-2 3-3 3 0m0 0c0-2 3-2 3 0'),
chocolate:P('M6 4h12v16H6V4zm0 5h12M10 4v16m4-16v16'),
fruit:P('M12 7c5 0 8 3 8 7s-3 7-8 7-8-3-8-7 3-7 8-7zm0 0c0-3 2-5 5-5-1 3-3 5-5 5zm0 0C9 7 7 5 7 3c3 0 5 1 5 4'),
curry:P('M4 11h16c-1 6-4 9-8 9s-7-3-8-9zm3-2c1-3 9-3 10 0M8 14h.1m4 2h.1m4-2h.1'),
grill:P('M5 10h14v4H5v-4zm2 4 2 7m8-7-2 7M8 8l2-3m2 3 2-4m2 4 2-3')
};
const rules=[
[/kaviar/,'caviar'],[/jakobs?muschel|scallop|coquille/,'scallop'],[/auster|oyster/,'oyster'],[/miesmuschel|muschel/,'mussel'],[/hummer|lobster|languste|langoust|kaisergranat|krebs|krustentier/,'lobster'],[/garnele|shrimp|scampi/,'shrimp'],[/sushi|sashimi/,'sushi'],[/steinbutt|turbot|seezunge/,'flatfish'],[/lachs|salmon/,'salmon'],[/thunfisch|tuna/,'tuna'],[/zander|saibling|forelle|fisch|kabeljau|dorade|wolfsbarsch|seeteufel|schwertfisch|sardine|meeresfrüchte|meeresfruechte|bouillabaisse|ceviche/,'fish'],
[/foie\s*gras|gänseleber|gaenseleber/,'foiegras'],[/ente|duck/,'duck'],[/taube|pigeon/,'pigeon'],[/schnitzel/,'schnitzel'],[/wildschwein/,'game'],[/hirsch|reh|wild|venison/,'game'],[/kalb|veal|tafelspitz/,'veal'],[/steak|rinder?filet|rindsfilet|entrec[oô]te|roastbeef|rind|beef|wagyu|bistecca|brasato|gulasch|wellington|prime rib|rotes fleisch/,'beef'],[/schwein|pork|spanferkel|bratwurst|käsekrainer|speck/,'pork'],[/lamm|lamb|karree/,'lamb'],[/huhn|hähn|haehn|geflügel|poularde|poulet|backhendl|brathendl|hendl|gans|perlhuhn|tandoori chicken|paprikahuhn/,'poultry'],[/charcuterie|brotzeit|jause/,'charcuterie'],
[/spargel/,'asparagus'],[/trüffel|truffel/,'truffle'],[/pilz|steinpilz|morchel|kräuterseitling/,'mushroom'],[/rote[\s-]*bete|rübe|ruebe/,'beet'],[/kürbis|kuerbis/,'pumpkin'],[/salat/,'salad'],[/kräuter|kraeuter|brennnessel/,'herbs'],[/gemüse|gemuese|vegetar|antipasti/,'vegetable'],
[/pizza|flammkuchen/,'pizza'],[/risotto|reis/,'risotto'],[/pasta|nudel|spaghetti|tagliatelle|ravioli|gnocchi|carbonara|knödel/,'pasta'],[/brot|baguette|brioche/,'bread'],
[/blauschimmel|gorgonzola|roquefort/,'bluecheese'],[/ziegenkäse|ziegenkaese|ziegenfrischkäse|schafskäse/,'goatcheese'],[/weichkäse|weichkaese|camembert|brie|epoisses|burrata/,'softcheese'],[/käse|kaese|parmesan|pecorino|comté|comte|gruyère|gruyere|beaufort/,'cheese'],
[/schokolade|zartbitter/,'chocolate'],[/dessert|torte|tarte|kuchen|sorbet|eis|crème|creme|obst/,'dessert'],[/frucht|früchte|beere|aprikose/,'fruit'],[/curry|asiatisch|thai|vietnames|umami|süß-sauer|würzig/,'curry'],[/grill/,'grill'],[/schmorgericht/,'beef'],[/südtiroler spezialität/,'charcuterie'],[/mediterran/,'vegetable'],[/aperitif|apéritif|aperitivo|empfang|vorspeise/,'aperitif'],[/anlass|anlässe|gesellschaft|jubil|festessen|gartenparty|haute cuisine|meditation|spitzenklasse/,'occasion']
];
function type(label){const t=String(label||'').toLowerCase();for(const [r,k] of rules)if(r.test(t))return k;return'cloche'}
function svg(k){return `<svg viewBox="0 0 24 24" aria-hidden="true">${I[k]||I.cloche}</svg>`}
function apply(root=document){root.querySelectorAll('.wf-pair').forEach(pair=>{const label=(pair.querySelector('.wf-pl')?.textContent||'').trim(),box=pair.querySelector('.wf-pi');if(!label||!box)return;const k=type(label);if(box.dataset.wfOutline===k&&box.querySelector('svg'))return;box.dataset.wfOutline=k;box.innerHTML=svg(k);box.style.cssText='width:50px!important;height:50px!important;margin:0 auto 9px!important;border:1px solid #d9dfdc!important;border-radius:50%!important;background:#f6f4ef!important;color:#004438!important;display:grid!important;place-items:center!important;box-shadow:none!important';const icon=box.querySelector('svg');icon.style.cssText='width:26px!important;height:26px!important;display:block!important;fill:none!important;stroke:currentColor!important;stroke-width:1.35!important;stroke-linecap:round!important;stroke-linejoin:round!important;overflow:visible!important'});}
window.WinefundayOutlinePairingType=type;
window.WinefundayPairingIconsApply=apply;
apply();
const observer=new MutationObserver(()=>apply());observer.observe(document.documentElement,{childList:true,subtree:true});
document.addEventListener('DOMContentLoaded',()=>apply(),{once:true});
})();
