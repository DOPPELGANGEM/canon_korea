'use strict';

/* 07.마이캐논 */
function addContents(){
  var tableTag = document.querySelector('.coupon_table');
  tableTag.innerHTML += "<tr><td>번호</td><td>구분</td><td>쿠폰명</td><td>할인액(율)</td><td>유효기간</td><td>적용상품</td><td>디바이스</td></tr>";
}

function removeContents(){
  var tableTag = document.querySelector('.coupon_table tr');
  tableTag.remove();
}