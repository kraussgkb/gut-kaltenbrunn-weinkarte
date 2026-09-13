/* WINEFUNDAY_DETAIL_SPACING_V4 — normalized widths and mobile vertical rhythm */
(()=>{'use strict';
const s=document.createElement('style');
s.id='winefunday-detail-spacing-v1';
s.textContent=`
.detail .bottle,.detail .sections{--wf-detail-gutter:clamp(26px,4vw,48px)}
.detail .bottle{margin:22px var(--wf-detail-gutter) 0!important}
.detail .sections{padding-left:var(--wf-detail-gutter)!important;padding-right:var(--wf-detail-gutter)!important}
.detail .sections>.profile-box,.detail .sections>section.profile-box{margin-top:24px!important}
.detail .sections .rating-box{margin-top:24px!important}
.detail .sections .tasting-note{margin-top:0!important;margin-bottom:24px!important}
.detail .sections>.wf-cta,.detail .sections>.wf-pairing,.detail .sections>.wf-eye,.detail .sections>[class*="wf-social"],.detail .sections>[class*="wf-rating"]{width:100%!important;max-width:none!important;margin-left:0!important;margin-right:0!important}
@media(max-width:580px){
.detail .bottle,.detail .sections{--wf-detail-gutter:22px}
.detail .sections{padding-left:var(--wf-detail-gutter)!important;padding-right:var(--wf-detail-gutter)!important;padding-top:22px!important}
.detail .detail-summary .content{padding-bottom:0!important}
.detail .detail-flow .bottle{margin:22px var(--wf-detail-gutter) 0!important}
.detail .detail-flow .sections>section:first-child{border-top:0!important;padding-top:0!important}
.detail .sections>.profile-box,.detail .sections>section.profile-box,.detail .sections .rating-box{margin-top:22px!important}
.detail .sections .tasting-note{margin-top:0!important;margin-bottom:22px!important}
.detail .wf-cta{grid-template-columns:38px minmax(0,1fr) 18px!important;gap:10px!important;padding:13px 14px!important;min-height:64px!important;overflow:hidden!important;margin:22px 0!important}
.detail .wf-ci{width:34px!important;height:34px!important}
.detail .wf-ci svg{width:18px!important}
.detail .wf-cc{min-width:0!important}
.detail .wf-cc strong{font-size:15px!important;line-height:1!important;letter-spacing:.035em!important;white-space:nowrap!important}
.detail .wf-ca{font-size:20px!important;line-height:1!important}
.detail .estate-story{margin-top:0!important;padding-top:22px!important}
.detail .rating-box{margin-top:22px!important;margin-bottom:0!important}
}
`;
document.head.appendChild(s);
})();
