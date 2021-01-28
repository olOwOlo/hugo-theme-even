$(document).ready(function () {
  Even.backToTop();
  Even.mobileNavbar();
  Even.toc();
  Even.fancybox();
});

Even.responsiveTable();
Even.flowchart();
Even.sequence();
Even.mermaid();

if (window.hljs) {
  hljs.initHighlighting();
  Even.highlight();
} else {
  Even.chroma();
}

