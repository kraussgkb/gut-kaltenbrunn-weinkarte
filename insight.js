(() => {
  const insightWineIds = ["CH806-1-NV"];
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  if (!insightWineIds.includes(id)) return;

  function addInsightStyles() {
    if (document.getElementById("insight-link-style")) return;
    const style = document.createElement("style");
    style.id = "insight-link-style";
    style.textContent = ".insight-link{display:block;width:100%;box-sizing:border-box;background:#004438;color:#fff;border:1px solid #004438;padding:13px 18px;margin-bottom:18px;font-size:12px;font-weight:700;letter-spacing:.12em;text-align:center;border-radius:5px;text-decoration:none;transition:background .2s,color .2s}.insight-link:hover,.insight-link:focus-visible{background:transparent;color:#004438;outline:none}";
    document.head.appendChild(style);
  }

  function addInsightButton() {
    if (document.querySelector(".insight-link")) return true;
    const articleNo = document.querySelector(".article-no");
    if (!articleNo) return false;

    addInsightStyles();
    const button = document.createElement("a");
    button.className = "insight-link";
    button.href = "insight.html?id=" + encodeURIComponent(id);
    button.textContent = "WINEFUNDAY INSIGHT →";
    articleNo.insertAdjacentElement("afterend", button);
    return true;
  }

  if (!addInsightButton()) {
    const observer = new MutationObserver(() => {
      if (addInsightButton()) observer.disconnect();
    });
    observer.observe(document.body, { childList: true, subtree: true });
  }
})();
