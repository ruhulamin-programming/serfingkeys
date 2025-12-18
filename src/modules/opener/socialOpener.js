//* ╭──────────── Block Start ────────────╮
api.mapkey("ouf", "Open Facebook", function () {
  window.open("https://www.facebook.com", "_blank");
});
//* ╰───────────── Block End ─────────────╯

//* ╭──────────── Block Start ────────────╮
api.mapkey("oue", "email inbox opening", function () {
  window.open("https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox", "_blank");
});
//* ╰───────────── Block End ─────────────╯

//* ╭──────────── Block Start ────────────╮
api.mapkey("ouw", "whatsApp", function () {
  window.open("https://web.whatsapp.com/", "_blank");
});
//* ╰───────────── Block End ─────────────╯

//* ╭──────────── Block Start ────────────╮
api.mapkey("oul", "open linkedin", function () {
  if (window.location.hostname.includes("linkedin")) {
    window.location.href = "https://www.linkedin.com/in/ruhulamin-programming/";
  } else {
    window.open("https://www.linkedin.com/in/ruhulamin-programming/", "_blank");
  }
});
//* ╰───────────── Block End ─────────────╯

//* ╭──────────── Block Start ────────────╮
api.mapkey("out", "open ms team live", function () {
  if (window.location.hostname.includes("teams.live.com")) {
    window.location.href = "https://teams.live.com/v2/";
  } else {
    window.open("https://teams.live.com/v2/", "_blank");
  }
});
//* ╰───────────── Block End ─────────────╯
