function signIn() {
	if( $('#name').val() == '' || 
		$('#gender').val() =='' ||
		$('#age').val() == '' || 
		$('#email').val() =='' ||
		$('#passwordInput').val() == '' ) {
		$('#errorSignin').text( "Please fill all fields...!!!!!!" );
	} else {
		$.ajax({
			type: 'POST',
	        cache: false,
	        crossDomain: true,
			contentType: 'application/json',
			url: registerService +"/register/",
			dateType: "json",
			data: signinFormToJSON(),
			success: sucessRegistration,
			error: errorRegistration
		});
	}
}


function sucessRegistration(data) {
	$('#emailAdr').val( $('#email').val() );
	$('#password').val( $('#passwordInput').val() );
	$('#userRegistration').hide();
	callLoginService();
}

function errorRegistration(jqXHR) {
	$('#errorSignin').text( jqXHR.responseJSON );
}

// Helper function to serialize all the form fields into a JSON string
function signinFormToJSON() {
	return JSONObject =  JSON.stringify({
        "username": $('#name').val(),
        "gender": $('#gender').val(),
        "age": $('#birthdate').val(),
		"emailAdr": $('#email').val(),
		"password": $('#passwordInput').val()
		});
}