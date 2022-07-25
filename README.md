# About
スプレッドシートからGmailの下書きを生成します📧  
毎日の定型的なメールの作成に使えると思います。日報とか  
使用時はセルの操作のみなので、スマホからも使用できます。  


# How to Install
1. ダウンロード用のスクリプト [Download.gs](https://script.google.com/d/15bk8jepCjzUYt5kU0sisspmS258Ctk_vLB1Gmv_xW1BHvqdRb-XiF0NW/edit?usp=sharing) を実行  
   権限などを求められたら都度許可してください。  
   Spreadsheet [CreateDraft](https://docs.google.com/spreadsheets/d/11jlhA_Tim8s6njnWUwJet0un1q5nkWzBKan9579I7m4/edit#gid=0)
   とそれに紐付いたスクリプト [CreateDraft.gs](https://github.com/c-nao27/gmail-draft-generator/blob/master/DraftGenerator/CreateDraft.gs), [ListHoliday.gs](https://github.com/c-nao27/gmail-draft-generator/blob/master/DraftGenerator/ListHoliday.gs) が複製されます。  
2. DraftGenerator フォルダの中の CreateDraft ファイルを開く。  
3. ツールバー > 拡張機能 -> App Script をクリック
4. サイドバー > トリガー -> トリガーを追加
5. 実行する関数を選択：`createDraft` ->  
   イベントの種類を選択：`変更時` -> 保存


# Usage
- 下書き生成(セルA11)にチェックして`TRUE`にすると`createDraft()`メソッドが実行され、  
  ログイン中のGmailに[下書き](https://mail.google.com/mail/u/0/#drafts)が生成されます。
  
- 日付は`TEXT(TODAY(),"yyyy-mm-dd")`と書くと取得できます。  
  フォーマットは適当に変えてください。
  
- **テンプレートを増やしたくなった時は、シートを複製して書き換えてください。**

### 翌営業日の計算をしたい場合
1. `listHolidays`を実行
2. listHolidays関数が月単位で実行されるようにトリガーを設定してください。  
(例) 実行する関数：`listHolidays`  
-> イベントのソース：`時間主導型`  
-> 時間ベースのトリガー：`月ベースのタイマー`  
-> 日、時刻：適当な日時 -> 保存

- `TEXT(WORKDAY(TODAY(),1,Holiday!A:A),"mm/dd（ddd）")`と書くと、土日祝日を除いた翌営業日が取得できます。

### 自動で実行したい場合
1. createDraft関数が日単位や月単位で実行されるように追加でトリガーを設定してください。  
(例) 実行する関数：`createDraft`  
-> イベントのソース：`時間主導型`  
-> 時間ベースのトリガー：`日付ベースのタイマー`  
-> 時刻：適当な時間 -> 保存

- 自動生成(セルA15)にチェックして`TRUE`にすると、初回だけ即実行された後、定期的に実行されるようになります。  
  無効化したい場合はチェックを外すか、トリガーを削除する。


### 使用ライブラリ
- [Duplicate](https://github.com/c-nao27/gas-duplicate)
