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