// var option = {
// 	"showIs": 'img', //"img" "txt" "TI" 
// 	"txt": '120000123adasd003',
// }

// var option = {
	// "showIs": 'img', //"img" "txt" "TI" 
	// "img": '',
	// "txt": '120000123adasd003',
// 	"imgShow": true,
// 	"txtShow": true,
// }

function wdd(option) {

	if (option.img == '') {
		option.img == '../image/w-loading.gif';
	};
	console.log(option.showIs);
	var doc = $('body'),
		docW = $(window).width(),
		docH = $(window).height(),
		url = option.img,
		txt = option.txt,
		$dom = null;
	$dom = $(
		'<div></div>'
	);
	// img
	if (option.showIs === 'img') {
		$dom.append('<div><img src="./image/w-loading.gif" alt="img" style="width:40px;height:40px;"></div>');
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
			width: "4.1rem",
			height: "4.1rem",
			// overflow: "hidden",
			marginTop: "calc(50% + 3rem)",
			paddingBottom: "0.3rem",
			marginLeft: "calc((100% - 4.1rem) / 2)",
			transform: "translate(-50% -50%)",
			display: "flex",
			display: "-webkit-flex",
			justifyContent: "center",
			alignItems: "center",
			color: "white",
			backgroundColor: "#fff",
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
	};
	// txt
	if (option.showIs === 'txt') {
		$dom.append('<div><span>' + option.txt + '</span></div>');
		$dom.css({
			width: docW,
			height: docH,
			overflow: "hidden",
			position: "fixed",
			top: "0",
			left: "0",
			zIndex: "999999999",
			backgroundColor: "rgba(0,0,0,0)",
		});
		$($($dom)[0].childNodes).css({
			width: "100%",
			height: "3rem",
			marginTop: "calc(50% + 3.5rem)",
			overflow: "hidden",
			display: "flex",
			display: "-webkit-flex",
			justifyContent: "center",
			alignItems: "center",
			color: "white",
		});
		$($($dom)[0].childNodes[0].firstChild).css({
			height: "1.44rem",
			padding: "0 0.6rem",
			borderRadius: "0.4rem",
			backgroundColor: "white",
			display: "flex",
			display: "-webkit-flex",
			justifyContent: "center",
			alignItems: "center",
			color: "#666",
			boxShadow: "0 0 15px rgba(0,0,0,0.3)",
		});
	};
	// TI
	if (option.showIs === "TI") {
		$dom.append(
			'<div><img src="./image/w-loading.gif" alt="img" style="width:40px;height:40px;"></div> <div><span>' + option.txt +
			'</span></div>'
		);
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
		$($($dom)[0].childNodes[0]).css({
			display: "block",
			width: "4.1rem",
			height: "4.1rem",
			overflow: "hidden",
			marginTop: "calc(50% + 3rem)",
			paddingBottom: "0.3rem",
			marginLeft: "calc((100% - 4.1rem) / 2)",
			transform: "translate(-50% -50%)",
			display: "flex",
			display: "-webkit-flex",
			justifyContent: "center",
			alignItems: "center",
			color: "white",
			backgroundColor: "#fff",
			borderRadius: "0.4rem",
			boxShadow: "0 0 15px rgba(0,0,0,0.3)",
		});
		$($($dom)[0].childNodes[0].firstChild).css({
			display: "block",
			width: "5.1rem",
			height: "5.1rem",
			display: "flex",
			display: "-webkit-flex",
			justifyContent: "center",
			alignItems: "center",
		});
		$($($dom)[0].childNodes[2]).css({
			width: "100%",
			height: "3rem",
			marginTop: "8%",
			overflow: "hidden",
			display: "flex",
			display: "-webkit-flex",
			justifyContent: "center",
			alignItems: "center",
			color: "white",
		});
		$($($dom)[0].childNodes[2].firstChild).css({
			height: "1.44rem",
			padding: "0 0.6rem",
			borderRadius: "0.4rem",
			backgroundColor: "white",
			display: "flex",
			display: "-webkit-flex",
			justifyContent: "center",
			alignItems: "center",
			color: "#666",
			border: '1px solid red',
		})
	}

// 	if (!(option.imgShow)) {
// 		$($($dom)[0].childNodes[0]).css({
// 			opacity: "0",
// 		})
// 	};
// 	if (!(option.txtShow)) {
// 		$($($dom)[0].childNodes[2]).css({
// 			opacity: "0",
// 		})
// 	}

	function wddImg() {
		$($($dom)[0].firstChild).fadeToggle(400, function() {
			setTimeout(function() {
				$dom.fadeToggle(300)
			}, 1000);
		});
	}

	function wddTxt() {
		$($($dom)[0].childNodes).fadeToggle(400, function() {

		});
	};

	if (option.showIs === "img") {
		wddImg()
	}

	if (option.showIs === "txt") {
		wddTxt();
	}

	doc.append($dom);
}
