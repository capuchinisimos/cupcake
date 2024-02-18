$("#navToggle").click(function() {
    $(this).toggleClass("active");
    $(".overlay").toggleClass("open");
    // this line ▼ prevents content scroll-behind
    $("body").toggleClass("locked"); 
});
$(".overlay li a").click(function() {
    $("#navToggle").removeClass("active");
    $(".overlay").removeClass("open");
    $("body").removeClass("locked"); 
});
/*Релакс эффект*/
// Also can pass in optional settings block
  var rellax = new Rellax('.rellax', {
    center: true,
    wrapper: null,
    round: true,
    vertical: true,
    horizontal: true
  });
/*------*/ 
/*3d ховер на картинки*/
$(document).ready(function(){
			$(".portfolio-item").hover3d({
				selector: ".portfolio-item__body",
				sensitivity: 10,
				perspective: 1000,
			});
		});

$(document).ready(function(){
			$(".team-item").hover3d({
				selector: ".team-item__body",
				sensitivity: 20,
				perspective: 1000,
			});
		});
/*-------*/
/*Открыть первое модальное окно*/
// open modal
var wrap = $('#wrapper'),
  btn = $('.open-modal-btn'),
  modal = $('.cover, .modal, .content'),
  close = $('#close_modal'),
  state = {
    "close": 0
  };

btn.on('click', function() {
  modal.fadeIn();
});
// close modal
$('.modal').click(function() {
  wrap.on('click', function(event) {
    var select = $('.content');
    if (!$(event.target).closest(select).length && !state.close)
      modal.fadeOut();
    state.close = 0;
    $(this).unbind('click');
  });
});

close.on('click', function() {
  modal.fadeOut();
  state.close = 1;
});
/*------*/
/*Открыть второго модальное окно*/
// open modal
var wrap1 = $('#wrapper-1'),
  btn1 = $('.open-modal-btn-1'),
  modal1 = $('.cover-1, .modal-1, .content-1'),
  close = $('#close_modal-1'),
  state = {
    "close": 0
  };

btn1.on('click', function() {
  modal1.fadeIn();
});

/*close modal*/
$('.modal-1').click(function() {
  wrap1.on('click', function(event) {
    var select = $('.content-1');
    if (!$(event.target).closest(select).length && !state.close)
      modal1.fadeOut();
    state.close = 0;
    $(this).unbind('click');
  });
});

close.on('click', function() {
  modal1.fadeOut();
  state.close = 1;
});
/*------*/
/*Открыть третьего модальное окно*/
// open modal
var wrap2 = $('#wrapper-2'),
  btn2 = $('.open-modal-btn-2'),
  modal2 = $('.cover-2, .modal-2, .content-2'),
  close = $('#close_modal-2'),
  state = {
    "close": 0
  };

btn2.on('click', function() {
  modal2.fadeIn();
});

/*close modal*/
$('.modal-2').click(function() {
  wrap2.on('click', function(event) {
    var select = $('.content-2');
    if (!$(event.target).closest(select).length && !state.close)
      modal2.fadeOut();
    state.close = 0;
    $(this).unbind('click');
  });
});

close.on('click', function() {
  modal2.fadeOut();
  state.close = 1;
});
/*------*/