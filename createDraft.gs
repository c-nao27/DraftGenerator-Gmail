function createDraft() {
	const ss = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
	if(ss.getRange(11,1).getValues() == "false"){
		console.log("Changes other than execution");
		return;
	}

	ss.getRange(12,1).setValue("Executing…");
	// Cell B1 -> (1,2) -> [0][1]
	const values = ss.getDataRange().getValues();
	const recipient = values[0][1];
	const options = {cc:values[1][1], bcc:values[2][1]};
	const subject = values[3][1];
	let body = "";

	// Loop for lines of body
	for (let i = 4; i < ss.getLastRow(); i++){
		body += (values[i][1] != "") ? values[i][1] : "";
		body += "\n";
	}
	body += "\n\n\n";

	console.log("recipient:" + recipient);
	console.log("options:" + options);
	console.log("subject:" + subject);
	console.log("body:\n" + body);

	GmailApp.createDraft(recipient, subject, body, options);
	ss.getRange(11,1).setValue("false");
	ss.getRange(12,1).setValue("Executable");
}
