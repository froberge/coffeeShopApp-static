
function login() {
	if( $('#username').val() == '' || $('#password').val() =='' ) {
		$('#errorLogin').text( "Please fill all fields...!!!!!!" );
	} else {
		$.ajax({
			type: 'POST',
            cache: false,
            crossDomain: true,
			contentType: 'application/json',
			url:$.getJSON( "https://github.com/TheCatCoders/coffeeShopApp-static/blob/master/properties/config.properties", function( json ) {
				json.loginAPIBaseURL + loginAction
			}),
			dateType: "json",
			data: loginFormToJSON(),
			success: sucessLogin,
			error: errorLogin
		});
	}
}


function sucessLogin(data) {
	$('#loginInfo').hide();

	$('#name').val( data.username );
	$('#gender').val( data.gender );
	$('#birthdate').val( data.age );
	$('#email').val( data.emailAdr );

	$('#userInfo').show();
}

function errorLogin(jqXHR) {
	$('#errorLogin').text( jqXHR.responseText );
}

// Helper function to serialize all the form fields into a JSON string
function loginFormToJSON() {
	return JSON.stringify({
		"emailAdr": $('#emailAdr').val(),
		"password": $('#password').val()
		});
}
