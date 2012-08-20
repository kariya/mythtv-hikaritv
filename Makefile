subdirs := data

.PHONY: all $(subdirs) xmltv

all: $(subdirs)

$(subdirs):
	$(MAKE) -C $@

xmltv:
	cd bin; time ./run.sh xmltv.js ../x.xml

record-pendings:
	time bin/run.sh -opt -1 bin/pending.js

deploy-mythtv:
	mythfilldatabase --file 3 ./x.xml

