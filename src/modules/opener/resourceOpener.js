//* ╭──────────── Block Start ────────────╮
const openPeopleDesk = () => {
  if (window.location.hostname.includes("app.peopledesk.io")) {
    window.location.href = "https://app.peopledesk.io/dashboard/employee";
  } else {
    window.open("https://app.peopledesk.io/dashboard/employee", "_blank");
  }
};
api.mapkey("orp", "openPeopleDesk", openPeopleDesk);
//* ╰───────────── Block End ─────────────╯

//* ╭──────────── Block Start ────────────╮
const openTeamUnitySheets = () => {
  if (window.location.hostname.includes("docs")) {
    window.location.href =
      "https://docs.google.com/spreadsheets/d/1nGC-g1KKlB4soo28RgKguGwghvV0CCF7h_ahhUzjpFw/edit?gid=568784421#gid=568784421";
  } else {
    window.open(
      "https://docs.google.com/spreadsheets/d/1nGC-g1KKlB4soo28RgKguGwghvV0CCF7h_ahhUzjpFw/edit?gid=568784421#gid=568784421",
      "_blank"
    );
  }
};
api.mapkey("oru", "open Team Unity Sheets", openTeamUnitySheets);
//* ╰───────────── Block End ─────────────╯
