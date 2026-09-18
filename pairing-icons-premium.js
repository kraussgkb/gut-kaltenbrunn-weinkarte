/* WINEFUNDAY_PAIRING_ICONS_PREMIUM_V1 — original filled pairing icons from the repository */
(()=>{'use strict';
const C='#26332f',BG='#F2EEE7';
const F=d=>`<path d="${d}" fill="${C}"/>`;
const S=d=>`<path d="${d}" fill="none" stroke="${C}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>`;
const E=(cx,cy,rx,ry)=>`<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="${BG}"/>`;
const D={
game:S('M17 14c-5-2-8-6-8-11M15 13c-1-4-1-8 1-11M31 14c5-2 8-6 8-11M33 13c1-4 1-8-1-11')+F('M16 16c2-4 5-6 8-6s6 2 8 6l2 8c1 5-2 13-10 19-8-6-11-14-10-19l2-8Z'),
beef:F('M8 15c4-7 12-10 21-7 8 3 13 10 11 17-2 8-11 14-21 13C10 37 4 32 5 25c0-4 1-7 3-10Z')+E(22,24,7,5)+F('M20 22h4v4h-4z'),
veal:F('M9 14c4-6 10-8 17-7 9 2 15 9 14 17-1 9-9 15-18 15S6 33 6 25c0-4 1-8 3-11Z')+E(19,24,6,4.5),
lamb:F('M10 20c0-7 5-12 12-12 4 0 7 2 9 5 7 0 12 5 12 11 0 5-3 9-8 11v8h-5v-7H19v7h-5v-9c-5-2-8-7-8-12 0-1 0-2 .5-3L10 20Z'),
poultry:F('M9 14c6-7 16-7 22-1 6 7 4 17-4 23-8 6-19 4-22-4-3-6-1-13 4-18Z')+F('M32 16l11-5-5 8 5 4-12-1 1-6Z'),
duck:F('M7 28c4-9 12-13 21-10 2-7 8-10 15-7-5 3-5 8 0 11-6 1-9 4-11 9-3 7-11 11-19 9-6-1-9-5-11-10l5-2Z'),
rabbit:F('M17 15C13 9 13 3 17 1c5 3 6 8 6 13 3-7 7-11 10-11 2 6 1 12-3 16 6 3 9 8 9 14 0 9-7 14-16 14S7 42 7 33c0-8 4-14 10-18Z'),
fish:F('M4 24c7-9 18-12 30-6l10-7-3 13 3 13-10-7C22 36 11 33 4 24Z')+E(15,21,2,2),
salmon:F('M4 24c8-8 18-11 29-7l11-7-4 11 4 5-11 2c-11 8-22 6-29-4Z')+E(14,21,2,2),
tuna:F('M3 24c8-7 19-11 31-7l10-6-4 10 4 6-10-2c-11 8-23 7-31-1Z')+E(15,21,2,2),
flatfish:F('M9 24c3-10 12-16 22-13 9 3 14 12 11 20-3 9-13 13-23 9C10 37 6 31 9 24Z')+E(19,20,2,2)+E(26,22,2,2),
lobster:F('M20 11c0-6 8-6 8 0v21c0 6-8 6-8 0V11Z')+F('M18 15l-6-8-7 4 6 6-8 4 9 3 6-5v-4Zm12 0 6-8 7 4-6 6 8 4-9 3-6-5v-4ZM18 28l-9 7 6 3 5-5v-5Zm12 0 9 7-6 3-5-5v-5Z'),
shrimp:S('M38 13c-4-8-15-10-23-4C7 15 7 27 14 34c6 6 15 7 22 3-6 0-11-3-13-8 7 2 14-3 15-10 0-2 0-4-1-6')+F('M28 14h3v3h-3z'),
scallop:F('M24 7C14 7 7 15 7 25c3 8 9 14 17 18 8-4 14-10 17-18 0-10-7-18-17-18Z')+S('M24 10v29M18 11l4 28M30 11l-4 28M12 18l9 22M36 18l-9 22'),
oyster:F('M6 28c2-11 13-19 25-17 9 2 14 9 12 17-2 9-13 15-23 14C10 41 4 36 6 28Z')+E(25,27,10,6),
mussel:F('M11 39C7 29 9 16 18 8c9-3 17 1 18 10 2 11-7 21-25 21Z')+S('M16 34c7-2 13-8 16-16'),
asparagus:F('M8 43V15l5-10 5 10v28H8Zm13 0V12l5-9 5 9v31H21Zm13 0V17l4-8 4 8v26h-8Z'),
artichoke:F('M24 5c5 3 8 8 8 13 3-3 7-4 10-3 0 7-3 13-9 17 3 0 6 2 8 4-5 7-11 10-17 10S12 43 7 36c2-2 5-4 8-4-6-4-9-10-9-17 3-1 7 0 10 3 0-5 3-10 8-13Z'),
mushroom:F('M5 24C7 14 14 8 24 8s17 6 19 16H5Zm15 2h8l3 17H17l3-17Z'),
tomato:F('M24 11c11 0 18 7 18 16S35 44 24 44 6 36 6 27 13 11 24 11Zm0-8 3 7 8-2-5 6-6-3-6 3-5-6 8 2 3-7Z'),
carrot:F('M18 13c8 1 13 7 15 14L13 46c-5-2-9-6-10-11l15-22Zm1-1L17 2l6 7 4-8 2 9 8-4-6 10-12-4Z'),
pumpkin:F('M24 12c11 0 18 7 18 16S35 44 24 44 6 37 6 28s7-16 18-16Z')+S('M24 15v26M16 16c-5 6-5 18 0 24M32 16c5 6 5 18 0 24'),
salad:F('M5 20h38c-3 16-10 24-19 24S8 36 5 20Z')+F('M12 17c0-7 7-10 12-5 5-5 12-2 12 5-8-2-16-2-24 0Z'),
potato:F('M8 16c4-9 15-13 24-9 10 4 14 15 9 25-4 10-15 14-25 9C7 37 3 25 8 16Z')+E(19,20,2,2)+E(30,30,2,2)+E(17,33,2,2),
risotto:F('M5 19h38c-2 16-9 24-19 24S7 35 5 19Z')+S('M11 16c4-7 22-7 26 0')+E(18,27,1.7,1.7)+E(25,32,1.7,1.7)+E(32,27,1.7,1.7),
pasta:F('M8 12h32l-3 30H11L8 12Z')+S('M14 20c6-5 14 5 20 0M15 29c6-5 12 5 18 0'),
bread:F('M8 18c3-9 11-14 20-13 10 1 17 9 16 19-1 12-10 19-23 19C9 43 3 35 5 26c.5-3 1.5-6 3-8Z')+S('M16 14l5 7M24 10l5 7M32 12l5 7'),
cheese:F('M5 17 24 7l19 10v26H5V17Z')+S('M5 17h38')+E(16,28,3,3)+E(29,35,3,3)+E(36,25,2.5,2.5),
dessert:F('M9 17h30l-3 26H12L9 17Z')+F('M13 14c2-8 20-8 22 0H13Z')+F('M20 5h8v8h-8z'),
chocolate:F('M10 6h28v36H10V6Z')+`<rect x="14" y="10" width="8" height="8" rx="1" fill="${BG}"/><rect x="26" y="10" width="8" height="8" rx="1" fill="${BG}"/><rect x="14" y="22" width="8" height="8" rx="1" fill="${BG}"/><rect x="26" y="22" width="8" height="8" rx="1" fill="${BG}"/>`
};
const alias={aperitif:'dessert',occasion:'dessert',cloche:'artichoke',schnitzel:'veal',pork:'beef',pigeon:'poultry',foiegras:'poultry',charcuterie:'bread',sushi:'fish',caviar:'fish',truffle:'mushroom',beet:'carrot',vegetable:'artichoke',herbs:'salad',pizza:'pasta',goatcheese:'cheese',softcheese:'cheese',bluecheese:'cheese',fruit:'dessert',curry:'salad',grill:'beef'};
const rules=[
[/kaviar/,'caviar'],[/jakobs?muschel|scallop|coquille/,'scallop'],[/auster|oyster/,'oyster'],[/miesmuschel|muschel/,'mussel'],[/hummer|lobster|languste|langoust|kaisergranat|krebs|krustentier/,'lobster'],[/garnele|shrimp|scampi/,'shrimp'],[/sushi|sashimi/,'sushi'],[/steinbutt|turbot|seezunge/,'flatfish'],[/lachs|salmon/,'salmon'],[/thunfisch|tuna/,'tuna'],[/zander|saibling|forelle|fisch|kabeljau|dorade|wolfsbarsch|seeteufel|schwertfisch|sardine|meeresfrüchte|meeresfruechte|bouillabaisse|ceviche/,'fish'],
[/foie\s*gras|gänseleber|gaenseleber/,'foiegras'],[/ente|duck/,'duck'],[/kaninchen|rabbit/,'rabbit'],[/taube|pigeon/,'pigeon'],[/schnitzel/,'schnitzel'],[/wildschwein/,'game'],[/hirsch|reh|wild|venison/,'game'],[/kalb|veal|tafelspitz/,'veal'],[/steak|rinder?filet|rindsfilet|entrec[oô]te|roastbeef|rind|beef|wagyu|bistecca|brasato|gulasch|wellington|prime rib|rotes fleisch/,'beef'],[/schwein|pork|spanferkel|bratwurst|käsekrainer|speck/,'pork'],[/lamm|lamb|karree/,'lamb'],[/huhn|hähn|haehn|geflügel|poularde|poulet|backhendl|brathendl|hendl|gans|perlhuhn|tandoori chicken|paprikahuhn/,'poultry'],[/charcuterie|brotzeit|jause/,'charcuterie'],
[/spargel/,'asparagus'],[/artischocke/,'artichoke'],[/trüffel|truffel/,'truffle'],[/pilz|steinpilz|morchel|kräuterseitling/,'mushroom'],[/tomate/,'tomato'],[/kartoffel/,'potato'],[/rote[\s-]*bete|rübe|ruebe|karotte/,'beet'],[/kürbis|kuerbis/,'pumpkin'],[/salat/,'salad'],[/kräuter|kraeuter|brennnessel/,'herbs'],[/gemüse|gemuese|vegetar|antipasti/,'vegetable'],
[/pizza|flammkuchen/,'pizza'],[/risotto|reis/,'risotto'],[/pasta|nudel|spaghetti|tagliatelle|ravioli|gnocchi|carbonara|knödel/,'pasta'],[/brot|baguette|brioche/,'bread'],
[/blauschimmel|gorgonzola|roquefort/,'bluecheese'],[/ziegenkäse|ziegenkaese|ziegenfrischkäse|schafskäse/,'goatcheese'],[/weichkäse|weichkaese|camembert|brie|epoisses|burrata/,'softcheese'],[/käse|kaese|parmesan|pecorino|comté|comte|gruyère|gruyere|beaufort/,'cheese'],
[/schokolade|zartbitter/,'chocolate'],[/dessert|torte|tarte|kuchen|sorbet|eis|crème|creme|obst/,'dessert'],[/frucht|früchte|beere|aprikose/,'fruit'],[/curry|asiatisch|thai|vietnames|umami|süß-sauer|würzig/,'curry'],[/grill/,'grill'],[/schmorgericht/,'beef'],[/südtiroler spezialität/,'charcuterie'],[/mediterran/,'vegetable'],[/aperitif|apéritif|aperitivo|empfang|vorspeise/,'aperitif'],[/anlass|anlässe|gesellschaft|jubil|festessen|gartenparty|haute cuisine|meditation|spitzenklasse/,'occasion']
];
function type(label){const t=String(label||'').toLowerCase();for(const [r,k] of rules)if(r.test(t))return k;return'cloche'}
function svg(k){const icon=alias[k]||k;return `<svg viewBox="0 0 48 48" aria-hidden="true">${D[icon]||D.artichoke}</svg>`}
function apply(root=document){root.querySelectorAll('.wf-pair').forEach(pair=>{const label=(pair.querySelector('.wf-pl')?.textContent||'').trim(),box=pair.querySelector('.wf-pi');if(!label||!box)return;const k=type(label);if(box.dataset.wfPremium===k&&box.querySelector('svg'))return;box.dataset.wfPremium=k;box.innerHTML=svg(k);box.style.cssText='width:64px!important;height:64px!important;margin:0 auto 9px!important;border:0!important;border-radius:50%!important;background:#F2EEE7!important;color:#26332f!important;display:grid!important;place-items:center!important;box-shadow:none!important';const icon=box.querySelector('svg');icon.style.cssText='width:39px!important;height:39px!important;display:block!important;overflow:visible!important'});}
window.WinefundayOutlinePairingType=type;
window.WinefundayPairingIconsApply=apply;
apply();
const observer=new MutationObserver(()=>apply());observer.observe(document.documentElement,{childList:true,subtree:true});
document.addEventListener('DOMContentLoaded',()=>apply(),{once:true});
})();
