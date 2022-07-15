function createDraft() {
  // Cell 1B == range(1,2) == values[0][1]

  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const checkBox = sheet.getRange(11,1);
  const status = sheet.getRange(12,1);
  const errMsg = sheet.getRange(13,1);

  if (checkBox.getValues() == "false") {
    console.log("実行以外の変更");
    status.setValue("実行可能");
    errMsg.setValue("");
    SpreadsheetApp.flush();
    return;
  }
  status.setValue("実行中…");
  const values = sheet.getDataRange().getValues();
  const recipient = values[0][1];
  const options = {cc:values[1][1], bcc:values[2][1]};
  const subject = values[3][1];
  let body = "";

  // Loop for lines of body
  for (let i = 4; i < sheet.getLastRow(); i++) {
    body += (values[i][1] != "") ? values[i][1] : "";
    body += "\n";
    status.setValue("実行中…B" + (i+1));
  }
  body += "\n\n\n";

  console.log("recipient:" + recipient);
  console.log("options:" + options);
  console.log("subject:" + subject);
  console.log("body:\n" + body);

  try {
    GmailApp.createDraft(recipient, subject, body, options);
    status.setValue("実行可能");
  } catch (e) {
    console.error(e.message);
    errMsg.setValue(e.message);
    status.setValue("実行不可");
  } finally {
    checkBox.setValue("false");
    SpreadsheetApp.flush();
  }
}
