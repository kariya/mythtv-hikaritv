mythtv-hikaritv
===============

# supporting tools of mythtv for hikaritv subscribers / ひかりTV契約者向けMythTVサポートツール

## Requirements / 必要なもの
1. Java6 JRE
2. MythTV (if you just like to try generating xmltv files, mythtv is not required. / 単にXMLTVファイル生成をしてみたいだけなら必須ではありません)

## Basic Usage (Generating XMLTV files) / 基本的な使い方(XMLTVファイルの作成）
1. Clone the repo as follows: / 次のようにしてリポジトリを複製します。
	git clone https://github.com/kariya/mythtv-hikaritv.git
2. Confirm the requirements. / 必要な物が揃っているか確かめます。
3. Type the following command / 次のコマンドを打ってください
	make xmltv
4. Now you've got your own xmltv file / これであなた自身のXMLTVファイルができたはずです
   How to use this? See the next chapter. / 使い方は次章を見てください。


## Advanced Usage (with mythtv) / 進んだ使い方（MythTV編）
1. If you'd like to deploy the xmltv file to mythtv, / XMLTVファイルをMythTVに取り込みたいなら
	make -n deploy-mythtv
	(remove -n option at your own risk AFTER you modified Makefile file / -nオプションをはずすのはMakefileを編集してからにしてください）
2. If you want to do schedule recordings, / 予約録画がしたいなら、
	make record-pendings
	This includes programs pending in 1-25 hours / これは１～２５時間後の番組を含みます。


## Acknowledgements / 謝辞
I thank to the following userful program and so on ver much. / 以下の有用なプログラム・情報に深く感謝します。
* Rhino
* Env.js
* JQuery
* jquery.form
* perl related stuff
* wikipedia


