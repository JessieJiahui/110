/*加减*/
$(function(){
	"use strict";
	var num = document.getElementById("z-updown");
	$(".z-updown > .icon-jian").click(function(){
    	num.value = parseInt(num.value) - 1;
	});
	$(".z-updown > .icon-jiahao1").click(function(){
    	num.value = parseInt(num.value) + 1;
	});
});

/*下拉菜单*/
$(function(){
	"use strict";
	var n = 0;
	$(".z-select > p > i").click(function(){
		$(this).parent("p").next("ul").removeClass("hidden").toggleClass("show");
		$(this).parent("p").toggleClass("bgwhite noborder");
		n = n + 180;
		var R = "rotate(" + n + "deg)";
		$(this).css("transform",R);
		
	});
	$(".z-select  > ul > li").click(function(){
		$(this).addClass("current");
		$(this).siblings("li").removeClass("current");
		var V = $(this).text();
		$(this).parent("ul").siblings("p").children("span").html(V);
		$(this).parent("ul").removeClass("show").addClass("hidden");
		$(this).parent("ul").siblings("p").removeClass("bgwhite noborder");
		n = n + 180;
		var R = "rotate(" + n + "deg)";
		$(this).css("transform",R);
		$(this).parent("ul").siblings("p").children("i").css("transform",R);
	});
    	
});

/*首页右侧*/
$(function(){
	"use strict";
	$(".z-tipplane > li").click(function(){
    	$(this).toggleClass("current");
		$(this).siblings("li").removeClass("current");
	});
	$("#righttip1").click(function(){
    	$(".z-righttip1").removeClass("hidden").toggleClass("show");
		$(".z-righttip2").removeClass("show").addClass("hidden");
	});
	$("#righttip2").click(function(){
    	$(".z-righttip2").removeClass("hidden").toggleClass("show");
		$(".z-righttip1").removeClass("show").addClass("hidden");
	});
	
	$(".z-righttip1 > a").click(function(){
    	$(this).addClass("current");
		$(this).siblings("a").removeClass("current");
	});
	$(".z-righttip2 > i").click(function(){
    	$(".z-righttip2").removeClass("show");
		$(".z-tipplane > li").removeClass("current");
	});
	
	$(".z-arealst > li").click(function(){
    	$(this).toggleClass("current");
		if($(this).hasClass("current")==true){
			$(this).children("a").children("i").css('display', 'inline-block');
		}else{
			$(this).children("a").children("i").css('display', 'none');
		}
		
	});
	
});

/*首页左侧*/
$(function(){
	"use strict";
	$(".z-lefttips2").click(function(){
    	$(this).addClass("hidden");
		$(".z-lefttips").removeClass("hidden").addClass("show");
	});
	$(".z-lefttips > h3 > i").click(function(){
    	$(".z-lefttips").addClass("hidden");
		$(".z-lefttips2").removeClass("hidden").addClass("show");
	});
	$(".z-tipscontent").click(function(){
    	$(this).toggleClass("current");
		$(this).toggleClass("bgwhite");
		$(this).children(".time").toggleClass("hidden");
		$(this).children(".z-tipsdtl").children(".dtl").toggleClass("show");
		$(this).children(".z-tipsdtl").children("h4").toggleClass("tblack");
		$(this).children(".z-tipsdtl").children("h4").children("label").toggleClass("torange");
		
	});
	
});

/*线索挖掘*/
$(function(){
	"use strict";
	$(".m-lst > li").click(function(){
    	$(this).toggleClass("current");
		if($(this).hasClass("current")==true){
			$(this).children("a").children("i").css('display', 'inline-block');
		}else{
			$(this).children("a").children("i").css('display', 'none');
		}
	});
	
});

/*  弹窗*/
$(function(){
	"use strict";
	$(".z-tiptools > h3 > i").click(function(){
    	$(this).parent("h3").parent(".z-tiptools").removeClass("show");
		$(".z-overlay").removeClass("show");		
	});	
});

/*线索挖掘页 弹窗*/
$(function(){
	"use strict";
	$(".point-check > i").click(function(){
    	$(".m-tiptool").addClass("show");
		$(".z-overlay").addClass("show");
	});	
	$(".checkbtn > a").click(function(){
    	$(".m-tiptool").addClass("show");
		$(".z-overlay").addClass("show");
	});	
});

 
 /*多维数据*/
 $(document).ready(function(){
	 "use strict";
	  var H = $(window).height() - 50; 
	 var W =$(window).width() - 150;
	 $(".z-side").height(H);
	 $(".z-content").height(H);
	 $(".z-content").width(W);
 });

/*右侧菜单*/
$(function(){
	"use strict";
	$(".m-level1 > li").click(function(){
    	$(this).siblings("li").removeClass("current");
		$(this).addClass("current");
		$(this).children(".m-level2").toggleClass("show");
	});	
	$(".m-level2 > li").click(function(){
    	$(this).siblings("li").removeClass("current");
		$(this).addClass("current");
	});	
});
 $(document).ready(function(){
	 "use strict";
	 $(".m-level1 > .current").children(".m-level2").css('display','block');
 });

$(function(){
	"use strict";
	$(".z-part1 > .search > a").click(function(){
		$(".z-part1").css('display','none');
		$(".z-part2").css('display','block');
    	
	});	
});

$(function(){
	"use strict";
	$(".queries > li").click(function(){
		$(this).siblings("li").removeClass("current");
		$(this).addClass("current");	
	});	
	
	$("#q1").click(function(){
		$(".search > p").text("电话号");
		$("#area").hide();
		$("#tel").show();
	});	
	$("#q2").click(function(){
		$(".search > p").text("支付宝");
	});	
	$("#q3").click(function(){
		$(".search > p").text("微信");
	});	
	$("#q4").click(function(){
		$(".search > p").text("网址");
	});	
	$("#q5").click(function(){
		$(".search > p").text("QQ号");
	});	
	$("#q6").click(function(){
		$(".search > p").text("邮箱");
	});	
	$("#q7").click(function(){
		$(".search > p").text("银行账户");
	});	
	$("#q8").click(function(){
		$(".search > p").text("案发地址");
		$("#tel").hide();
		$("#area").show();
	});	
	$("#q9").click(function(){
		$(".search > p").text("车牌号");
	});	
	
	var n = 0;
	$(".top-label").click(function(){
		$(".top10").children("li").toggleClass("show-l");
		n = n + 180;
		var R = "rotate(" + n + "deg)";
		$(this).children("a").children("i").css("transform",R);
	});	
});

 $(document).ready(function(){
	 "use strict";
	 var W = $(".z-content").width() - 50;
	 $(".z-query").width(W);
 });

function nextPage(){
	 
	 var list = document.getElementsByClassName('qr');
	 var rel;
	 var i;

	 for (i = 0; i < list.length; ++i)
		{
			if (list[i].classList.contains('current')===true) {
				rel = list[i].id;
			}
		}

	// 这个就是你想要的结果了
	/*alert(rel);*/
	 var url = "dimension2-2.html?current=" + rel;
	 window.location.href = url;
}

function goBack(){
	"use strict";
	var current = window.location.href.split("current=")[1];
	window.location.href =  "dimensions2-1.html?current=" +current;
}
/*function pageBack(str){
	"use strict";
	window.location.href =  "dimensions2-1.html?current=" +str;
}*/


