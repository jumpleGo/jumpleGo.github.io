$('.add_btn').click(function (e) {
    $('.modal').addClass('active');
    e.preventDefault();
});
$('.buttons_left').click(function (e) {
    $('.modal').removeClass('active');

});
$('.back').click(function (e) {
    $('.modal1').removeClass('active');

});
$(document).on('click', '.info_pack', function () {
    $('.modal1').addClass('active');
});
