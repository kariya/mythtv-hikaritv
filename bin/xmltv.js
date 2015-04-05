load('../data/seiyuu.js');
load('../data/haiyuu.js');
load('../data/kishi.js');
load('../data/kantoku.js');

importPackage(java.lang);
importPackage(java.io);
importPackage(org.jsoup);

//var stdin = new BufferedReader(new InputStreamReader(java.lang.System['in']));
//var stdout = new OutputStreamWriter(java.lang.System.out);

function escapeHTML(text)
{
	text = text.split('&quot;').join('"');
	text = text.split('&amp;').join('&');
	text = text.split('&#39;').join('\\');
	text = text.split('&lt;').join('<');
	text = text.split('&gt;').join('>');

	text = text.split('"').join('&quot;');
	text = text.split('&').join('&amp;');
	text = text.split('\\').join('&#39;');
	text = text.split('<').join('&lt;');
	text = text.split('>').join('&gt;');
    return text;
}

function getURL(job) {
	var href = org.jsoup.Jsoup.parse(job).select('a').first().attr('href');
	return 'http://www.hikaritv.net' + href.substring(href.indexOf('/'));
}

function getCrid(job) {
	var href = org.jsoup.Jsoup.parse(job).select('a').first().attr('href');
	return href.replaceAll("^.*crid%3D", '').replaceAll("\.html", '');
}
function make_prog_url(title) {
	var url = 'http://www.hikaritv.net/search/tv/request/tv_program.frm?genreId=&word=' 
		+ java.net.URLEncoder.encode(title.trim(), "Windows-31J")
		+ '&searchType=title&x=0&y=0&timeMorning=0&timeDay=0&timeEvening=0&hv=0&parental=17&ispId=001&range=20&sort=PERIOD_START_AVAILABILITY_ASC&matchType=pm';
	return url;
}

function getXMLElem(job, ch) {
	var url = getURL(job);
	var d = org.jsoup.Jsoup.connect(url).timeout(2 * 60 * 1000).get();
	var crid = getCrid(job);

	var title = String(d.select('.h2C02 h2:eq(0)').text().toString().replaceAll("...$", '').trim());
	var time = d.select('.mainBox_left > p:eq(6) > strong').text();
	var channel = d.select('.mainBox_rightin > p:eq(1)').text().replaceAll("^[^0-9]*", '').replaceAll("[^0-9]*$", '');
	var category = d.select('.mainBox_left>p:eq(4)>a').text();
	var description = d.select('.mainBox_left > p:eq(1)').text(); //.replace(",", "，");
	var gcode = '';
	var priority = 0 | (1 << 28);
	var reserve = '';

	if (channel.toString() == '') return '';
	
	// 2012年02月24日（金）　04:00〜04:30
	var year = time.substring(0, 4);
	var month = time.substring(5, 7);
	var day = time.substring(8, 10);
	var startHHMM00 = time.substring(15, 20).replaceAll(':', '') +  '00';
	var endHHMM00 = time.substring(21, 26).replaceAll(':', '') +  '00';

	var start = year + month + day + startHHMM00 + ' +0900';
	if (endHHMM00.match(/^00..../)) {
		var nextDate = new Date(year + "/" + month + "/" + (parseInt(day) + 1, 10));
		year = nextDate.getYear();
		if (year < 2000) year += 1900;
		month = nextDate.getMonth() + 1;
		if (month < 10) month = "0" + month;
		day = nextDate.getDate();
		if (day < 10) day = "0" + day;
	}
	var stop = year + month + day + endHHMM00 + ' +0900';

	var previously_show = false;
	if (title.match(/[[［【(]再[\]］】)]/)) {
		previously_show = true;
		title = title.replace(/[[［【(]再[\]］】)]/g, '');
	}
	
	var is_new = false;
	if (title.match(/[[［【(]新[\]］】)]/)) {
		is_new = true;
		title = title.replace(/[[［【(]新[\]］】)]/g, '');
	}

	var is_HV = false;
	if (title.match(/[[［【(]HV[\]］】)]/)) {
		is_HV = true;
		title = title.replace(/[[［【(]HV[\]］】)]/g, '');
	}
	
	var is_teletext = false;
	if (title.match(/[[［【(]字[\]］】)]/)) {
		is_teletext = true;
		title = title.replace(/[[［【(]字[\]］】)]/g, '');
	}
	
	var is_bilingual = false;
	if (title.match(/[[［【(]二[\]］】)]/)) {
		is_bilingual = true;
		title = title.replace(/[[［【(]二[\]］】)]/g, '');
	}
	
	var episode_num= '';
	if (title.match(/[#＃][0-9０-９]+([,\-・～〜][#＃]?[0-9０-９]+)*( *(\(再\)|\(字\)|\(終\)|END|\[字]|\[二]|終|新))*$/)) {
		var suffix = title.match(/( *(\(再\)|\(字\)|\(終\)|END|\[字]|\[二]|終|新))*$/)[0];
		var title = title.replace(/( *(\(再\)|\(字\)|\(終\)|END|\[字]|\[二]|終|新))*$/, '');
		
		var xs = title.split(/[#＃]/);
		var y = xs.pop();
		var z = xs.pop();
		while (z.match(/^[0-9０-９]+([,\-・～〜][0-9０-９]*)?$/)) {
			y = [z, y].join('#');
			z = xs.pop();
		}
		episode_num = y.replace(/[#＃]/g, '');
		xs.push(z);
		title = xs.join('#') + suffix;
	}
	
	var elem = new XML(
		'<programme start="' + start + '" stop="' + stop + '" channel="' + ch + '.hikaritv.net">'
			+ '<title lang="ja">' + escapeHTML(title) + '</title>'
			+ '<desc lang="ja">' + escapeHTML(description + '[' + crid + ']') + '</desc>'
			+ getActor(description, category)
			+ '<category lang="ja">' + category + '</category>'
			+ getEpisodeNum(episode_num)
			+ (is_HV ? '<video><quality>HV</quality></video>' : '')
			+ (is_bilingual ? '<audio><stereo>bilingual</stereo></audio>': '')
			+ (previously_show ? '<previously-shown/>' : '')
			+ (is_new ? '<new/>' : '')
			+ (is_teletext ? '<subtitles type="teletext"/>': '')
			+ '<url><![CDATA[' + make_prog_url(title) + ']]></url>'
		+ '</programme>');

	return elem;
}

function getActor(desc, category) {
	var result = '';

	if (category.indexOf('アニメ') != -1 || category.indexOf('ドラマ') != -1 || category.indexOf('映画') != -1) {
		var m = re_kantoku.matcher(desc);
		while (m.find()) {
			result += '<director>' + m.group() + '</director>';
		}
	}
	if (category.indexOf('アニメ') != -1) {
		var m = re_seiyuu.matcher(desc);
		while (m.find()) {
			result += '<actor>' + m.group() + '</actor>';
		}
	}
	if (category.indexOf('ドラマ') != -1 || category.indexOf('映画') != -1) {
		var m = re_haiyuu.matcher(desc);
		while (m.find()) {
			result += '<actor>' + m.group() + '</actor>';
		}
	}
	if (category.indexOf('趣味') != -1) {
		var m = re_kishi.matcher(desc);
		while (m.find()) {
			result += '<commentator>' + m.group() + '</commentator>';
		}
	}

	if (result != '') {
		result = '<credits>' + result + '</credits>';
	}
	return result;
}

function getEpisodeNum(num) {
	if (num == '') return '';
	return '<episode-num system="onscreen">' + num + '</episode-num>';
}

//var channels = ['350','351','352','380','450','451','452','453','455', '832'];
var channels = ['101', '102', '103', '150', '151', '152', '153', '180', '258', '380', '251', '252', '253', '260', '261', '350', '351', '352', '550', '353', '450', '451', '452', '453', '455', '460', '461', '552', '553', '551', '556', '740', '558', '554', '555', '559', '470', '471', '650', '651', '653', '655', '741', '750', '751', '752', '754', '860', '861', '811', '812', '832', '831'];
//var channels = ['380'];
var channelList = [];
var programmeList = [];

for (var i = 0; i < channels.length; ++i) {
	var ch = channels[i];
	var url = 'http://www.hikaritv.net/search/tv/request/00/tv_epg_weekly/timeRange=24&dayRange=8&serviceID=' + ch + '&chRange=1&selCh=' + ch + '.html';

	var doc = null;
	try {
		doc = org.jsoup.Jsoup.connect(url).timeout(4*60*1000).get();
	} catch (e) {
		if (e.javaException instanceof java.net.SocketTimeoutException) {
			print("timeout. skip this channel.");
			continue;
		}
		throw e;
	}
	var jobs = doc.select('p.title>a').toArray();
	var ch_desc = doc.select("meta[name=Description]").attr('content').replaceAll("（.*$", "");		

	channelList.push('<channel id="' + ch + '.hikaritv.net"><display-name lang="ja">' + ch_desc + '</display-name><icon src="http://www.hikaritv.net/search/md_ipsp/ch_logos/' + ch + '_osd.jpg"/><url>' + escapeHTML(url) + '</url></channel>');

	print("channel " + ch + " start");
	for (var j = 0; j < jobs.length; ++j) {
		var job = jobs[j];
		//print(job + "\n");
		//print(getCsv(job));
		programmeList.push(getXMLElem(job, ch));
	}
}

var output  = new java.io.BufferedWriter(new java.io.FileWriter(new java.io.File(arguments[0]))); 
output.write('<?xml version="1.0" encoding="UTF-8"?>\n');
output.write('<!DOCTYPE tv SYSTEM "xmltv.dtd">\n');
output.write('\n');
//output.write('<tv generator-info-name="hikariTVgrabber/0.1" source-data-url="http://www.hikaritv.net">\n');
var xml =  new XML('<tv generator-info-name="hikariTVgrabber/0.1" source-data-url="http://www.hikaritv.net"></tv>');
for (var i = 0; i < channelList.length; ++i) {
	xml.appendChild(new XML(channelList[i]));
	//output.write(new XML(channelList[i]));
}
for (var i = 0; i < programmeList.length; ++i) {
	xml.appendChild(new XML(programmeList[i]));
	//output.write(new XML(programmeList[i]));
}
output.write(xml);		
//output.write('</tv>\n');

output.flush();

