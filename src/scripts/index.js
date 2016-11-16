var str = require("./templates/index.string");
var str2 = require("./templates/guid.string");

require("./libs/zepto.min.js");
require("./libs/swiper-3.4.0.min.js");

// console.log(Swiper);
// var body = document.body;
// body.innerHTML = str2 + body.innerHTML;

// var mySwiper = new Swiper('.swiper-container');
	// autoplay : 3000,
	// autoplayDisableOnInteraction : false,
	// prevButton:'.swiper-button-prev',
	// nextButton:'.swiper-button-next',
	// pagination : '.swiper-pagination',
	// paginationHide :true
// });
$(function(){
	var body = document.body;
	// body.innerHTML = str2 + body.innerHTML;
	$('body').prepend(str2)
	.find("#mySwiper").children("*:nth-child(4)").prepend(str);
	var mySwiper = new Swiper('.swiper-container');
});
// var list = require("./utils/common.util.js");
// $(function(){
// 	$('body').prepend(str);
// })

// var IScroll = require("./libs/iscroll-probe.js");
// var body = document.body;
// body.innerHTML = str + body.innerHTML;
// window.onload = function(){
// 	var myScroll = new IScroll('#main-scroll',{ mouseWheel: true,hScrollbar:false,vScrollbar: false});
// }