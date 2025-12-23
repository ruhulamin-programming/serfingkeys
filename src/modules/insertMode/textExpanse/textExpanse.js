const { imapkey } = api;

function textPaster(keys, desc, text) {
  imapkey(keys, desc, function () {
    document.execCommand("insertText", false, text);
  });
}

// insert fullname
textPaster(",nn", "Insert Fullname: Ruhul Amin", "Ruhul Amin");

// insert firstname:
textPaster(",nf", "Insert Firstname: Ruhul", "Ruhul ");

// insert root mail
textPaster(",er", "insert root mail ruhulamin...", "ruhulamin.et15@gmail.com");

textPaster(",ed", "insert mail dev.shah...", "ruhulamin.cse56@gmail.com");
textPaster(
  ",ej",
  "insert mail javedkarim.codes...",
  "javedkarim.codes@gmail.com"
);

//w: (start)╭──────────── insert backend mail ────────────╮
textPaster(
  ",eb",
  "Insert Backend Mail: ruhulamin.et15@gmail.com",
  "ruhulamin.et15@gmail.com"
);
//w: (end)  ╰──────────── insert backend mail ────────────╯
