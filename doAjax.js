function doAjax(obj,data) {

	var modal;
	
	$.ajax({
		url: obj.path,
		type: obj.method,
		dataType: obj.type,
		data: data
	})
	.done(function(result) {

		if (result.status === 'success') {

			$('#'+obj.id).trigger("reset");
			modal = obj.resultModalSuccess;

		} else if (result.status === 'error') {

			modal = obj.resultModalError;

		}

		require('./openModal.js')(modal,result.message);
		
	})
	.fail(function(result) {
		
	})
	.always(function(result) {

		$('#'+obj.id).find('button[type=submit]').prop('disabled', false);

		var $recapture = $('.g-recaptcha'),
			$recaptures = $recapture.length;

		if ($recaptures > 0) {

			$recapture.each(function(i){

				var recaptureId = i;

				require('./recaptureReset.js')(recaptureId);

			});
			
		}
	});
	
}

module.exports = doAjax;
