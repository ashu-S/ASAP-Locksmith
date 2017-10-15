$(document).ready(function() {

  $('.add').click(function() {
    var task = $('#input-form').val();
    var newDiv = "<div class='row'><div class='col-md-9'><input class='to-do' type='text' name='task' placeholder='Edit your task' value='" + task + "'></div><div class='col-md-3 check-button'><button class='check-btn' type='button' onclick='check()'><p class='check-text'>Check</p></div></div></div>";

    $(newDiv).appendTo(".tasks");
    $('#input-form').val('');
  });

  $(document).on('click', '.check-btn', function() {
    if (!$('img', this).length) {
      var checkmarkImage = "<img class='checkmark' src='http://uxrepo.com/download.php?img=static/icon-sets/ionicons/svg/checkmark.svg&color=FFFFF0'></img>";
      $('.check-text', this).hide();
      $(checkmarkImage).appendTo(this);
    }
    $(this).parents().eq(1).find('.to-do').css('background-color', '#E0FFEB');
    $(this).parents().eq(1).appendTo('.completed');
  });

});
