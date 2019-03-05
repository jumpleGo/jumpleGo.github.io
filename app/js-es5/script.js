"use strict";

$(function () {
  var src;
  var cryptoname;
  $(".add_btn").on('click', function (e) {
    var price1 = $('.price1').val();
    var price2 = $('.price2').val();
    var colvo1 = $('.colvo1').val();
    var colvo2 = $('.colvo2').val();
    var income = price2 * colvo2 - price1 * colvo1;
    e.preventDefault();
    $(".orders").append("  <div class='info_pack'> <div class='info_pack_row'>  <div class='info_pack_row_img'>" + " <img style='width: 30px;height:30px;'" + " src='" + src + " \'>" + "</div><div" + " class='info_pack_row_text'" + "> <span>" + cryptoname + "</span></div></div><div" + " class='info_pack_money'> <span>  " + income + "$ </span></div></div>");
  });
  $('img').click(function () {
    src = $(this).attr('src');

    switch (src) {
      case 'images/LTC.png':
        cryptoname = "litecoin";
        break;

      case 'images/BTC.png':
        cryptoname = "bitcoin";
        break;

      case 'images/dash.png':
        cryptoname = "dash";
        break;

      case 'images/NEO.png':
        cryptoname = "neo";
        break;

      case 'images/XRP.png':
        cryptoname = "ripple";
        break;

      case 'images/BCH.png':
        cryptoname = "bitcoin cash ";
        break;

      case 'images/BNB.png':
        cryptoname = "binance coin";
        break;
    }
  });
});
$('.main-carousel').flickity({
  groupCells: true,
  prevNextButtons: false,
  pageDots: false,
  cellAlign: 'center',
  contain: true
});