/* WINEFUNDAY_PAIRING_ICONS_V2 — complete, isolated icon system for "Passt besonders zu" */
(()=>{'use strict';
const I={
aperitif:'🥂',oyster:'🦪',scallop:'◖◗',shellfish:'🦐',lobster:'🦞',fish:'🐟',beef:'🥩',veal:'🥩',lamb:'🍖',game:'🦌',pork:'🍖',poultry:'🍗',schnitzel:'🍽️',pasta:'🍝',risotto:'🍚',pizza:'🍕',cheese:'🧀',asparagus:'🌱',mushroom:'🍄',vegetable:'🥕',salad:'🥗',dessert:'🍰',soup:'🥣',bread:'🥖',sushi:'🍣',default:'🍽️'
};
const R=[
[/aperitif|empfang|welcome|apéritif/,'aperitif'],
[/jakobs?muschel|coquille|scallop/,'scallop'],
[/auster|oyster/,'oyster'],
[/hummer|lobster|languste/,'lobster'],
[/garnele|shrimp|scampi|krebs|krustentier|meeresfrüchte|seafood|muschel/,'shellfish'],
[/sushi|sashimi/,'sushi'],
[/zander|saibling|forelle|fisch|lachs|thunfisch|seezunge|steinbutt|kabeljau|dorade|wolfsbarsch|hecht|karpfen/,'fish'],
[/schnitzel/,'schnitzel'],
[/kalb|veal/,'veal'],
[/rind|beef|steak|filet|entrec[oô]te|roastbeef|ochse/,'beef'],
[/lamm|lamb|karree/,'lamb'],
[/wild|reh|hirsch|venison/,'game'],
[/schwein|pork|spanferkel|speck/,'pork'],
[/ente|gans|huhn|hähn|haehn|geflügel|poularde|poulet|backhendl|brathendl|hendl/,'poultry'],
[/pasta|nudel|spaghetti|tagliatelle|ravioli|gnocchi/,'pasta'],
[/risotto|reis/,'risotto'],
[/pizza/,'pizza'],
[/käse|kaese|parmesan|pecorino|comté|comte|gouda/,'cheese'],
[/spargel/,'asparagus'],
[/pilz|steinpilz|trüffel|truffel/,'mushroom'],
[/salat/,'salad'],
[/suppe|consomm|bouillon/,'soup'],
[/brot|baguette/,'bread'],
[/dessert|schokolade|torte|kuchen|sorbet|eis|crème|creme brulee/,'dessert'],
[/gemüse|gemuese|vegetar|aubergine|zucchini|kürbis|kuerbis/,'vegetable']
];
const type=l=>{const t=(l||'').toLowerCase();for(const [r,k] of R)if(r.test(t))return k;return'default'};
function apply(root=document){root.querySelectorAll('.wf-pair').forEach(p=>{const label=(p.querySelector('.wf-pl')?.textContent||'').trim(),box=p.querySelector('.wf-pi');if(!label||!box)return;const k=type(label);if(box.dataset.wfIconV2===k)return;box.dataset.wfIconV2=k;box.innerHTML='<span class="wf-food-emoji" role="img" aria-label="'+label.replace(/"/g,'&quot;')+'">'+I[k]+'</span>'})}
const s=document.createElement('style');s.id='winefunday-pairing-icons-v2-style';s.textContent='.wf-food-emoji{display:flex;align-items:center;justify-content:center;width:100%;height:100%;font-family:"Apple Color Emoji","Segoe UI Emoji","Noto Color Emoji",sans-serif;font-size:25px;line-height:1;font-style:normal}.wf-pi{overflow:hidden}@media(max-width:580px){.wf-food-emoji{font-size:24px}}';document.head.appendChild(s);
apply();const mo=new MutationObserver(()=>apply());mo.observe(document.documentElement,{childList:true,subtree:true});setTimeout(()=>mo.disconnect(),10000);
})();
