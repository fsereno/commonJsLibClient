
function checkForm(obj) {
	
	$('#'+obj.id).validator().on('submit', obj, function (e) {
	  if (e.isDefaultPrevented()) {
	  
	    //console.log('errors')
	  
	  } else {
	  	
	  	e.preventDefault();

	  	$(this).find('button[type=submit]').prop('disabled', true);

	  	//console.log($(this));

		var data = $(this).serializeArray();
		require('./doAjax')(obj,data);
     
	  }
	
    });

}

module.exports = checkForm;
