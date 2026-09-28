# The Golden Steps

zako desu.

## 仕組み

- Jekyll + [Chirpy](https://github.com/cotes2020/jekyll-theme-chirpy) テーマ（gem 版）で作っているブログ
- `main` ブランチ … 記事や設定などのソース。編集するのはこちら
- `gh-pages` ブランチ … ビルド結果（HTML）。GitHub Actions が毎回上書きするので手で編集しない
- `main` に push すると `.github/workflows/pages-deploy.yml` がビルド・チェックして `gh-pages` に反映し、
  <https://trasque.github.io> で公開される（Settings > Pages は「Deploy from a branch: gh-pages」）

## 記事の追加

`_posts/YYYY/MM/YYYY-MM-DD-YYMMDDNN.md` を作る（`NN` はその日の連番）。
URL は `/posts/YYMMDDNN/` になる。

```yaml
---
title: 記事タイトル
date: 2026-09-28 20:00
categories: [Blog, Diary]
tags: [Diary]
---
```

画像は `assets/img/YYYY/MM/` に置き、本文から `![説明](/assets/img/YYYY/MM/ファイル名.png)` で参照する。

## ローカルでビルドする場合

```console
bundle install
JEKYLL_ENV=production bundle exec jekyll b -d _site
bundle exec htmlproofer _site --disable-external
```

## テーマの更新

`Gemfile` の `jekyll-theme-chirpy` のバージョンを上げる。設定ファイルの変更点は
[chirpy-starter](https://github.com/cotes2020/chirpy-starter) と見比べて取り込む。
