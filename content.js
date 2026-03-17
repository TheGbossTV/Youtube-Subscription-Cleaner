const HIDE_STYLES = `
  /* Target the 2nd and 3rd ytd-rich-section-renderer inside #contents */
  #contents > ytd-rich-section-renderer:nth-of-type(2),
  #contents > ytd-rich-section-renderer:nth-of-type(3) {
    display: none !important;
  }
`;

function injectStyles() {
  if (document.getElementById("yt-sub-cleaner")) return;

  const style = document.createElement("style");
  style.id = "yt-sub-cleaner";
  style.textContent = HIDE_STYLES;
  document.head.appendChild(style);
}

injectStyles();

let lastUrl = location.href;
const observer = new MutationObserver(() => {
  if (location.href !== lastUrl) {
    lastUrl = location.href;
    injectStyles();
  }
});

observer.observe(document.body, { childList: true, subtree: true });
