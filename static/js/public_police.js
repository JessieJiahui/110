/**
 * Created by dell on 2017/9/26.
 */
$(document).ready(function() {
    //导航栏切换
	"use strict";
    $('.nav_center ul li a').click(function(){
        $(this).addClass('aclick').parent("li").siblings().find("a").removeClass('aclick');
    });
    //日历插件
    $('#reservation').daterangepicker({
        opens:'left'
    });
    $('#reservation1').daterangepicker(null, function(start, end, label) {
        console.log(start.toISOString(), end.toISOString(), label);
    });
});

//页面滚动条
$(document).ready(function() {
	"use strict";
	$(".Scroll").niceScroll({
		touchbehavior:false,
		cursorcolor:"#1c3748",//滚动条的颜色
		cursoropacitymax:1,
		cursorwidth:5,
		cursorborder:"none",
		cursorborderradius:"6px",//滚动条的宽度
		background:"#cccccc",//滚动条的背景底色
		autohidemode:true
	});
});


//分页js

function getParameter(name) {
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r!=null) return unescape(r[2]); return null;
}

$(function(){
	"use strict";
    var totalPage = 20;
    var totalRecords = 390;
    var pageNo = getParameter('pno');
    if(!pageNo){
        pageNo = 1;
    }
    //生成分页
    //有些参数是可选的，比如lang，若不传有默认值
    kkpager.generPageHtml({
        pno : pageNo,
        //总页码
        total : totalPage,
        //总数据条数
        totalRecords : totalRecords,
        mode : 'click',//默认值是link，可选link或者click
        click : function(n){
            // do something
            //手动选中按钮
            this.selectPage(n);
            return false;
        }
        /*
         ,lang               : {
         firstPageText           : '首页',
         firstPageTipText        : '首页',
         lastPageText            : '尾页',
         lastPageTipText         : '尾页',
         prePageText             : '上一页',
         prePageTipText          : '上一页',
         nextPageText            : '下一页',
         nextPageTipText         : '下一页',
         totalPageBeforeText     : '共',
         totalPageAfterText      : '页',
         currPageBeforeText      : '当前第',
         currPageAfterText       : '页',
         totalInfoSplitStr       : '/',
         totalRecordsBeforeText  : '共',
         totalRecordsAfterText   : '条数据',
         gopageBeforeText        : '&nbsp;转到',
         gopageButtonOkText      : '确定',
         gopageAfterText         : '页',
         buttonTipBeforeText     : '第',
         buttonTipAfterText      : '页'
         }*/
    });
});