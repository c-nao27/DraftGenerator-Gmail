Language | [EN](https://github.com/c-nao27/gmail-draft-generator/blob/master/README-en)


# About
スプレッドシートからGmailの下書きを生成します！📧  
日報など毎日の定型的なメールの作成に使えると思います。  
スマホからの使用にも対応しています。


# How to Install
1. Doogle Drive -> 新規 -> その他-> Google Apps Script を作成
2. [copySheet.gs](https://github.com/c-nao27/DraftGenerator-Gmail/blob/master/copySheet.gs) をコピペ  
3. 実行(権限などを求められたら都度OKしてください)  
   [Spreadsheet](https://docs.google.com/spreadsheets/d/11jlhA_Tim8s6njnWUwJet0un1q5nkWzBKan9579I7m4/edit#gid=0)
   とそれに紐付いた [スクリプト](https://github.com/c-nao27/DraftGenerator-Gmail/tree/master/createDraft) が複製されます。
4. Google Drive に "DraftGenerator" フォルダが生成されているので、中の "CreateDraft" を開く。  
5. ツールバー > 拡張機能 -> App Script をクリック
6. サイドバー > トリガー -> トリガーを追加 -> 実行する関数を選択 "createdraft" -> イベントの種類を選択 "変更時" -> 保存
 - 翌営業日の計算をしたい場合、"listHolidays" を実行後、時間主導型で毎月実行されるようにトリガーを設定してください。


# Usage
- セルA11のチェックボックスをTRUEにすると[スクリプト](https://github.com/c-nao27/gmail-draft-generator/blob/master/createDraft/createDraft.gs)が実行され、ログイン中のGmailに下書きが生成されます。
- 日付は `TEXT(TODAY(),"yyyy-mm-dd")` 等と書くと毎日更新されます。
- 曜日も含めた翌営業日は `TEXT(WORKDAY(TODAY(),1,Holiday!A:A),"mm/dd（ddd）")` 等と書くことで、土日祝日を除いた翌営業日が取得できます。


