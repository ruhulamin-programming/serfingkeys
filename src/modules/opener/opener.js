//* opening youtube
api.mapkey("ay", "youtube opening", function () {
  window.open("https://www.youtube.com/", "_blank");
});

api.mapkey("ot", "open google translate", function () {
  if (window.location.hostname.includes("translate.google")) {
    window.location.href =
      "https://translate.google.com/?sl=en&tl=bn&op=translate";
  } else {
    window.open(
      "https://translate.google.com/?sl=en&tl=bn&op=translate",
      "_blank",
    );
  }
});
