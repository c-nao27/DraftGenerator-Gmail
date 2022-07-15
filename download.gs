function download() {
  const fileId = "11jlhA_Tim8s6njnWUwJet0un1q5nkWzBKan9579I7m4";
  const fileName = "CreateDraft";
  const folderName = "DraftGenerator";
  
  try {
    const folder = getFolder(null, folderName);
    const file = getFile(folder, fileId, fileName);
    console.log("Downloaded : " + file);
    
  } catch (e) {
    console.error(e.message);
  }
}

/**
 *  Create new folder or Get folder.
 * 
 *  @param {DriveApp.Folder} parent parent folder / null -> root
 *  @param {string} folderName folder name
 *  @return {DriveApp.Folder} got / created folder
 */
function getFolder(parent, folderName) {
  if (parent == null){
    parent = DriveApp.getRootFolder();
  }

  let folders = parent.getFoldersByName(folderName);
  if (folders.hasNext()) {
    var folder = folders.next();
    console.log("Already exists folder : " + folder);

  } else {
    var folder = parent.createFolder(folderName);
    console.log("Create folder : " + folder);
  }
  return folder;
}

/**
 * Get file to copy.
 * 
 * @param {DriveApp.Folder} folder Folder to create files
 * @param {string} fileId File ID to create
 * @param {string} fileName File name to create
 * @return {DriveApp.File} Created file
 */
function getFile(folder, fileId, fileName) {
  const reg = new RegExp(`^${fileName}.*`);
  const files = folder.getFiles();

  let i = 0;
  while (files.hasNext()) {
    if (reg.test(files.next().getName())) {
      i++;
    }
  }

  if (i == 0) {
    var file = DriveApp.getFileById(fileId).makeCopy(fileName, folder);

  } else {
    console.log("Duplicate file name : " + fileName);
    var file = DriveApp.getFileById(fileId).makeCopy(fileName + i, folder);
  }
  return file;
}
