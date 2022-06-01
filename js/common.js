$(function(){
  // header

  // gnb 호버 시
  $('.gnb-hover').css('display', 'none');
  $('#gnb li, .gnb-hover').hover(function(){
    $('.gnb-hover').slideDown(300);
  });
  $('main').hover(function(){
    $('.gnb-hover').slideUp(300);
  })

  // 로그인 랭귀지 클릭
  $('.util-wrap .login .lst').css('display', 'none');
  $('.util-wrap .language .lst').css('display', 'none');
  $('.util-wrap > ul > li').click(function(){
    if ( $('.lst' ,this).css('display') == 'block' ) {
      $('.lst' ,this).css('display', 'none');
    } else {
      $('.util-wrap > ul .lst').css('display', 'none');
      $('.lst' ,this).css('display', 'block');
    }
  });
  $('html').click(function(e) {
  	if(!$(e.target).hasClass("notClickArea")) {
      $('.util-wrap .login .lst').css('display', 'none');
      $('.util-wrap .language .lst').css('display', 'none');
  	}
  });


});
