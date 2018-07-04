$(function(){
//	首页-筛选中-更多的下拉列表高度
	var windowHeight=$(window).height();
	var windowWidth=$(window).width();
	var M_top_wrapH=$('.M_top_wrap').outerHeight();
	var J_gengH=windowHeight-M_top_wrapH;
	$('.J_geng').css('height',J_gengH);
	$('.M_gengul').css('height',J_gengH-50);
	$('.M_selectXiaoqu').css('min-height',windowHeight);
	$('.M_selectXiaoqu').css('left',windowWidth);
	

//	首页-更多下拉框
	 $(".M_gengul_lih1_d").each(function(index, element) {
        var li=$(this);
        var mun=li.children(".M_gengul_lih1_ds").length;
        console.log(mun)
        li.children(".M_gengul_lih1_ds").eq(1).css('margin','0 1%');
        li.children(".M_gengul_lih1_ds").eq(4).css('margin','0 1%');
        li.children(".M_gengul_lih1_ds").eq(7).css('margin','0 1%');
        li.children(".M_gengul_lih1_ds").eq(10).css('margin','0 1%');
        li.children(".M_gengul_lih1_ds").eq(13).css('margin','0 1%');
        li.children(".M_gengul_lih1_ds").eq(16).css('margin','0 1%');
    });
//	首页-列表向下滚动-头部fixed
//	window.onscroll = function(){
//		var gunT = document.documentElement.scrollTop || document.body.scrollTop;
//		var scrollt=document.documentElement.scrollTop || document.body.scrollTop;		
//
//		if(gunT>M_top_wrapH){
//			$('.M_top_wrap').addClass('fixed');
//		}else{
//			$('.M_top_wrap').removeClass('fixed');
//		}
//	}	

//	C.问房.html
//	问题列表的高度
	var M_wenHeight=$(window).height()-$('.M_qus').outerHeight()-114;
	$('.M_wen').css('height',M_wenHeight);
	$('.M_content_tab').css('height',M_wenHeight);
	
//	城市选择列表top
	$('.M_city_wrap').css('top',windowHeight);
	
//	地图高度
	var M_ditu_tabHeight=$('.M_ditu_tab').outerHeight();
	var M_ditu_conten_divHeight=$(window).height()-$('.M_ditu_tab').outerHeight();
	$('.M_ditu_conten_div').css('height',M_ditu_conten_divHeight);

	
	
})