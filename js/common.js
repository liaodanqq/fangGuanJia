$(function(){
//	遮罩层的高度
	var windowHeight=$(window).height();
	$('.J_zhezhao').css('height',windowHeight);
	
	//	点击在线客服
	$('.J_kefu_zixun').click(function(){
		$('.J_kefu').show();
		$('.J_zhezhao_que').show();
		$('body').css('overflow','hidden');
	})
//	关闭"在线客服"
	$('.J_kefu_listli_aclose').click(function(){
		$('.J_kefu').hide();
		$('.J_zhezhao_que').hide();
		$('body').css('overflow','auto');
	})
	
//	错误提示框
	var left_wrong_tan=($(window).width()-$('.M_wrong_tan').outerWidth())/2;
	var top_wrong_tan=($(window).height()-$('.M_wrong_tan').outerHeight())/2;
	$('.M_wrong_tan').css('left',left_wrong_tan);
	$('.M_wrong_tan').css('top',top_wrong_tan);
	
	
	

	
})
