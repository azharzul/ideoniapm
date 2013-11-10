var mainURL = 'http://192.168.1.157/pms/mobile/api'

function pmAjax(url,post)
{
	xhr = $.ajax({
		url: url,
		type: "POST",
		data: post
	});
	
	return xhr;
}

function ideoEncrypt(data)
{
	return data;
}

function login(fbid,username,password)
{
	data = {};
	data['mode'] = 'login';
	data['fbid'] = fbid;
	data['u'] = username;
	data['p'] = password;
	data = JSON.stringify(data);
	alert(data);
	post = ideoEncrypt(data)
	pmAjax(mainURL,post)
}