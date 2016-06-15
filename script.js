$(document).ready(function() {
  $('img').click(function() {
    $('img').hide();
  });
  $('.checklist').dblclick(function() {
$(this).css('textDecoration', 'line-through');
  });
  $('.directions').mouseenter(function() {
    $(this).css('color', 'red');
  });
  $('.directions').mouseleave(function() {
    $(this).css('color', 'white');
  });
});