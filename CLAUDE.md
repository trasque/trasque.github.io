# CLAUDE.md

ブログ「The Golden Steps」（<https://trasque.github.io>）のソースリポジトリ。
構成（`main` がソース、`gh-pages` は Actions が生成する公開用）は README.md を参照。

## 作業ルール

- 作業ブランチは `main`。`gh-pages` は手で編集しない。
- `main` への push はそのままサイトの公開になるので、push の前に必ずユーザーに確認する。
- push 後は GitHub Actions（Build and Deploy → pages build and deployment）の結果を確認して報告する。
- 返答は日本語で。

## 記事を公開するときの流れ

1. 本文を一緒に練る。この段階ではメタ情報を気にしなくてよい。
2. 本文が固まったら、公開する前に下の「メタ情報」を**必ずユーザーに質問する**。
   既存の値の一覧を見せて、本文に合いそうな候補を提案したうえで選んでもらう。
3. 決まった内容でファイルパスと front matter を提示し、了承を得てから commit・push する。

## メタ情報（front matter）

毎回聞くもの：

| 項目 | 説明 |
|---|---|
| `title` | 記事タイトル |
| `date` | 公開日時（`YYYY-MM-DD HH:MM`、日本時間）。未来の日時だと公開されないので注意 |
| `categories` | `[大分類, 小分類]` の 2 段階。既存から選ぶか新しく作る |
| `tags` | 複数可。既存の表記（大文字・小文字）に揃える |

必要なら聞くもの（「ほかに設定しますか？」とまとめて一度だけ聞く）：

| 項目 | 説明 |
|---|---|
| `image` | 記事の見出し画像。`image:` の下に `path:`（と必要なら `alt:`）を書く |
| `description` | 検索結果や SNS に出る要約。省略すると本文の冒頭が使われる |
| `pin: true` | トップページの先頭に固定する |

### これまで使っている値（2026-09 時点）

カテゴリー：

- `[Blog, Diary]` … 日記・雑記
- `[VRChat, School]` … VRC学園の記録
- `[Certification, IPA-AP]` … 資格（応用情報）
- `[Work, Writer]` … 仕事の実績

タグ：`Diary`, `VRChat`, `School`, `IPA-AP`, `Study`, `Security`, `Quest3`, `Money`, `Win11`,
`jekyll`, `github_pages`, `github_actions`, `ssg`, `chirpy`, `gadget`,
`work`, `writer`, `reporter`, `game`, `gamespark`, `interview`, `review`, `column`

最新の一覧は `_posts` の front matter を集計して確認すること。

## ファイルの置き場所

- 記事：`_posts/YYYY/MM/YYYY-MM-DD-YYMMDDNN.md`（`NN` はその日の連番 `01`, `02` …）。URL は `/posts/YYMMDDNN/`
- 画像：`assets/img/YYYY/MM/` に置き、本文から `![説明](/assets/img/YYYY/MM/ファイル名.png)` で参照

```yaml
---
title: 記事タイトル
date: 2026-09-28 20:00
categories: [Blog, Diary]
tags: [Diary]
---
```

## ビルドの確認

push 前にローカルでビルドとリンクチェックを通す。日本語を扱うので UTF-8 ロケールが必要。

```console
export LANG=C.UTF-8
bundle install
JEKYLL_ENV=production bundle exec jekyll b -d _site
bundle exec htmlproofer _site --disable-external
```
