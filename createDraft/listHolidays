function listHolidays() {
  // From 1/1 of this year
  const startDate = new Date();
  startDate.setMonth(0, 1);
  startDate.setHours(0, 0, 0, 0);

  // Until 12/31 next year
  let endDate = new Date();
  endDate.setFullYear(endDate.getFullYear() + 1, 11, 31);
  endDate.setHours(0, 0, 0, 0);  

  const sheet = getHolidaySheet();
  const holidays = getHolidays(startDate, endDate);

  const lastRow = sheet.getLastRow();
  let startRow = 1;

  // If the sheet is not blank,
  // find the column position matching the first date in the got holiday array
  if (lastRow > 1) {
    const values = sheet.getRange(1, 1, lastRow, 1).getValues();
    for(let i = 0; i < lastRow; i++) {
      if(values[i][0].getTime() == holidays[0][0].getTime()) {
        break;
      }
      startRow++;
    }
  }

  // Set values for the list of holidays
  sheet.getRange(startRow, 1, holidays.length, holidays[0].length).setValues(holidays);
}

// Get a sheet with a list of holidays
function getHolidaySheet(){
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheetName = "Holiday";

  let sheet = ss.getSheetByName(sheetName);

  if(sheet == null) {
    sheet = ss.insertSheet(sheetName);
  }

  return sheet;
}

// Get values from Japanese Holidays in Google Calendar.
// Make changes as needed.
function getHolidays(startDate, endDate) {
  const cal = CalendarApp.getCalendarById("ja.japanese#holiday@group.v.calendar.google.com");

  const holidays = cal.getEvents(startDate, endDate);
  let values = [];

  for(let i = 0; i < holidays.length; i++) {
    values[i] = [holidays[i].getStartTime(), holidays[i].getTitle()];
  }

  return values;
}
