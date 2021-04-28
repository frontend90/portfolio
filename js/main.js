/*********  burger ************/
let user_icon = document.querySelector('.burger');
user_icon.addEventListener("click", function (e) {
  let user_menu = document.querySelector('.main-menu');
  let user_phone = document.querySelector('.header-phone');
  user_menu.classList.toggle('show');
  user_icon.classList.toggle('active');
  user_phone.classList.toggle('active');
});

document.documentElement.addEventListener("click", function (e) {
  if (!e.target.closest('.burger')) {
    let user_menu = document.querySelector('.main-menu');
    let user_phone = document.querySelector('.header-phone');
    user_menu.classList.remove('show');
    user_icon.classList.remove('active');
    user_phone.classList.remove('active');
  }
});

$('.main-menu__link').click(function () {
  $('.main-menu').removeClass('show');
  $('.burger').removeClass('active');
  $('.header-phone').removeClass('active');
});

/*************  social animation   ***********/
$('.shareSocial').click(function () {
  $('.shareSocial__link').toggleClass('active');
});

/*****************    изменение html      *****************************/
$(window).resize(function (event) {
  adaptive_function();
});
function adaptive_header(w, h) {
  var headerMenu = $('.main-menu');/* куда закинуть блок */
  var headerSocial = $('.menu_btn');/* блок, который закинуть */
  if (w < 701) {/* ширина */
    if (!headerSocial.hasClass('done')) {
      headerSocial.addClass('done').appendTo(headerMenu);
    }
  } else {
    headerSocial.removeClass('done').appendTo($('.menu__btn'));/* вернуть блок на прежнее место */
  }
}

function adaptive_function() {
  var w = $(window).outerWidth();
  var h = $(window).outerHeight();
  adaptive_header(w, h);
}
adaptive_function();

/*************  buttons (loadMore and ShowLess) ***************/
$(document).ready(function () {
  $('.portfolio-item:lt(6)').show(); //изначально кол. показывает
  $('#loadMore').click(function () {
    $('.portfolio-item:lt(40)').show(500);  //показывает кол. при клике
  });
  $('#showLess').click(function () {
    $('.portfolio-item').not(':lt(6)').hide(200); //показывает кол. при клике
  });
});

/*********** scroll  ****************/
$("a.scroll-to").on("click", function (e) {
  e.preventDefault();
  var anchor = $(this).attr('href');
  $('html, body').stop().animate({
    scrollTop: $(anchor).offset().top - 0
  }, 800);
});

/*************   jkit-parallax   **************/
$(document).ready(function () {
  $('.hireMe__wrap').jKit();
});

/***********  modals (hireMe, resume)   ********************/
$('.btn-hireMe').click(function () {
  $('.hireMe').addClass('show');
  $('.resume').removeClass('show');
  $('body').addClass('no-scroll');
});

$('.close').click(function () {
  $('.hireMe').removeClass('show');
  $('.resume').removeClass('show');
  $('body').removeClass('no-scroll');
});

$('.btn-resume').click(function () {
  $('.resume').addClass('show');
  $('.hireMe').removeClass('show');
  $('body').addClass('no-scroll');
});

$('.close').click(function () {
  $('.resume').removeClass('show');
  $('.hireMe').removeClass('show');
  $('body').removeClass('no-scroll');
});

/***************    modal (card)  *******************/
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

/*************  button print     *************/
function printDiv(divName) {
  var printContents = document.getElementById(divName).innerHTML;
  var originalContents = document.body.innerHTML;

  document.body.innerHTML = printContents;
  window.print();
  document.body.innerHTML = originalContents;
}
