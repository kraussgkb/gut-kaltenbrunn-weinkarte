/* WINEFUNDAY_DETAIL_SPACING_V6 — normalized widths/rhythm + rating forced to actual page end */
(()=>{'use strict';
const s=document.createElement('style');s.id='winefunday-detail-spacing-v1';s.textContent=`
.detail .bottle,.detail .sections{--wf-detail-gutter:clamp(26px,4vw,48px)}
.detail .bottle{margin:22px var(--wf-detail-gutter) 0!important}
.detail .sections{padding-left:var(--wf-detail-gutter)!important;padding-right:var(--wf-detail-gutter)!important}
.detail .sections>.profile-box,.detail .sections>section.profile-box{margin-top:24px!important}
.detail .sections .rating-box{margin-top:24px!important}
.detail .sections .tasting-note{margin-top:0!important;margin-bottom:24px!important}
.detail .sections>.wf-cta,.detail .sections>.wf-pairing,.detail .sections>.wf-eye,.detail .sections>[class*="wf-social"],.detail .sections>[class*="wf-rating"]{width:100%!important;max-width:none!important;margin-left:0!important;margin-right:0!important}
@media(max-width:580px){
.detail .bottle,.detail .sections{--wf-detail-gutter:22px}.detail .sections{padding-left:var(--wf-detail-gutter)!important;padding-right:var(--wf-detail-gutter)!important;padding-top:22px!important}.detail .detail-summary .content{padding-bottom:0!important}.detail .detail-flow .bottle{margin:22px var(--wf-detail-gutter) 0!important}.detail .detail-flow .sections>section:first-child{border-top:0!important;padding-top:0!important}.detail .sections>.profile-box,.detail .sections>section.profile-box,.detail .sections .rating-box{margin-top:22px!important}.detail .sections .tasting-note{margin-top:0!important;margin-bottom:22px!important}.detail .wf-cta{grid-template-columns:38px minmax(0,1fr) 18px!important;gap:10px!important;padding:13px 14px!important;min-height:64px!important;overflow:hidden!important;margin:22px 0!important}.detail .wf-ci{width:34px!important;height:34px!important}.detail .wf-ci svg{width:18px!important}.detail .wf-cc{min-width:0!important}.detail .wf-cc strong{font-size:15px!important;line-height:1!important;letter-spacing:.035em!important;white-space:nowrap!important}.detail .wf-ca{font-size:20px!important;line-height:1!important}.detail .estate-story{margin-top:0!important;padding-top:22px!important}.detail .rating-box{margin-top:22px!important;margin-bottom:0!important}
}
`;document.head.appendChild(s);
function moveRating(){
 const d=document.querySelector('.detail'); if(!d)return false;
 const rating=d.querySelector('.rating-box'); if(!rating)return false;
 /* Social is generated later and its class names are not guaranteed. Find its outer card by its visible copy. */
 const nodes=[...d.querySelectorAll('section,article,div')];
 const hit=nodes.filter(el=>{const t=(el.textContent||'').replace(/\s+/g,' ').trim();return /DU TRINKST GERADE/i.test(t)&&(/Genussmoment|Winefunday Community|TAG US|Good Wine|Better People/i.test(t));}).sort((a,b)=>a.querySelectorAll('*').length-b.querySelectorAll('*').length)[0];
 if(!hit)return false;
 let social=hit;
 /* climb only while parent is still a dedicated social card, never to the whole sections/detail container */
 while(social.parentElement&&social.parentElement!==d&&social.parentElement!==d.querySelector('.sections')){
   const p=social.parentElement,t=(p.textContent||'');
   if(!/DU TRINKST GERADE/i.test(t))break;
   if(p.classList.contains('sections')||p.classList.contains('detail-flow'))break;
   social=p;
 }
 if(rating.previousElementSibling===social)return true;
 social.insertAdjacentElement('afterend',rating);
 return rating.previousElementSibling===social;
}
let n=0;const timer=setInterval(()=>{n++;if(moveRating()||n>80)clearInterval(timer)},250);
const mo=new MutationObserver(()=>moveRating());mo.observe(document.documentElement,{childList:true,subtree:true});
window.addEventListener('load',()=>setTimeout(moveRating,100));
})();
