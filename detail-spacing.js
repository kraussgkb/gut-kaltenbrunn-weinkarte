/* WINEFUNDAY_DETAIL_SPACING_V11 — bottom rating restored + social/rating cards aligned + isolated pairing icons */
(()=>{'use strict';
const s=document.createElement('style');s.id='winefunday-detail-spacing-v1';s.textContent=`
.detail .bottle,.detail .sections{--wf-detail-gutter:clamp(26px,4vw,48px)}
.detail .bottle{margin:22px var(--wf-detail-gutter) 0!important}
.detail .sections{padding-left:var(--wf-detail-gutter)!important;padding-right:var(--wf-detail-gutter)!important}
.detail .sections>.profile-box,.detail .sections>section.profile-box{margin-top:24px!important}
.detail .sections .tasting-note{margin-top:0!important;margin-bottom:24px!important}
.detail .sections>.wf-cta,.detail .sections>.wf-pairing,.detail .sections>.wf-eye,.detail .sections>[class*="wf-social"],.detail .sections>[class*="wf-rating"]{width:100%!important;max-width:none!important;margin-left:0!important;margin-right:0!important}

/* Winefunday pairing pictograms: large readable premium line treatment */
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
.detail .detail-summary .content{padding-bottom:0!important}.detail .detail-flow .bottle{margin:22px var(--wf-detail-gutter) 0!important}.detail .detail-flow .sections>section:first-child{border-top:0!important;padding-top:0!important}
.detail .sections>.profile-box,.detail .sections>section.profile-box{margin-top:22px!important}.detail .sections .tasting-note{margin-top:0!important;margin-bottom:22px!important}
.detail .wf-cta{grid-template-columns:38px minmax(0,1fr) 18px!important;gap:10px!important;padding:13px 14px!important;min-height:64px!important;overflow:hidden!important;margin:22px 0!important}
.detail .wf-ci{width:34px!important;height:34px!important}.detail .wf-ci svg{width:18px!important}.detail .wf-cc{min-width:0!important}.detail .wf-cc strong{font-size:15px!important;line-height:1!important;letter-spacing:.035em!important;white-space:nowrap!important}.detail .wf-ca{font-size:20px!important;line-height:1!important}
.detail .estate-story{margin-top:0!important;padding-top:22px!important}.detail .winefunday-social-block.wf-social-card-target{width:100%!important;margin-left:0!important;margin-right:0!important;padding:25px 20px 22px!important}.detail .rating-box.wf-rating-moved{width:100%!important;margin:18px 0 0!important;padding:16px 18px 17px!important}.detail .rating-box.wf-rating-moved h3{font-size:19px!important;margin-bottom:10px!important}
}
`;document.head.appendChild(s);
function findSocial(d){const direct=d.querySelector('.winefunday-social-block');if(direct)return direct;const nodes=[...d.querySelectorAll('section,article,div')];return nodes.filter(el=>{const t=(el.textContent||'').replace(/\s+/g,' ').trim();return /DU TRINKST GERADE/i.test(t)&&(/Genussmoment|Winefunday Community|TAG US|Good Wine|Better People|Same Wine\. More Stories/i.test(t));}).sort((a,b)=>a.querySelectorAll('*').length-b.querySelectorAll('*').length)[0]||null}
function moveAndPolish(){const d=document.querySelector('.detail');if(!d)return false;const rating=d.querySelector('.rating-box');const social=findSocial(d);if(!rating||!social)return false;social.classList.add('wf-social-card-target');rating.classList.add('wf-rating-moved');if(rating.previousElementSibling!==social)social.insertAdjacentElement('afterend',rating);rating.style.width='';rating.style.maxWidth='';rating.style.marginLeft='';rating.style.marginRight='';return true}
let n=0;const timer=setInterval(()=>{n++;if(moveAndPolish()||n>80)clearInterval(timer)},250);new MutationObserver(()=>moveAndPolish()).observe(document.documentElement,{childList:true,subtree:true});window.addEventListener('load',()=>setTimeout(moveAndPolish,100));
if(!document.querySelector('script[data-wf-pairing-icons]')){const p=document.createElement('script');p.src='pairing-icons.js?v=13';p.defer=true;p.dataset.wfPairingIcons='1';document.head.appendChild(p)}
})();
