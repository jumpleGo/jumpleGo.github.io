$(function () {

    $(".add_btn").on('click', function (e) {
        let src = $('.img').val();
        let cryptoname = $('.price').val();
        let income = $('.name').val();
        e.preventDefault();
        $(".orders").append(
            "<div class='info_pack'> <div class='info_pack_img'>" +
            " <img style='width: 30px;height:30px;'" +
            " src='images/" + src + " \'>" + "</div><div" + " class='info_pack_text'" +
            "> <span>" +
            cryptoname +
            "</span></div><div" + " class='info_pack_money'> <span> + " +
            income +
            "$ </span></div></div>");
    })
});
$('.main-carousel').flickity({
    freeScroll: true,
    contain: true,
    prevNextButtons: false,
    pageDots: false,
    cellAlign: 'left',
    contain: true
});
