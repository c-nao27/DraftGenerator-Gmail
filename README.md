Language | [EN](https://github.com/c-nao27/gmail-draft-generator/blob/master/README-en.md)


# About
スプレッドシートからGmailの下書きを生成します📧  
毎日の定型的なメールの作成に使えると思います。日報とか  
使用時はセルの操作のみなので、スマホからも使用できます。


# How to Install
1. Google Drive -> 新規 -> その他-> Google Apps Script を作成
2. [download.gs](https://raw.githubusercontent.com/c-nao27/gmail-draft-generator/master/download.gs) をコピーして全文ペースト  
3. 実行  
   [Spreadsheet](https://docs.google.com/spreadsheets/d/11jlhA_Tim8s6njnWUwJet0un1q5nkWzBKan9579I7m4/edit#gid=0)
   とそれに紐付いた [スクリプト](https://github.com/c-nao27/DraftGenerator-Gmail/tree/master/createDraft) が複製されます。  
   以降、権限などを求められたら都度許可してください。  
   実行が完了したらこのスクリプトは削除してOKです。  
4. Google Drive を開くと`CreateDraft`フォルダが生成されているので、中の`CreateDraft`ファイルを開く。  
5. ツールバー > 拡張機能 -> App Script をクリック
6. サイドバー > トリガー -> トリガーを追加 -> 実行する関数を選択 `createdraft` -> イベントの種類を選択 `変更時` -> 保存
 - 翌営業日の計算をしたい場合、`listHolidays`を実行後、イベントのソース`時間主導型`, `月ベースのタイマー`で月単位で実行されるようにトリガーを設定してください。


# Usage
- セルA11のチェックボックスをクリックして`TRUE`にすると[スクリプト](https://github.com/c-nao27/gmail-draft-generator/blob/master/createDraft/createDraft.gs)が実行され、ログイン中のGmailに[下書き](https://mail.google.com/mail/u/0/#drafts)が生成されます。

- 日付は`TEXT(TODAY(),"yyyy-mm-dd")`と書くと取得できます。  
   フォーマットは適当に変えてください。
- 翌営業日は`TEXT(WORKDAY(TODAY(),1,Holiday!A:A),"mm/dd（ddd）")`と書くと、土日祝日を除いた翌営業日が取得できます。
- テンプレートを増やしたくなった時は、シートを複製して書き換えてください。
