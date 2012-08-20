importPackage(java.lang);
importPackage(java.io);
importPackage(org.jsoup);

//var stdin = new BufferedReader(new InputStreamReader(java.lang.System['in']));
//var stdout = new OutputStreamWriter(java.lang.System.out);

load('../lib/env.rhino.1.2.js');
load('../lib/jquery-1.4.2.min.js');
//window.location = 'http://www.hikaritv.net';
jQuery.ready();
var $ = jQuery;
load('../lib/jquery.form.js');
load('./config.js');

//var crid = location.href.replace(/^.*crid=/, '');

function record(crid) {
	var url = 'http://www.hikaritv.net/member/remote/reserve/confirm/program?cridList=' + crid + '&loginwindow=sub';
//print(url);
	var data = readUrl(url, 'windows-31J');
	var elem = document.createElement('div');
	elem.innerHTML = data;
   	var form = $(elem).find('#exelogin');
	form.find('input[name="userId_login"]').val(config.username);
	form.find('input[name="passwd_login"]').val(config.password);
	var key = '';
	var sessionId = '';
	form.ajaxSubmit({
		async: false,
		success: function (res, status, xhr) {
			sessionId = xhr.getResponseHeader("Set-Cookie").split(';')[0] + ";";
			key = $(res).find('input[name="csrfkey"]').val();
		}
	});

print(sessionId);
print(crid);
print(key);

	$.ajax(
		{
			url: "http://www.hikaritv.net/member/remote/reserve/complete/program", 
			type: "POST",
			async: false,
			data: {
				reserveType: "2",
				prgTitleList: "",
				//loop: "4",
				cridList: crid,
				serviceType: "1",
				parental: "17",
				loginwindow: "sub",
				csrfkey: key 
			},
			beforeSend: function (xhr) {
				xhr.setRequestHeader('Cookie', sessionId)
			},
			success: function (d) { print("OK"); },
			error: function (d) { print("NG"); }
		}
	);
print("DONE");
}


//record(new String(arguments[0]));

