	


$(document).ready(function(){
 $("#fonts").change(function() {
    //alert($(this).val());
    $('#par').css("font-family", $(this).val());

});

$("#sizes").change(function() {
    $('#par').css("font-size", $(this).val() + "px");
});
$("#b").click(function() {
	if ( $('#par').css('font-style') == 'italic'  ){
    $("#par").css("font-style", "normal");
	}else {
	$("#par").css("font-style", "italic");
	}
});
$("#c").click(function() {
	if ( $('#par').css('text-decoration-line') == 'underline'  ){
    $("#par").css("text-decoration-line", "none");
	}else {
	$("#par").css("text-decoration-line", "underline");
	}
});
$("#a").click(function() {
	if ( $('#par').css('font-weight') == '700'  ){
    $("#par").css("font-weight", "normal");
	}else {
	$("#par").css("font-weight", "700");
	}
});
});

