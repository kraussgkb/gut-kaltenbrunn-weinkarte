/* WINEFUNDAY_DETAIL_SPACING_V7 — keep rating at bottom, restore its styling, align social/rating card size */
(()=>{'use strict';
const s=document.createElement('style');s.id='winefunday-detail-spacing-v1';s.textContent=`
.detail .bottle,.detail .sections{--wf-detail-gutter:clamp(26px,4vw,48px)}
.detail .bottle{margin:22px var(--wf-detail-gutter) 0!important}
.detail .sections{padding-left:var(--wf-detail-gutter)!important;padding-right:var(--wf-detail-gutter)!important}
.detail .sections>.profile-box,.detail .sections>section.profile-box{margin-top:24px!important}
.detail .sections .rating-box{margin-top:24px!important}
.detail .sections .tasting-note{margin-top:0!important;margin-bottom:24px!important}
.detail .sections>.wf-cta,.detail .sections>.wf-pairing,.detail .sections>.wf-eye,.detail .sections>[class*="wf-social"],.detail .sections>[class*="wf-rating"]{width:100%!important;max-width:none!important;margin-left:0!important;margin-right:0!important}

/* moved rating must keep the exact visual language it had inside .sections */
.detail .rating-box.wf-rating-moved{
  box-sizing:border-box!important;
  padding:13px!important;
  border:1px solid #d7dedb!important;
  border-top:4px solid var(--gold)!important;
  border-radius:9px!important;
  background:#f8f7f3!important;
  margin-top:22px!important;
  margin-bottom:0!important;
}
.detail .rating-box.wf-rating-moved h3{
  font:18px Georgia,"Times New Roman",serif!important;
  color:var(--g)!important;
  margin:0 0 7px!important;
}
.detail .rating-box.wf-rating-moved .rating-summary{display:flex!important;align-items:center!important;gap:9px!important;margin-bottom:7px!important}
.detail .rating-box.wf-rating-moved .rating-average{font:700 25px Georgia,serif!important;color:#24372f!important}
.detail .rating-box.wf-rating-moved .rating-meta{font-size:12px!important;color:#737b78!important}
.detail .rating-box.wf-rating-moved .rating-stars{display:flex!important;gap:4px!important;direction:rtl!important;justify-content:flex-end!important}
.detail .rating-box.wf-rating-moved .rating-stars button{font-size:26px!important;line-height:1!important;padding:2px!important}
.detail .rating-box.wf-rating-moved .rating-help{display:block!important;margin-top:6px!important;font-size:12px!important;color:#737b78!important}
.detail .rating-box.wf-rating-moved .rating-message{min-height:14px!important;margin-top:4px!important;font-size:12px!important;color:var(--g)!important}

@media(max-width:580px){
.detail .bottle,.detail .sections{--wf-detail-gutter:22px}
.detail .sections{padding-left:var(--wf-detail-gutter)!important;padding-right:var(--wf-detail-gutter)!important;padding-top:22px!important}
.detail .detail-summary .content{padding-bottom:0!important}
.detail .detail-flow .bottle{margin:22px var(--wf-detail-gutter) 0!important}
.detail .detail-flow .sections>section:first-child{border-top:0!important;padding-top:0!important}
.detail .sections>.profile-box,.detail .sections>section.profile-box,.detail .sections .rating-box{margin-top:22px!important}
.detail .sections .tasting-note{margin-top:0!important;margin-bottom:22px!important}
.detail .wf-cta{grid-template-columns:38px minmax(0,1fr) 18px!important;gap:10px!important;padding:13px 14px!important;min-height:64px!important;overflow:hidden!important;margin:22px 0!important}
.detail .wf-ci{width:34px!important;height:34px!important}.detail .wf-ci svg{width:18px!important}.detail .wf-cc{min-width:0!important}.detail .wf-cc strong{font-size:15px!important;line-height:1!important;letter-spacing:.035em!important;white-space:nowrap!important}.detail .wf-ca{font-size:20px!important;line-height:1!important}
.detail .estate-story{margin-top:0!important;padding-top:22px!important}
.detail .rating-box.wf-rating-moved{padding:16px!important;margin-top:18px!important}
.detail .rating-box.wf-rating-moved h3{font-size:18px!important;margin-bottom:8px!important}
.detail .wf-social-card-target{box-sizing:border-box!important;margin-left:auto!important;margin-right:auto!important}
}
`;document.head.appendChild(s);

function findSocial(d){
 const nodes=[...d.querySelectorAll('section,article,div')];
 const hit=nodes.filter(el=>{const t=(el.textContent||'').replace(/\s+/g,' ').trim();return /DU TRINKST GERADE/i.test(t)&&(/Genussmoment|Winefunday Community|TAG US|Good Wine|Better People|Same Wine\. More Stories/i.test(t));}).sort((a,b)=>a.querySelectorAll('*').length-b.querySelectorAll('*').length)[0];
 if(!hit)return null;
 let social=hit;
 while(social.parentElement&&social.parentElement!==d&&social.parentElement!==d.querySelector('.sections')){
   const p=social.parentElement,t=(p.textContent||'');
   if(!/DU TRINKST GERADE/i.test(t))break;
   if(p.classList.contains('sections')||p.classList.contains('detail-flow'))break;
   social=p;
 }
 return social;
}

function moveAndPolish(){
 const d=document.querySelector('.detail'); if(!d)return false;
 const rating=d.querySelector('.rating-box'); if(!rating)return false;
 const social=findSocial(d); if(!social)return false;
 social.classList.add('wf-social-card-target');
 rating.classList.add('wf-rating-moved');
 if(rating.previousElementSibling!==social) social.insertAdjacentElement('afterend',rating);
 /* Make both cards exactly the same visible width after layout. */
 requestAnimationFrame(()=>{
   const w=Math.round(social.getBoundingClientRect().width);
   if(w>0){
     rating.style.width=w+'px';
     rating.style.maxWidth='100%';
     rating.style.marginLeft='auto';
     rating.style.marginRight='auto';
   }
 });
 return true;
}
let n=0;const timer=setInterval(()=>{n++;if(moveAndPolish()||n>80)clearInterval(timer)},250);
new MutationObserver(()=>moveAndPolish()).observe(document.documentElement,{childList:true,subtree:true});
window.addEventListener('load',()=>setTimeout(moveAndPolish,100));
window.addEventListener('resize',()=>setTimeout(moveAndPolish,50));
})();
