//* ╭──────────── Block Start ────────────╮
api.mapkey("ocm", "open mongodb", function () {
  if (window.location.hostname.includes("mongodb")) {
    window.location.href = "https://cloud.mongodb.com";
  } else {
    window.open("https://cloud.mongodb.com", "_blank");
  }
});
//* ╰───────────── Block End ─────────────╯

//* ╭──────────── Block Start ────────────╮
api.mapkey("ocn", "open nextjs Docs", function () {
  if (window.location.hostname.includes("nextjs.org")) {
    window.location.href = "https://nextjs.org/docs";
  } else {
    window.open("https://nextjs.org/docs", "_blank");
  }
});
//* ╰───────────── Block End ─────────────╯

//* ╭──────────── Block Start ────────────╮
api.mapkey("ocf", "Fiverr Message Rewriter", function () {
  if (window.location.hostname.includes("relevance-phi.vercel.app")) {
    window.location.href = "https://relevance-phi.vercel.app/";
  } else {
    window.open("https://relevance-phi.vercel.app/", "_blank");
  }
});
//* ╰───────────── Block End ─────────────╯
