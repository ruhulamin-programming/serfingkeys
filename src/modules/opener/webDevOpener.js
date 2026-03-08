api.mapkey("ocm", "open mongodb", function () {
  if (window.location.hostname.includes("mongodb")) {
    window.location.href = "https://cloud.mongodb.com";
  } else {
    window.open("https://cloud.mongodb.com", "_blank");
  }
});

api.mapkey("ocn", "open nextjs Docs", function () {
  if (window.location.hostname.includes("nextjs.org")) {
    window.location.href = "https://nextjs.org/docs";
  } else {
    window.open("https://nextjs.org/docs", "_blank");
  }
});
