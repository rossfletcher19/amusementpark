$(document).ready(function() {
  var height = parseInt(prompt("How tall are you?"));

  if (height >= 60) {
    $('#short').show();
    $('#tall').show();
  } else if (height < 60) {
    $('#short').show();
    $('#tall').hide();
  }
});
