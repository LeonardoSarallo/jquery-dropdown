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
