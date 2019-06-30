/**
 * 
 * 2019-4-12
 * 弹出层demo使用说明：
 * 本方法基于jquery
 * 第一步：在页面引入jq.js 和 logding.js (注意先后顺序)
 * 第二步：在html文档中直接调用 Wdd(参数) 即可
 * 第三步：自己看，不明白的去csdn留言 https://blog.csdn.net/china_dou
 * 
 * 可传参数：
 * 	
 * 
 * -------------$dw.all({}):
 * 
 *  width: "6rem",
	height: "4.1rem",
	backgroundColor: "rgba(0,0,0,0.8)",
	img: './w-loading.gif',
	time: 30000,
	img_out:true, //(必选)默认true，ajax调用后改为false
	
	------------$dw.imgShow({}):
	
	color: "#cecece",
	fontSize: '12px',
	text: '欢迎关注CSDN:https://blog.csdn.net/china_dou',
	time: 1000,
 * 
 * 	-------------$dw.textShow():
 * 
 *  width: "6rem",
	height: "4.1rem",
	backgroundColor: "rgba(0,0,0,0.8)",
	img: './w-loading.gif',
	time: 30000,
	img_out:true, //(必选)默认true，ajax调用后改为false
	color: "#cecece",
	fontSize: '12px',
	text: '欢迎关注CSDN:https://blog.csdn.net/china_dou',
	time: 1000,
	marginTop: '65%', //可选，解决上边图片遮挡下边的文字
 * 
 */


(function(dw) {
	console.log(this)
	console.log($)
	
		var option = {},
			doc = $('body'),
			docW = $(window).width(),
			docH = $(window).height(),
			url = option.img,
			txt = option.txt;
			
			dw.imgShow =  function(parametes) {
				var paramete = {
					width: "5rem",
					height: "4.1rem",
					backgroundColor: "rgba(0,0,0,0.8)",
					img: './w-loading.gif',
					time: 3000,
					img_out: true,
					cs:'这个参数没有用',//不用，测试 用的
				};
				$.extend(paramete, parametes, 'deep')
				var $dom = $dom = $('<div></div>')
				$dom.append('<div id="wdd-imgBox"><img src="' + paramete.img + '" alt=""></div>');
				$dom.css({
					width: docW,
					height: docH,
					overflow: "hidden",
					position: "fixed",
					top: "0",
					left: "0",
					zIndex: "999999999",
					backgroundColor: "rgba(0,0,0,0.3)",
				});
				$($($dom)[0].firstChild).css({
					display: "block",
					width: paramete.width,
					height: paramete.height,
					marginTop: "55%",
					paddingBottom: "2px",
					marginLeft: "50%",
					transform: "translateX(-50%)",
					backgroundColor: paramete.backgroundColor,
					borderRadius: "0.4rem",
					boxShadow: "0 0 15px rgba(0,0,0,0.3)",
				});
				$($($dom)[0].childNodes[0].firstChild).css({
					display: "block",
					width: "100%",
					height: "100%",
					marginBottom: "0.5rem",
					transform: "scale(1.2)",
					display: "flex",
					display: "-webkit-flex",
					justifyContent: "center",
					alignItems: "center",
				});
				// paramete.img_out ? $($($dom)[0].firstChild).fadeIn(100) : ($($dom)[0].firstChild).fadeOut(300)
				if( paramete.img_out){
					$($($dom)[0].firstChild).fadeToggle(1000,function(){
						if(paramete.cs === null){
							$dom.fadeOut(300);
							$('#wdd-imgBox').fadeOut(300);
						}
					})
				}else{
					($($dom[0]).firstChild).fadeOut(300)
				}
				doc.append($dom);
			},
			
			dw.textShow = function(parametes) {
				var paramete = {
					color: "#cecece",
					fontSize: '12px',
					text: '欢迎关注CSDN:https://blog.csdn.net/china_dou',
					time: 1000,
					marginTop: "70%",
				}
				$.extend(paramete, parametes);
				var $dom = $dom = $('<div></div>')
				doc.append('<span id="wdd-divBox">' + paramete.text + '</span>');
				$('#' + doc[0].lastElementChild.id).css({
					position: "fixed",
					top: "0",
					left: "0",
					zIndex: "999999999",
					padding: "2px 5px",
					boxSizing: "borderBox",
					marginTop: paramete.marginTop,
					marginLeft: "50%",
					transform: "translateX(-50%)",
					display: "flex",
					display: "-webkit-flex",
					justifyContent: "center",
					alignItems: "center",
					color: paramete.color,
					fontSzie: paramete.fontSize,
					textAlign: "center",
					borderRadius: "0.4rem",
					backgroundColor: "rgba(0,0,0,0.5)",
					boxShadow: "0 0 10px rgba(0,0,0,0.3)",
				});
				$('#wdd-divBox').fadeIn(300, function() {
					setTimeout(function() {
						$('#wdd-divBox').fadeOut(300, function() {
							$dom.remove()
						});
					}, paramete.time)
				})
				doc.append($dom);
			},
			
			dw.all = function(parametes) {
				var paramete = {
					width: "6rem",
					height: "4.1rem",
					backgroundColor: "rgba(0,0,0,0.8)",
					img: './w-loading.gif',
					time: 3000,
					color: "#cecece",
					fontSize: '12px',
					text: '欢迎关注CSDN:https://blog.csdn.net/china_dou',
					time: 1000,
					marginTop: '65%',
					cs:null,
				}
				$.extend(paramete, parametes);
				var $dom = $dom = $('<div></div>')
				$dom.css({
					width: docW,
					height: docH,
					overflow: "hidden",
					position: "fixed",
					top: "0",
					left: "0",
					zIndex: "999999999",
					backgroundColor: "rgba(0,0,0,0.3)",
				});
				$dw.imgShow({
					width: paramete.width,
					height: paramete.height,
					backgroundColor: paramete.backgroundColor,
					img: paramete.img,
					time: 1000,
					img_out: true,
					cs:paramete.cs,
				});
				setTimeout(function() {
					$dom.fadeOut(400, function() {
						$dw.textShow({
							color: paramete.color,
							fontSize: paramete.fontSize,
							text: paramete.text,
							time: paramete.time,
							marginTop: paramete.marginTop,
						});
					})
				}, paramete.time);
				doc.append($dom);
			}
		
	// return new jQuery.fn.init
	
	// return $dw;
}(window.$dw={}))
