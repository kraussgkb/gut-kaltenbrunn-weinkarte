// WINEFUNDAY_ORDER_V1 — permanent direct ordering on wine detail pages.
(() => {
  const wineId = new URLSearchParams(location.search).get("id");
  if (!wineId) return;

  const style = document.createElement("style");
  style.id = "winefunday-order-style";
  style.textContent = `
    body.winefunday-order-active { padding-bottom: 88px; }
    .winefunday-order-dock { position: fixed; left: 0; right: 0; bottom: 0; z-index: 100; background: rgba(249,246,243,.97); border-top: 1px solid #c8d2ce; box-shadow: 0 -10px 30px rgba(31,59,45,.13); padding: 12px max(16px,env(safe-area-inset-right)) calc(12px + env(safe-area-inset-bottom)) max(16px,env(safe-area-inset-left)); backdrop-filter: blur(12px); }
    .winefunday-order-inner { width: min(900px,100%); margin: auto; display: flex; align-items: center; justify-content: center; }
    .winefunday-order-button { width: min(420px,92vw); display: inline-flex; align-items: center; justify-content: center; min-height: 52px; padding: 14px 24px; border-radius: 14px; background: #004438; color: #fff; text-decoration: none; font-weight: 800; box-shadow: 0 5px 14px rgba(0,68,56,.22); }
    .winefunday-order-button:hover { background: #005b4b; }
    .winefunday-order-button:focus-visible { outline: 3px solid #c28a2c; outline-offset: 3px; }
    @media (max-width:580px) { body.winefunday-order-active { padding-bottom: 84px; } .winefunday-order-dock { padding-top: 10px; } .winefunday-order-button { min-height: 50px; padding: 12px 17px; border-radius: 13px; font-size: 14px; } }
  `;
  document.head.appendChild(style);

  const mount = () => {
    if (document.querySelector(".winefunday-order-dock")) return true;
    const title = document.querySelector(".detail-summary h1");
    if (!title) return false;

    const dock = document.createElement("div");
    const inner = document.createElement("div");
    const button = document.createElement("a");

    dock.className = "winefunday-order-dock";
    dock.setAttribute("role", "region");
    dock.setAttribute("aria-label", "Wein direkt bestellen");
    inner.className = "winefunday-order-inner";
    button.className = "winefunday-order-button";
    button.textContent = "Jetzt direkt bestellen";
    button.href = "https://winefunday-drucktest.dominik511618.chatgpt.site/bestellen?wein=" + encodeURIComponent(wineId);
    inner.append(button);
    dock.append(inner);
    document.body.appendChild(dock);
    document.body.classList.add("winefunday-order-active");
    return true;
  };

  const observer = new MutationObserver(() => {
    if (mount()) observer.disconnect();
  });
  observer.observe(document.documentElement, { childList: true, subtree: true });
  mount();
})();
