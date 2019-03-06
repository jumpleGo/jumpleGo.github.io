$(function () {
    let src;
    let cryptoname;



    $(".buttons_right").on('click', function (e) {

        let price1 = $('.price1').val();
        let price2 = $('.price2').val();
        let colvo1 = $('.colvo1').val();
        let colvo2 = $('.colvo2').val();

        let income = (price2 * colvo2) - (price1 * colvo1);

        e.preventDefault();
        $(".orders").append(
            "  <div class='info_pack'> <div class='info_pack_row'>  <div class='info_pack_row_img'>" +
            " <img style='width: 30px;height:30px;'" +
            " src='" + src + " \'>" + "</div><div" + " class='info_pack_row_text'" +
            "> <span>" +
            cryptoname +
            "</span></div></div><div" + " class='info_pack_money'> <span>  " +
            income +
            "$ </span></div></div>");
        $('.modal').removeClass('active');
        e.preventDefault();

    });
    $('img').click(function () {
        src = $(this).attr('src');
        $('.carousel-cell-img').hide();
        $(this).css({
            display: "block",

        });

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
        $(".main-carousel").append("<h3>You selected "
            cryptoname "</h3>");
    });
});

$('.add_btn').click(function (e) {
    $('.modal').addClass('active');
    e.preventDefault();
});
$('.buttons_left').click(function (e) {
    $('.modal').removeClass('active');

});
