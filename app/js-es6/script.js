$('.add_btn').click(function (e) {
    $('.modal').addClass('active');
    e.preventDefault();
});
$('.buttons_left').click(function (e) {
    $('.modal').removeClass('active');

});
