/* WINEFUNDAY_DETAIL_SPACING_V1 — spacing/width only; no typography, colors or content changes */
(()=>{'use strict';
const s=document.createElement('style');
s.id='winefunday-detail-spacing-v1';
s.textContent=`
/* One horizontal grid for all major detail blocks */
.detail .bottle,
.detail .sections{
  --wf-detail-gutter:clamp(26px,4vw,48px);
}
.detail .bottle{
  margin:22px var(--wf-detail-gutter) 0!important;
}
.detail .sections{
  padding-left:var(--wf-detail-gutter)!important;
  padding-right:var(--wf-detail-gutter)!important;
}

/* One vertical rhythm between bordered/card-like blocks */
.detail .sections>.profile-box,
.detail .sections>section.profile-box{
  margin-top:24px!important;
}
.detail .sections .rating-box{
  margin-top:24px!important;
}
.detail .sections .tasting-note{
  margin-top:0!important;
  margin-bottom:24px!important;
}

/* Dynamically inserted Winefunday modules: same width, no accidental side inset */
.detail .sections>.wf-cta,
.detail .sections>.wf-pairing,
.detail .sections>.wf-eye,
.detail .sections>[class*="wf-social"],
.detail .sections>[class*="wf-rating"]{
  width:100%!important;
  max-width:none!important;
  margin-left:0!important;
  margin-right:0!important;
}

@media(max-width:580px){
  .detail .bottle,
  .detail .sections{
    --wf-detail-gutter:22px;
  }
  .detail .bottle{
    margin-left:var(--wf-detail-gutter)!important;
    margin-right:var(--wf-detail-gutter)!important;
  }
  .detail .sections{
    padding-left:var(--wf-detail-gutter)!important;
    padding-right:var(--wf-detail-gutter)!important;
  }
  .detail .sections>.profile-box,
  .detail .sections>section.profile-box,
  .detail .sections .rating-box{
    margin-top:22px!important;
  }
  .detail .sections .tasting-note{
    margin-bottom:22px!important;
  }
}
`;
document.head.appendChild(s);
})();
