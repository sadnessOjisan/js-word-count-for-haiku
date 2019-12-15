# js-word-count-for-haiku

俳句用に字数をカウントする関数

これは [クソアプリ Advent Calendar 2019](https://qiita.com/advent-calendar/2019/kuso-app)の 19 日目の記事である、[ビルド時に俳句を読めるプラグイン](https://qiita.com/sadnessOjisan/98619eaaef1da8d6545a) のために開発されたものです。

## 導入

```zsh
$ yarn add js-word-count-for-haiku
```

```js
const countWord = require("js-word-count-for-haiku").default;
const c = countWord("コンソール");
console.log(c); // => 5
```

## 開発

モジュールインストール

```zsh
$ yarn install
```

テスト

```zsh
$ yarn run testt
```

本番用ビルド

```
$ yarn run build:pr
```

公開前にドライラン

```zsh
$ tar -tf $(npm pack)
```

npm に公開

```zsh
$ npm publish
```
