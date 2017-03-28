function openModal(selector,message){

	var $body = $("#"+selector +" .modalInner");
	
	$body.html("");
	$body.html(message);
	$("#"+selector).modal();

}

module.exports = openModal;