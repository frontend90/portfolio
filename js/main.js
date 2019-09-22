/*---------------- фильтр portfolio   ---------------*/
$(function () {
  $('.portfolio-nav a').click(function () {
    var get_id = this.id;
    var get_current = $('.portfolio-card.' + get_id);
    $('.portfolio-card').not(get_current).hide(500);
    get_current.show(500);
  });
  $('#all').click(function () {
    $('.portfolio-card').show(500);
  });
});
/*------------ modal project  --------------------*/
$('.portfolio-card').click(function () {
  $('.project').toggleClass('show');
  $('body').toggleClass('no-scroll');
});
$('.close').click(function () {
  $('.project').removeClass('show');
  $('body').removeClass('no-scroll');
});
/*------------ modal resume  --------------------*/
$('#resume').click(function () {
  $('.resume').toggleClass('show');
  $('body').toggleClass('no-scroll');
});
$('.close').click(function () {
  $('.resume').removeClass('show');
  $('body').removeClass('no-scroll');
});