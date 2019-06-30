//定时器
function countdown(times, t, val, callback) {
	mui.toast('验证码已发送，请查收！');
	$.ajax({
		type: "POST",
		url: api + '/user/sendSms',
		data: {
			phone: val
		},
		dataType: "json",
		success: function(data) {
			console.log(data)
			if (data.code == 0) {
				mui.toast(data.msg);
			}
		},
		error: function(error) {
			console.log(error);
		}
	});
	$(t).removeAttr('onclick');
	if (typeof(times) != 'number') {
		throw '参数错误（number 类型）'
	};
	var timer = setInterval(function() {
		times -= 1;
		t.innerHTML = '&nbsp;&nbsp;' + times + '&nbsp;秒&nbsp;&nbsp;';
		if (times <= 0) {
			clearInterval(timer);
			t.innerHTML = '发送验证码';
			$(t).attr('onclick', 'send(this)');
		}
		callback(times)
	}, 1000)
}

// url 截串
// 参数: 要揭取的url(string), 回调;
function CutString(URL, callback) {
	//TODO--判断Url格式是否规范
	if (typeof(URL) != 'string') {
		throw '参数不是 string 类型!'
	}
	var theRequest = new Object();
	if (URL.indexOf("?") != -1) {
		// theRequest.url = URL.split("?")[0];
		var str = URL.split("?")[1].split("&");
		for (var i = 0; i < str.length; i++) {
			theRequest[str[i].split("=")[0]] = str[i].split("=")[1];
		}
	}
	callback(theRequest);
}





// 倒计时
// 年 月 日 时 分 秒  
function Tomorrow(callback){
	var day3 = new Date();
	day3.getTime()+24*60*60*1000;
	var T = new Object();
	T.y = day3.getFullYear();
	T.m = (day3.getMonth()+1);
	T.d = day3.getDate()+1;
	callback(T)
}

function PourMeter(N, Y, D, S, F, SS, callback) {
	// console.log(N, Y, D, S, F, SS)
	var obj = new Object();
	var timers = setInterval(function() {
		// 		var time = $.ajax({
		// 			async: false
		// 		}).getResponseHeader("Date");
		var curDate = new Date().getTime();
		var futureData = new Date(N + '-' + Y + '-' + D + '-' + ' ' + S + ':' + F + ':' + SS).getTime();
		var difference = parseInt((futureData - curDate) / 1000);
		var d = Math.floor(difference / (60 * 60 * 24));
		var m = difference % (60 * 60 * 24);
		var h = Math.floor(m / (60 * 60));
		m = m % (60 * 60);
		var min = Math.floor(m / 60);
		var sec = m % 60;
		d != 0 ? (h = d * 24) : (h = h);
		h < 10 && h >= 0 ? (h = '0' + h) : (h = h);
		min < 10 && min >= 0 ? (min = '0' + min) : (min = min);
		sec < 10 && sec >= 0 ? (sec = '0' + sec) : (sec = sec);
		if (difference < 0) {
			clearInterval(timers);
		}
		obj.day = d;
		obj.hours = h;
		obj.minutes = min;
		obj.seconds = sec;
		callback(obj)
	}, 1000)
}

function theLogin(url, toUrl, callback) {
	mui.plusReady(function() {
		if (window.localStorage.getItem('userId') == null || window.localStorage.getItem('userId') == '') {
			mui.openWindow({
				url: toUrl,
				show: {
					autoShow: true, //页面loaded事件发生后自动显示，默认为true
					aniShow: 'slide-in-right', //页面显示动画，默认为”slide-in-right“；
					duration: 200 //页面动画持续时间，Android平台默认100毫秒，iOS平台默认200毫秒；
				},
			})
			if(callback!=null){
			callback(false);
			}
		} else {
			mui.openWindow({
				url: url,
				show: {
					autoShow: true, //页面loaded事件发生后自动显示，默认为true
					aniShow: 'slide-in-right', //页面显示动画，默认为”slide-in-right“；
					duration: 200 //页面动画持续时间，Android平台默认100毫秒，iOS平台默认200毫秒；
				},
			})
			if(callback!=null){
			callback(true);
			}
		}
	})
}

function logins(url, toUrl, data) {
	mui.plusReady(function() {
		if (window.localStorage.getItem('userId') == null || window.localStorage.getItem('userId') == '') {
			mui.openWindow({
				url: toUrl,
				show: {
					autoShow: true, //页面loaded事件发生后自动显示，默认为true
					aniShow: 'slide-in-right', //页面显示动画，默认为”slide-in-right“；
					duration: 200 //页面动画持续时间，Android平台默认100毫秒，iOS平台默认200毫秒；
				},
				extras:data,
			})
		} else {
			mui.openWindow({
				url: url,
				show: {
					autoShow: true, //页面loaded事件发生后自动显示，默认为true
					aniShow: 'slide-in-right', //页面显示动画，默认为”slide-in-right“；
					duration: 200 //页面动画持续时间，Android平台默认100毫秒，iOS平台默认200毫秒；
				},
			})
		}
	})
}




function getDate(callback) {
	var myDate = new Date();
	callback(myDate.getFullYear() + '-' + (myDate.getMonth() + 1) + '-' + myDate.getDate());
}
