[EN](https://github.com/c-nao27/gmail-draft-generator/blob/master/README-en)

# About
スプレッドシートからGmailの下書きを生成します！📧  
日報など毎日の定型的なメールの作成に使えると思います。

# How to Install
1. Doogle Drive -> 新規 -> その他-> Google Apps Script を作成
2. [copySheet.gs](https://github.com/c-nao27/DraftGenerator-Gmail/blob/master/copySheet.gs) をコピペ  
3. 実行(権限などを求められたら都度OKしてください)  
   [Spreadsheet](https://docs.google.com/spreadsheets/d/11jlhA_Tim8s6njnWUwJet0un1q5nkWzBKan9579I7m4/edit#gid=0)
   とそれに紐付いた [scripts](https://github.com/c-nao27/DraftGenerator-Gmail/tree/master/createDraft) が複製されます。
4. Google Drive に "DraftGenerator" フォルダが生成されているので、中の "CreateDraft" を開く。  
5. ツールバー 拡張機能 -> App Script をクリック(edit...)  
   Set trigger "Select function to execute" -> "createDraft"  
               "Select event type" -> "when changed"  
6. 翌営業日の計算をしたい場合 "listHoliday.gs"  
   -> Save.
7. (edit...)

# 
