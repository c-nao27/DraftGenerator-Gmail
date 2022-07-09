function copySheet() {
  const ss = DriveApp.getFileById("11jlhA_Tim8s6njnWUwJet0un1q5nkWzBKan9579I7m4");
  const folder = DriveApp.createFolder("CreateDraft");
  ss.makeCopy("CreateDraft",folder);
  console.log("copied : " + ss);
}
