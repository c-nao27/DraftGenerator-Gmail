function copySheet() {
  DriveApp.getFileById("11jlhA_Tim8s6njnWUwJet0un1q5nkWzBKan9579I7m4").makeCopy("CreateDraft", DriveApp.createFolder("CreateDraft"));
  console.log("copy completed!");
}
