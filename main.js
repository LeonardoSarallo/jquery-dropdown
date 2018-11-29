$('.item').click(function() {

  var dropMenu = $(this).children('.dropdownmenu');


  if (dropMenu.hasClass('open')) {
    dropMenu.removeClass('open')
  }
  else {
    $('.dropdownmenu').removeClass('open');
    dropMenu.addClass('open')

  }

});
$('.item').mouseenter(function() {
  var dropMenu = $(this).children('.dropdownmenu');
  dropMenu.addClass('open');

});

$('.item').mouseleave(function() {
  var dropMenu = $(this).children('.dropdownmenu');
  dropMenu.removeClass('open');

});
