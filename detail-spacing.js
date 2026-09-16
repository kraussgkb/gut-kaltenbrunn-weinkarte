/* WINEFUNDAY_DETAIL_SPACING_V10 — layout unchanged; pairing pictograms refined */
(()=>{'use strict';
const s=document.createElement('style');s.id='winefunday-detail-spacing-v1';s.textContent=`
.detail .bottle,.detail .sections{--wf-detail-gutter:clamp(26px,4vw,48px)}
.detail .bottle{margin:22px var(--wf-detail-gutter) 0!important}
.detail .sections{padding-left:var(--wf-detail-gutter)!important;padding-right:var(--wf-detail-gutter)!important}
.detail .sections>.profile-box,.detail .sections>section.profile-box{margin-top:24px!important}
.detail .sections .tasting-note{margin-top:0!important;margin-bottom:24px!important}
.detail .sections>.wf-cta,.detail .sections>.wf-pairing,.detail .sections>.wf-eye,.detail .sections>[class*="wf-social"],.detail .sections>[class*="wf-rating"]{width:100%!important;max-width:none!important;margin-left:0!important;margin-right:0!important}
.wf-pairing .wf-pi{width:58px!important;height:42px!important;margin:0 auto 9px!important;border:0!important;border-radius:0!important;background:transparent!important;color:#004438!important;box-shadow:none!important}
.wf-pairing .wf-pi svg{width:54px!important;height:40px!important;fill:none!important;stroke:currentColor!important;stroke-width:1.45!important;stroke-linecap:round!important;stroke-linejoin:round!important}
.detail .winefunday-social-block.wf-social-card-target{box-sizing:border-box!important;width:100%!important;max-width:none!important;margin-left:0!important;margin-right:0!important}
.detail .rating-box.wf-rating-moved{box-sizing:border-box!important;width:100%!important;max-width:none!important;margin:20px 0 0!important;padding:16px 18px 17px!important;border:1px solid #d7dedb!important;border-top:4px solid var(--gold)!important;border-radius:9px!important;background:#f8f7f3!important;box-shadow:none!important;color:var(--ink)!important}
.detail .rating-box.wf-rating-moved h3{font:400 19px/1.25 Georgia,"Times New Roman",serif!important;color:var(--g)!important;margin:0 0 10px!important}
.detail .rating-box.wf-rating-moved .rating-summary{display:flex!important;align-items:center!important;gap:9px!important;margin:0 0 8px!important}
.detail .rating-box.wf-rating-moved .rating-average{font:700 25px/1 Georgia,serif!important;color:#24372f!important}
.detail .rating-box.wf-rating-moved .rating-meta{font-size:12.5px!important;line-height:1.4!important;color:#737b78!important}
.detail .rating-box.wf-rating-moved .rating-stars{display:flex!important;gap:4px!important;direction:rtl!important;justify-content:flex-end!important;margin:2px 0 0!important}
.detail .rating-box.wf-rating-moved .rating-stars button{border:0!important;background:none!important;color:#c9cbc9!important;font-size:26px!important;line-height:1!important;padding:2px!important}
.detail .rating-box.wf-rating-moved .rating-stars button.selected,.detail .rating-box.wf-rating-moved .rating-stars button.selected~button{color:var(--gold)!important}
.detail .rating-box.wf-rating-moved .rating-help{display:block!important;margin-top:7px!important;font-size:12.5px!important;line-height:1.4!important;color:#737b78!important}
.detail .rating-box.wf-rating-moved .rating-message{min-height:14px!important;margin-top:4px!important;font-size:12px!important;color:var(--g)!important}
@media(max-width:580px){
.detail .bottle,.detail .sections{--wf-detail-gutter:22px}
.detail .sections{padding-left:var(--wf-detail-gutter)!important;padding-right:var(--wf-detail-gutter)!important;padding-top:22px!important}
.detail .detail-summary .content{padding-bottom:0!important}
.detail .detail-flow .bottle{margin:22px var(--wf-detail-gutter) 0!important}
.detail .detail-flow .sections>section:first-child{border-top:0!important;padding-top:0!important}
.detail .sections>.profile-box,.detail .sections>section.profile-box{margin-top:22px!important}
.detail .sections .tasting-note{margin-top:0!important;margin-bottom:22px!important}
.detail .wf-cta{grid-template-columns:38px minmax(0,1fr) 18px!important;gap:10px!important;padding:13px 14px!important;min-height:64px!important;overflow:hidden!important;margin:22px 0!important}
.detail .wf-ci{width:34px!important;height:34px!important}.detail .wf-ci svg{width:18px!important}.detail .wf-cc{min-width:0!important}.detail .wf-cc strong{font-size:15px!important;line-height:1!important;letter-spacing:.035em!important;white-space:nowrap!important}.detail .wf-ca{font-size:20px!important;line-height:1!important}
.detail .estate-story{margin-top:0!important;padding-top:22px!important}
.detail .winefunday-social-block.wf-social-card-target{width:100%!important;margin-left:0!important;margin-right:0!important;padding:25px 20px 22px!important}
.detail .rating-box.wf-rating-moved{width:100%!important;margin:18px 0 0!important;padding:16px 18px 17px!important}
.detail .rating-box.wf-rating-moved h3{font-size:19px!important;margin-bottom:10px!important}
}
`;document.head.appendChild(s);
function findSocial(d){const direct=d.querySelector('.winefunday-social-block');if(direct)return direct;const nodes=[...d.querySelectorAll('section,article,div')];return nodes.filter(el=>{const t=(el.textContent||'').replace(/\s+/g,' ').trim();return /DU TRINKST GERADE/i.test(t)&&(/Genussmoment|Winefunday Community|TAG US|Good Wine|Better People|Same Wine\. More Stories/i.test(t));}).sort((a,b)=>a.querySelectorAll('*').length-b.querySelectorAll('*').length)[0]||null}
function moveAndPolish(){const d=document.querySelector('.detail');if(!d)return false;const rating=d.querySelector('.rating-box');const social=findSocial(d);if(!rating||!social)return false;social.classList.add('wf-social-card-target');rating.classList.add('wf-rating-moved');if(rating.previousElementSibling!==social)social.insertAdjacentElement('afterend',rating);rating.style.width='';rating.style.maxWidth='';rating.style.marginLeft='';rating.style.marginRight='';return true}
const PI={schnitzel:'<path d="M3 15c1-4 4-7 9-7 5 0 8 3 9 7-2 3-5 5-9 5s-7-2-9-5Z"/><path d="M7 14c2-2 8-2 10 0M8 17c2-1 6-1 8 0"/>',fish:'<path d="M3 13c4-5 10-6 15-2l3-3v9l-3-3c-5 4-11 3-15-1Z"/><circle cx="8" cy="12" r=".7"/><path d="M13 9l2-3M13 16l2 3"/>',poultry:'<path d="M5 15c0-5 4-9 9-9 4 0 7 3 7 7 0 5-4 8-9 8-4 0-7-2-7-6Z"/><path d="M16 7l3-3m-1 1 3 1M9 19l-1 3m6-2 1 2"/>',beef:'<path d="M4 10c3-5 13-6 17-1 3 4 0 10-6 11-6 2-12-1-12-6 0-1 0-3 1-4Z"/><path d="M8 11c2-2 7-3 10 0 2 2 1 5-2 6-4 2-8 0-9-3"/><circle cx="17" cy="11" r=".7"/>',cheese:'<path d="M4 10 14 5l7 5v10H4Z"/><path d="M4 10h17"/><circle cx="10" cy="14" r="1"/><circle cx="16" cy="17" r="1"/>',plate:'<ellipse cx="12" cy="14" rx="9" ry="6"/><path d="M6 13c2-3 10-3 12 0M8 16c3 1 5 1 8 0"/>'};
function polishPairIcons(){document.querySelectorAll('.wf-pair').forEach(pair=>{const label=(pair.querySelector('.wf-pl')?.textContent||'').toLowerCase();const svg=pair.querySelector('.wf-pi svg');if(!svg)return;let type='plate';if(/schnitzel/.test(label))type='schnitzel';else if(/tafelspitz|steak|rind|rinder|entrec|roastbeef|filet/.test(label))type='beef';else if(/zander|saibling|fisch|lachs|forelle|thunfisch|seezunge|steinbutt/.test(label))type='fish';else if(/brathendl|backhendl|hendl|huhn|hähn|geflügel|poularde|poulet/.test(label))type='poultry';else if(/käse|kaese|parmesan/.test(label))type='cheese';svg.innerHTML=PI[type];svg.setAttribute('viewBox','0 0 24 24')})}
let n=0;const timer=setInterval(()=>{n++;moveAndPolish();polishPairIcons();if(n>80)clearInterval(timer)},250);new MutationObserver(()=>{moveAndPolish();polishPairIcons()}).observe(document.documentElement,{childList:true,subtree:true});window.addEventListener('load',()=>setTimeout(()=>{moveAndPolish();polishPairIcons()},100));
})();
