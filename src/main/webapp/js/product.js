
function findProduct() {
	// Specific route in OCP, need to make this generic in some way
	var rootURL = "http://productservice-coffeeshop.192.168.64.2.nip.io/ProductService/api";

	} else {
		$.ajax({
			type: 'GET',
			cache: false,
			crossDomain: true,
			contentType: 'application/json',
			url: rootURL +"/products",
			dateType: "json",
			data: signinFormToJSON(),
			success: renderProducts,
			error: errorProduct
		});
}



function renderProducts(data) {
	// JAX-RS serializes an empty list as null, and a 'collection of one' as an object (not an 'array of one')
	var list = data == null ? [] : (data instanceof Array ? data : [data]);

	$('#productList li').remove();
	$.each(list, function(index, product) {
		$('#productList').append('<li><a href="#" data-identity="' + product.id + '">'+ product.name + '</a></li>');
		});
}

function errorProduct(jqXHR) {
	$('#errorProduct').text( jqXHR.responseJSON );
}