"use strict";

$(function () {
  var src;
  $(".add_btn").on('click', function (e) {
    var cryptoname = $('.price').val();
    var income = $('.name').val();
    e.preventDefault();
    $(".orders").append("<div class='info_pack'> <div class='info_pack_img'>" + " <img style='width: 30px;height:30px;'" + " src='" + src + " \'>" + "</div><div" + " class='info_pack_text'" + "> <span>" + cryptoname + "</span></div><div" + " class='info_pack_money'> <span> + " + income + "$ </span></div></div>");
  });
  $('img').click(function () {
    src = $(this).attr('src');
    console.log(src);
  });
});
$('.main-carousel').flickity({
  groupCells: true,
  prevNextButtons: false,
  pageDots: false,
  cellAlign: 'center',
  contain: true
});