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
