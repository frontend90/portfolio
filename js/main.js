/*---------------- фильтр portfolio   ---------------*/
$(function () {
  $('.portfolio-nav a').click(function (event) {
    event.preventDefault();
    var get_id = this.id;
    var get_current = $('.portfolio-card.' + get_id);
    $('.portfolio-card').not(get_current).hide(500);
    get_current.show(500);
  });
  $('#all').click(function () {
    $('.portfolio-card').show(500);
  });
});
/*-------------     modal windows   -------------*/
$('[data-modal]').click(function () {
  event.preventDefault();

  let $this = $(this);
  let modalId = $this.data('modal');

  $(modalId).addClass('show');
  $('body').addClass('no-scroll');
});

$('.close').click(function () {
  event.preventDefault();

  let $this = $(this);
  let modalParent = $this.parents('.modal');

  modalParent.removeClass('show');
  $('body').removeClass('no-scroll');
});