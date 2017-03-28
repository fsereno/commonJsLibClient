function renderRecaptureModule(){

	var $recapture = $('.g-recaptcha'),
		$recaptures = $recapture.length,
		siteKey,
		capId,
		widgetId;

	if ($recaptures > 0) {

		$recapture.each(function(){

			capId = $(this).attr('id');
			siteKey = $(this).data('sitekey');
			
			if($.trim($(this).html()).length === 0) {
				grecaptcha.render( capId, {'sitekey' : siteKey});		
			}
			
		
		});

	}

}

module.exports = renderRecaptureModule;