
// using http://1000hz.github.io/bootstrap-validator/

function validateForm(obj) {
	
	$('#'+obj.id).validator();

}

module.exports = validateForm;
