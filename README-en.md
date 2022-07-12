Language | [JP](https://github.com/c-nao27/gmail-draft-generator/blob/master/README.md)

# About
Create the Gmail template as draft from the Spreadsheet📧  
I think it will be useful for creating routine emails.
It can also be used from a smartphone.

# How to Install
1. Doogle Drive -> New -> Other -> create Google App Script
2. Copy [copySheet.gs](https://github.com/c-nao27/DraftGenerator-Gmail/blob/master/copySheet.gs) & paste.
3. Execute script.  
   If authentication or other permissions are requested, grant them each time.  
   This script may be deleted after execution.  
   When the script is executed, [Spreadsheet](https://docs.google.com/spreadsheets/d/11jlhA_Tim8s6njnWUwJet0un1q5nkWzBKan9579I7m4/edit#gid=0)
   and its associated [scripts](https://github.com/c-nao27/DraftGenerator-Gmail/tree/master/createDraft) are duplicated.
4. After Reloading Google Drive and the `DraftGenerator` folder will be created, open `CreateDraft` in it.
5. Click on Toolbar > Extensions -> App Script
6. Sidebar > Triggers -> Add Trigger -> Select function to execute `createdraft` -> Select event type `On change` -> Save
- if you wanna calculate the next business day :  
   After running `listHolidays`, trigger it to run on a monthly basis using the event source `time-driven`, `month-based timer`.


# Usage
- Click the checkbox in cell A11 and set it to `TRUE` to run [Script](https://github.com/c-nao27/gmail-draft-generator/blob/master/createDraft/createDraft.gs) and generate a [Draft](https://mail.google.com/mail/u/0/#drafts) in your logged in Gmail.
- The date can be obtained by writing `TEXT(TODAY(), "yyyy year mm month dd day (ddd)")`. The format can be changed appropriately.
- The next business day can be obtained by writing `TEXT(WORKDAY(TODAY(),1,Holiday!A:A), "mm/dd")` to obtain the next business day excluding weekends and holidays.
- If you wanna add more templates, duplicate the sheet and rewrite it.
