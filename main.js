$('.item').click(function() {
  $('dropdownmenu').removeClass('open');
  var dropDownMenu = $(this).children('.dropdownmenu');
  dropDownMenu.addClass('open');
});
