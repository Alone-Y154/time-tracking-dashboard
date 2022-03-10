

$(document).on('click','.time', function() {

  $('.time').removeClass('active');
  $(this).addClass('active');

});

$('.daily').on('click', function () {
  $('.workhrs').html('5hrs');
  $('.worktime').html('Last Week - 7hrs');
  $('.playhrs').html('1hrs');
  $('.playtime').html('Last Week - 2hrs');
  $('.studyhrs').html('0hrs');
  $('.studytime').html('Last Week - 1hrs');
  $('.exercisehrs').html('1hrs');
  $('.exercisetime').html('Last Week - 1hrs');
  $('.socialhrs').html('1hrs');
  $('.socialtime').html('Last Week - 3hrs');
  $('.selfhrs').html('0hrs');
  $('.selftime').html('Last Week - 1hrs');
});

$('.monthly').on('click', function () {
  $('.workhrs').html('103hrs');
  $('.worktime').html('Last Week - 128hrs');
  $('.playhrs').html('23hrs');
  $('.playtime').html('Last Week - 29hrs');
  $('.studyhrs').html('13hrs');
  $('.studytime').html('Last Week - 19hrs');
  $('.exercisehrs').html('11hrs');
  $('.exercisetime').html('Last Week - 18hrs');
  $('.socialhrs').html('21hrs');
  $('.socialtime').html('Last Week - 23hrs');
  $('.selfhrs').html('7hrs');
  $('.selftime').html('Last Week - 11hrs');
});

$('.weekly').on('click', function () {
  $('.workhrs').html('32hrs');
  $('.worktime').html('Last Week - 36hrs');
  $('.playhrs').html('10hrs');
  $('.playtime').html('Last Week - 8hrs');
  $('.studyhrs').html('4hrs');
  $('.studytime').html('Last Week - 7hrs');
  $('.exercisehrs').html('4hrs');
  $('.exercisetime').html('Last Week - 5hrs');
  $('.socialhrs').html('5hrs');
  $('.socialtime').html('Last Week - 10hrs');
  $('.selfhrs').html('2hrs');
  $('.selftime').html('Last Week - 2hrs');
});
