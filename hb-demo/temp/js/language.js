$(function() {
	// do something
	var script = document.createElement("script");
	script.type = "text/javascript";
	// script.src="js/translate.js";
	script.src = "http://www.microsoftTranslator.com/ajax/v3/WidgetV3.ashx?siteData=ueOIGRSKkd965FeEGM5JtQ**";
	document.getElementsByTagName('head')[0].appendChild(script);
	var value = localStorage.getItem("language");
	console.log(value)

	document.onreadystatechange = function() {
		if (document.readyState == 'complete') {
			if (value === "0") {
				Microsoft.Translator.Widget.Translate('zh-CHS', 'en', onProgress, onError, onComplete, onRestoreOriginal, 2000);
			}
			// 			 else {
			// 				//  if (value === "0")
			// 				Microsoft.Translator.Widget.Translate('en', 'zh-CHS', onProgress, onError, onComplete, onRestoreOriginal,2000); //ying
			// 			} 
			// 			else {
			// 				Microsoft.Translator.Widget.Translate('zh-CHS', 'zh-CHT', onProgress, onError, onComplete, onRestoreOriginal,
			// 					2000);
			// 			}
		}
	}

	function onProgress(value) {}

	function onError(error) {}

	function onComplete() {
		$("#WidgetFloaterPanels").hide();
	}

	function onRestoreOriginal() {}

	// 取消默认背景
	$("html").bind("click", function(e) {
		// console.log(e.target);
		$(e.target).css({
			'color': 'normal',
			'backgroundColor': 'normal'
		});
// 		$("font").css({
// 			'color': 'normal',
// 			'backgroundColor': 'transparent'
// 		});
// 		$("nav").css({
// 			'color': 'normal',
// 			'backgroundColor': 'nomal'
// 		});
// 		$("nav").css({
// 			'color': 'normal',
// 			'backgroundColor': 'nomal'
// 		});
		e.stopPropagation();
	})
	

});


function translate() {
	var value = localStorage.getItem("language");
	console.log(value)
	if (value === "0") {
		localStorage.setItem("language", "1"); //中文
	} else if (value === "1"){
		//  if (value === "0")
		localStorage.setItem("language", "0"); //英文
	}else{
		localStorage.setItem("language", "1");//默认中文
	}
	// 	else {
	// 		localStorage.setItem("language", "1"); //繁体
	// 	}
	window.location.reload(); //刷新当前页面.
}
