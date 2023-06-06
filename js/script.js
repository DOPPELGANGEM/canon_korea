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

/* 05.통합회원가입(개인)  */
function doOpenCheck(chk) {
  let obj = document.getElementsByName('rember_check');
  for(let i = 0; i < obj.length; i++) {
    if(obj[i] !== chk) {
      obj[i].checked = false;
    } else {
      obj[i].checked = true;
    }
  }
}

document.querySelector('#main_05 .cert_btn').addEventListener('click', function(e) {
  const userName = document.querySelector('[type=name]').value;
  const userPhone = document.querySelector('[type=phone]').value;

  document.querySelector('.result_box').innerHTML += '이름 : ' + userName + '<br>';
  document.querySelector('.result_box').innerHTML += '휴대폰 : ' + userPhone + '<br>';
  

  if(userName === '') {
    alert('이름을 입력하세요.');
  }

  if(userPhone === '') {
    alert('핸드폰 번호를 입력하세요');
  }
});

document.querySelector('#main_05 .arrow_menu').addEventListener('click', function(e) {
  e.preventDefault();
  $(this).siblings().slideToggle();
  this.classList.toggle('active');
});

/* 07.마이캐논 */
function addContents(){
  const tableTag = document.querySelector('.coupon_table');
  tableTag.innerHTML += "<tr><td>번호</td><td>구분</td><td>쿠폰명</td><td>할인액(율)</td><td>유효기간</td><td>적용상품</td><td>디바이스</td></tr>";
}

function removeContents(){
  const tableTag = document.querySelector('.coupon_table tr');
  tableTag.remove();
}


























