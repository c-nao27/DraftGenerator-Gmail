function download() {
  const fileId = "11jlhA_Tim8s6njnWUwJet0un1q5nkWzBKan9579I7m4";
  const fileName = "CreateDraft";
  const folderName = "DraftGenerator";
  
  try {
    const folder = Duplicate.createFolder(null, folderName);
    const file = Duplicate.duplicateFile(folder, fileId, fileName);
    console.log("Downloaded : " + file);

  } catch (e) {
    console.error(e.message);
  }
}
