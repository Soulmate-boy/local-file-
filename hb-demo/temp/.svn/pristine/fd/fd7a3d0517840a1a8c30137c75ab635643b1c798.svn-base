//获取当前应用的版本号
var wgtVer = null;
if (window.plus) {
	plusReady();
} else {
	document.addEventListener('plusready', plusReady, false);
}
function plusReady() {
	// ......  
	// 获取本地应用资源版本号  
	plus.runtime.getProperty(plus.runtime.appid, function(inf) {
		wgtVer = inf.version;
		console.log("当前应用版本：" + wgtVer);
	});

//发起ajax请求检测是否有新版本
// 检测更新  
var checkUrl = api + "/app/downloadurl";//返回最新版本信息
var wgtUrl = "";//下载链接

	// plus.nativeUI.showWaiting("检测更新...");
	var xhr = new XMLHttpRequest();
	xhr.responseType = "json";
	xhr.onreadystatechange = function() {
		switch (xhr.readyState) {
			case 4:
				plus.nativeUI.closeWaiting();
				console.log(xhr);
				if (xhr.status == 200) {
					console.log("检测更新成功：" + xhr.response);
					var data = xhr.response;
					console.log(data)
					newVer = data.data.version;
					wgtUrl = data.data.url+'?attname=eakeToken.wgt';
					console.log(wgtUrl)
					if (wgtVer && newVer && (wgtVer != newVer)) {
						downWgt(); // 下载升级包  
					} else {
						// plus.nativeUI.alert("无新版本可更新！");
					}
				} else {
					console.log("检测更新失败！");
					// plus.nativeUI.alert("检测更新失败！");
				}
				break;
			default:
				break;
		}
	}
	xhr.open('GET', checkUrl);
	xhr.send();

//从服务器下载应用资源包（wgt文件）
// 下载wgt文件  

function downWgt() {
	plus.nativeUI.showWaiting("下载更新包...");
	plus.downloader.createDownload(wgtUrl, {
		filename: "_doc/update/"
	}, function(d, status) {
		if (status == 200) {
			console.log("下载更新包成功：" + d.filename);
			installWgt(d.filename); // 安装wgt包  
		} else {
			console.log("下载更新包失败！");
			plus.nativeUI.alert("下载更新包失败！");
		}
		plus.nativeUI.closeWaiting();
	}).start();
}
//更新应用资源包（wgt文件）
// 更新应用资源  
function installWgt(path) {
	plus.nativeUI.showWaiting("安装更新包...");
	plus.runtime.install(path, {}, function() {
		plus.nativeUI.closeWaiting();
		console.log("安装更新包成功！");
		plus.nativeUI.alert("应用资源更新完成！", function() {
			plus.runtime.restart();
		});
	}, function(e) {
		plus.nativeUI.closeWaiting();
		console.log("安装更新包失败[" + e.code + "]：" + e.message);
		plus.nativeUI.alert("安装更新包失败[" + e.code + "]：" + e.message);
	});
}
}