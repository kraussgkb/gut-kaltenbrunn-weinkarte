/* WINEFUNDAY_PAIRING_ICONS_V4 — complete icon system; scallop uses a true fan-shell pictogram */
(()=>{'use strict';
const I={
aperitif:'🥂',oyster:'🦪',shellfish:'🦐',lobster:'🦞',fish:'🐟',sushi:'🍣',beef:'🥩',veal:'🥩',lamb:'🍖',game:'🦌',pork:'🍖',poultry:'🍗',schnitzel:'🍽️',pasta:'🍝',risotto:'🍚',pizza:'🍕',cheese:'🧀',asparagus:'🌱',mushroom:'🍄',vegetable:'🥕',salad:'🥗',dessert:'🍰',soup:'🥣',bread:'🥖',default:'🍽️'
};
const SCALLOP='<svg class="wf-scallop-svg" viewBox="0 0 32 32" aria-hidden="true"><path d="M16 5C9.2 5 5.2 9.7 5 17.2c2.2 4.9 6 8.2 11 10 5-1.8 8.8-5.1 11-10C26.8 9.7 22.8 5 16 5Z"/><path d="M16 6v19M15.2 7 10 23.5M16.8 7 22 23.5M13.8 7.8 7.2 20.8M18.2 7.8l6.6 13M10 8.8 5.8 16.5M22 8.8l4.2 7.7"/><path d="M8.2 22.1c4.9 2.2 10.7 2.2 15.6 0"/></svg>';
const R=[
[/aperitif|empfang|welcome|apéritif/,'aperitif'],
[/jakobs?muschel|coquille|scallop/,'scallop'],
[/auster|oyster/,'oyster'],
[/hummer|lobster|languste/,'lobster'],
[/garnele|shrimp|scampi|krebs|krustentier|meeresfrüchte|meeresfruechte|seafood|muschel/,'shellfish'],
[/sushi|sashimi/,'sushi'],
[/zander|saibling|forelle|fisch|lachs|thunfisch|seezunge|steinbutt|kabeljau|dorade|wolfsbarsch|hecht|karpfen/,'fish'],
[/schnitzel/,'schnitzel'],[/kalb|veal/,'veal'],[/rind|beef|steak|filet|entrec[oô]te|roastbeef|ochse/,'beef'],[/lamm|lamb|karree/,'lamb'],[/wild|reh|hirsch|venison/,'game'],[/schwein|pork|spanferkel|speck/,'pork'],[/ente|gans|huhn|hähn|haehn|geflügel|poularde|poulet|backhendl|brathendl|hendl/,'poultry'],[/pasta|nudel|spaghetti|tagliatelle|ravioli|gnocchi/,'pasta'],[/risotto|reis/,'risotto'],[/pizza/,'pizza'],[/käse|kaese|parmesan|pecorino|comté|comte|gouda/,'cheese'],[/spargel/,'asparagus'],[/pilz|steinpilz|trüffel|truffel/,'mushroom'],[/salat/,'salad'],[/suppe|consomm|bouillon/,'soup'],[/brot|baguette/,'bread'],[/dessert|schokolade|torte|kuchen|sorbet|eis|crème|creme brulee/,'dessert'],[/gemüse|gemuese|vegetar|aubergine|zucchini|kürbis|kuerbis/,'vegetable']
];
const type=l=>{const t=(l||'').toLowerCase();for(const [r,k] of R)if(r.test(t))return k;return'default'};
function apply(root=document){root.querySelectorAll('.wf-pair').forEach(p=>{const label=(p.querySelector('.wf-pl')?.textContent||'').trim(),box=p.querySelector('.wf-pi');if(!label||!box)return;const k=type(label);if(box.dataset.wfIconV4===k&&(k==='scallop'?box.querySelector('.wf-scallop-svg'):box.querySelector('.wf-food-emoji')))return;box.dataset.wfIconV4=k;box.innerHTML=k==='scallop'?SCALLOP:'<span class="wf-food-emoji" role="img" aria-label="'+label.replace(/"/g,'&quot;')+'">'+I[k]+'</span>'})}
const s=document.createElement('style');s.id='winefunday-pairing-icons-v4-style';s.textContent='.wf-food-emoji{display:flex;align-items:center;justify-content:center;width:100%;height:100%;font-family:"Apple Color Emoji","Segoe UI Emoji","Noto Color Emoji",sans-serif;font-size:25px;line-height:1;font-style:normal}.wf-scallop-svg{display:block;width:27px;height:27px;fill:none;stroke:#004438;stroke-width:1.65;stroke-linecap:round;stroke-linejoin:round}.wf-pi{overflow:hidden}@media(max-width:580px){.wf-food-emoji{font-size:24px}.wf-scallop-svg{width:26px;height:26px}}';document.head.appendChild(s);
window.WinefundayPairingIconsApply=apply;apply();const mo=new MutationObserver(()=>apply());mo.observe(document.documentElement,{childList:true,subtree:true});document.addEventListener('click',()=>setTimeout(()=>apply(),0),true);document.addEventListener('DOMContentLoaded',()=>apply());
})();
