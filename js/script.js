'use strict';

// common 헤더 돋보기아이콘
document.querySelector('.search_btn').addEventListener('click', function(){
  document.querySelector('.header_dimmed').classList.add('active');
});

document.querySelector('.header_close_btn').addEventListener('click', function(){
  document.querySelector('.header_dimmed').classList.remove('active');
});

// common 헤더 모달창
document.querySelector('.modal_btn').addEventListener('click', function(){
  document.querySelector('.modal_mask_cover').classList.add('active');
  document.querySelector('.modal_area_wrap').classList.add('active');
});

document.querySelector('.modal_btn_close').addEventListener('click', function(){
  document.querySelector('.modal_mask_cover').classList.remove('active');
  document.querySelector('.modal_area_wrap').classList.remove('active');
});

/* 01.메인페이지 */




/* 05.통합회원가입(개인) */










/* 05.통합회원가입(개인) , 06.통합회원가입(사업자) --부가정보슬라이드만공통-- */
document.querySelector('.arrow_menu').addEventListener('click', function(e) {
  e.preventDefault();
  $(this).siblings().slideToggle();
  this.classList.toggle('active');
});

/* 07.마이캐논 */
function addContents(){
  var tableTag = document.querySelector('.coupon_table');
  tableTag.innerHTML += "<tr><td>번호</td><td>구분</td><td>쿠폰명</td><td>할인액(율)</td><td>유효기간</td><td>적용상품</td><td>디바이스</td></tr>";
}

function removeContents(){
  var tableTag = document.querySelector('.coupon_table tr');
  tableTag.remove();
}


























