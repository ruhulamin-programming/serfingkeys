//w: ╭──────────── Block Start ────────────╮
const openImgbb = () => {
  if (
    window.location.hostname.includes("imgbb") ||
    window.location.hostname.includes("ibb")
  ) {
    window.location.href = "https://md-shahjalal.imgbb.com/";
  } else {
    window.open("https://md-shahjalal.imgbb.com/", "_blank");
  }
};
api.mapkey("ori", "open imgbb Resource", openImgbb);

//w: ╰───────────── Block End ─────────────╯

//w: ╭──────────── Block Start ────────────╮
const openPeopleDesk = () => {
  if (window.location.hostname.includes("app.peopledesk.io")) {
    window.location.href = "https://app.peopledesk.io/dashboard/employee";
  } else {
    window.open("https://app.peopledesk.io/dashboard/employee", "_blank");
  }
};
api.mapkey("orp", "openPeopleDesk", openPeopleDesk);
//w: ╰───────────── Block End ─────────────╯
//

//w: ╭──────────── Block Start ────────────╮
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
//w: ╰───────────── Block End ─────────────╯
