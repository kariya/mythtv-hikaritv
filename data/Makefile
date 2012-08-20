APL = ../bin/a.pl

.PHONY: all clean

all: seiyuu.js haiyuu.js kishi.js kantoku.js

clean:
	rm seiyuu.txt
	rm haiyuu.txt
	rm seiyuu.js
	rm haiyuu.js

jawiki-latest-pages-articles.xml.bz2:
	wget http://dumps.wikimedia.org/jawiki/latest/jawiki-latest-pages-articles.xml.bz2

all-name.txt: jawiki-latest-pages-articles.xml.bz2 ext-wpj-person.pl
	bzcat jawiki-latest-pages-articles.xml.bz2 | perl ext-wpj-person.pl > all-name.txt

seiyuu.txt: all-name.txt
	grep '^声優:' all-name.txt | sed 's/^[^:]*://' > seiyuu.txt

haiyuu.txt: all-name.txt
	grep '^俳優:' all-name.txt | sed 's/^[^:]*://' > haiyuu.txt

kishi.txt: all-name.txt
	grep '^棋士:' all-name.txt | sed 's/^[^:]*://' > kishi.txt

kantoku.txt: all-name.txt
	grep '^監督:' all-name.txt | sed 's/^[^:]*://' > kantoku.txt

seiyuu.js: seiyuu.txt
	echo "importPackage(java.util.regex);" > seiyuu.js
	echo -n "var re_seiyuu = java.util.regex.Pattern.compile(\"" >> seiyuu.js
	cat seiyuu.txt | perl APL >> seiyuu.js
	echo "\");" >> seiyuu.js

haiyuu.js: haiyuu.txt
	echo "importPackage(java.util.regex);" > haiyuu.js
	echo -n "var re_haiyuu = java.util.regex.Pattern.compile(\"" >> haiyuu.js
	cat haiyuu.txt | perl APL >> haiyuu.js
	echo "\");" >> haiyuu.js

kishi.js: kishi.txt
	echo "importPackage(java.util.regex);" > kishi.js
	echo -n "var re_kishi = java.util.regex.Pattern.compile(\"" >> kishi.js
	cat kishi.txt | perl APL >> kishi.js
	echo "\");" >> kishi.js

kantoku.js: kantoku.txt
	echo "importPackage(java.util.regex);" > kantoku.js
	echo -n "var re_kantoku = java.util.regex.Pattern.compile(\"" >> kantoku.js
	cat kantoku.txt | perl APL >> kantoku.js
	echo "\");" >> kantoku.js

