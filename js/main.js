$(document).ready(function() {
	$('.btn_menu').click(function(){
		$('.menu ul').slideToggle();
	
	});


$('#mix-wrapper').mixItUp();

$("form").submit(function() {
  $.ajax({
   type: "GET",
   url: "../mail.php",
   data: $("form").serialize()
  }).done(function() {
   alert("Спасибо за заявку!");
   setTimeout(function() {
    $.fancybox.close();
   }, 1000);
  });
  return false;
 });



});