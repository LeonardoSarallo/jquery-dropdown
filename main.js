$('.item').click(function() {
  // $('.dropdownmenu').removeClass('open');
  var dropMenu = $(this).children('.dropdownmenu');


  if (dropMenu.hasClass('open')) {
    dropMenu.removeClass('open')
  }
  else {
    $('.dropdownmenu').removeClass('open');
    dropMenu.addClass('open')

  }

});
