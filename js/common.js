$(function(){
  // header

  // gnb 호버 시
  $('.gnb-hover').css('display', 'none');
  let isAni = $('.gnb-hover').is(':animated');
  $('#gnb li').hover(function(){
    if (!isAni) {
      $('.gnb-hover').slideDown(300);
    }
  });
  $('main').hover(function(){
    if(!isAni) {
      $('.gnb-hover').slideUp(300);
    }
  })

  // 로그인 랭귀지 클릭
  $('.util-wrap .login .lst').css('display', 'none');
  $('.util-wrap .language .lst').css('display', 'none');
  $('.util-wrap > ul > li').click(function(){
    if ( $('.lst' ,this).css('display') == 'block' ) {
      $('.lst' ,this).css('display', 'none');
      $(this).removeClass('active');
    } else {
      $('.util-wrap > ul .lst').css('display', 'none');
      $('.lst' ,this).css('display', 'block');
      $('.util-wrap > ul > li').removeClass('active');
      $(this).addClass('active');
    }
  });
  $('html').click(function(e) {
  	if(!$(e.target).hasClass("notClickArea")) {
      $('.util-wrap .login .lst').css('display', 'none');
      $('.util-wrap .language .lst').css('display', 'none');
      $('.util-wrap > ul > li').removeClass('active');
  	}
  });

  // content second 슬라이드
  let cSecondIndex = 1;
  $('.content-area.second .col1 .btn-next').click(function(){
    $(`.content-area.second .col1 .slide:nth-child(${cSecondIndex})`).css('opacity', '0');
    if ( cSecondIndex == 3) {
      cSecondIndex = 1;
    } else {
      ++cSecondIndex;
    }
    $(`.content-area.second .col1 .slide:nth-child(${cSecondIndex})`).css('opacity', '1');
    $('.content-area.second .col1 .btn-count span:first-child').text(`${cSecondIndex}`);
  });
  $('.content-area.second .col1 .btn-prev').click(function(){
    $(`.content-area.second .col1 .slide:nth-child(${cSecondIndex})`).css('opacity', '0');
    if ( cSecondIndex == 1) {
      cSecondIndex = 3;
    } else {
      --cSecondIndex;
    }
    $(`.content-area.second .col1 .slide:nth-child(${cSecondIndex})`).css('opacity', '1');
    $('.content-area.second .col1 .btn-count span:first-child').text(`${cSecondIndex}`);
  });

  let cSecondAutoSlide = setInterval(function(){
    $('.content-area.second .col1 .btn-next').trigger('click');
  }, 4000);
  $('.content-area.second .col1 .btn-stop').click(function(){
    if( $(this).hasClass('active') ) {
      $(this).removeClass('active');
      clearInterval(cSecondAutoSlide);
    } else {
      $(this).addClass('active');
      cSecondAutoSlide = setInterval(function(){
        $('.content-area.second .col1 .btn-next').trigger('click');
      }, 4000);
    }
  });

  let wtWrapper = $('.wt-slide-wrapper');
  const heightNum = $('.wt-slide-wrapper a').height();
  let aLeng = $('.wt-slide-wrapper a').length;

  $('.wt-slide-area').height(heightNum);
  wtWrapper.height(heightNum*aLeng);

  initialFunc();

  // 슬라이드 포지션 초기화 함수
  function initialFunc() {
    $('.wt-slide-wrapper').css('margin-top', -heightNum);
    $('.wt-slide-wrapper a:first').appendTo('.wt-slide-wrapper');
  }

  setInterval(function(){
    let wrpperMarginTop = parseInt(wtWrapper.css('margin-top'));
    let isAni = wtWrapper.is(':animated');
    if ( !isAni ) {
      wtWrapper.animate({ marginTop: wrpperMarginTop - heightNum }, 'normal', 'swing', function(){
        initialFunc();
      });
    };
  }, 4000);

  // content fifth
  let cFifthLi = $('.content-area.fifth .col1 ul li');
  cFifthLi.click(function(){
    if ($(this).index() < 3) {
      cFifthLi.each(function(){
        $(this).removeClass('on');
        $(this).find('a').removeClass('on');
      });
      $(this).addClass('on');
      $(this).find('a').addClass('on');

      $('.content-area.fifth .col2 ul').each(function(){
        $(this).css('display', 'none');
      });

      if($(this).index() == 0) {
        $('.content-area.fifth .col2 .notice').css('display', 'flex');
      } else if($(this).index() == 1) {
        $('.content-area.fifth .col2 .report').css('display', 'flex');
      } else if($(this).index() == 2) {
        $('.content-area.fifth .col2 .test-information').css('display', 'flex');
      }
      return false;
    }
  });

  // content sixth slide
  const widthNum = $('.swiper.six .swiper-wrapper.six .swiper-slide').outerWidth();
  let swiperLeng = $('.swiper.six .swiper-wrapper.six .swiper-slide').length;

  $('.swiper-wrapper.six').width(widthNum*swiperLeng);

  // 슬라이드 포지션 초기화
  // initialFunc('prev');

  // 슬라이드 포지션 초기화 함수
  // function initialFunc(init) {
  //   $('#carousel-inner').css('margin-left', -widthNum);
  //   if ( init === 'prev' ) {
  //     $('#carousel-inner ul.column:last').prependTo('#carousel-inner');
  //   } else if ( init === 'next' ) {
  //     $('#carousel-inner ul.column:first').appendTo('#carousel-inner');
  //   }
  // }
});
