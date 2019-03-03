"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

$(function () {
  $(".add_btn").on('click', function (e) {
    var src = $('.img').val();
    var cryptoname = $('.price').val();
    var income = $('.name').val();
    e.preventDefault();
    $(".orders").append("<div class='info_pack'> <div class='info_pack_img'>" + " <img style='width: 30px;height:30px;'" + " src='images/" + src + " \'>" + "</div><div" + " class='info_pack_text'" + "> <span>" + cryptoname + "</span></div><div" + " class='info_pack_money'> <span> + " + income + "$ </span></div></div>");
  });
});
$('.main-carousel').flickity(_defineProperty({
  freeScroll: true,
  contain: true,
  prevNextButtons: false,
  pageDots: false,
  cellAlign: 'left'
}, "contain", true));