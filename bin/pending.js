load('./record.js');

importPackage(org.jmythapi.protocol);
importPackage(org.jmythapi.protocol.response);
importPackage(java.util);

var backend = org.jmythapi.protocol.BackendFactory.createBackend("localhost");
backend.connect();
backend.annotateMonitor();

var pending = backend.queryAllPending();
for (var it = pending.iterator(); it.hasNext(); ) {
	var p = it.next();	
	if (!p.getRecordingStatus().hasStatus(IProgramRecordingStatus.Status.WILL_RECORD)) continue;
	if (p.getSourceID() != 3) continue;
	var d = p.getStartDateTime().getTime() - new Date().getTime();
	if (d > 25 * 60 * 60 * 1000 || d < 60 * 60 * 1000) continue;
	var crid = p.getDescription().replaceAll("^.*\\[(.*)\\]$", "$1");
	print(crid);
	record(String(crid));
//break;
}

backend.close();

