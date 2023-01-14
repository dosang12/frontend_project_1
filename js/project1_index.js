var spanimg = document.querySelectorAll(".blockbox");
console.log(spanimg)

$(document).ready(function(){
  var $menu = $('.rightsidebar li a'),
  $contents = $('.anchor_div')
  $(window).scroll(function(){
  var scltop = $(window).scrollTop();
  $.each($contents, function(idx, item){
  var $target   = $contents.eq(idx),
  i = $target.index(),
  targetTop = $target.offset().top;
  if (targetTop <= scltop) {
  $menu.removeClass('on');
  $menu.eq(idx).addClass('on');
  }
  if (!(200 <= scltop)) {
  $menu.removeClass('on');
  }
  })
  });
 /* 탭 클릭 */
  $('.rightsidebar li a').on('click',function(){
  var anchorId = $(this).attr('data-anchor');
  // 스크롤 이동
  scroll_to_anchor_tab(anchorId);
  });
 // 퀵배너 스크롤
  $(window).scroll(function(){
  var quickPos = $('.sidebar').offset().top;
  var winPos = $(window).scrollTop();
  if( winPos > quickPos ) $('.sidebar .rightsidebar').addClass('fixed');
  else $('.sidebar .rightsidebar').removeClass('fixed');
  });
  });
  // 탭 이동 - 부드러운 스크롤
  function scroll_to_anchor_tab(anchor_id,speed) {
  if( !speed ) var speed = 'slow';
  var a_tag = $("#"+anchor_id);
  if(a_tag.length > 0){
  $('html, body').animate({
  scrollTop: a_tag.offset().top - $('').height() -  $('').height() // 상단에 특정 위치를 제외하고 스크롤할때 해당 이름 작성
  }, speed);
  }
  }
//rightsidebar 완성




















// const slides = document.querySelector('.containerbox'); //전체 슬라이드 컨테이너
// const slideImg = document.querySelectorAll('.containerbox li'); //모든 슬라이드들
// let currentIdx = 0; //현재 슬라이드 index
// const slideCount = slideImg.length; // 슬라이드 개수
// const prev = document.querySelector('.moveleft'); //이전 버튼
// const next = document.querySelector('.moveright'); //다음 버튼
// const slideWidth = 140; //한개의 슬라이드 넓이
// const slideMargin = 20; //슬라이드간의 margin 값

// slides.style.width = (slideWidth + slideMargin) * slideCount + 'px';

// function moveSlide(num) {
//   slides.style.left = -num * 160 + 'px';
//   currentIdx = num;
// }

// prev.addEventListener('click', function () {

//   if (currentIdx !== 0) moveSlide(currentIdx - 1);
// },1000);

// next.addEventListener('click', function () {

//   if (currentIdx !== 3 ) {
//     moveSlide(currentIdx + 1);
//   }
// },1000);
