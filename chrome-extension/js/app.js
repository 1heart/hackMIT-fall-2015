URL = 'http://beautifulaltruism.dev:5000/causes'


$(document).ready(
	function() {
		$("#center-donate-url").click(function(){
			checkout();
		});
		var currCause = randomElement(causes);
		$('body').css('background-image', 'url(\'' + currCause.img + '\')');
		$("#center-title").html("<h1>" + currCause.name + "</h1>");
		$("#center-description").html(currCause.description);
		$("#center-assertion").html(currCause.assertion);
	}
);

function randomElement(obj) {
	var keys = Object.keys(obj);
	return obj[keys[Math.floor(Math.random()*keys.length)]];
}

function checkout() {
  	var handler = StripeCheckout.configure({
    key: 'pk_test_yHDOg6r7hbNWG5urCMtEW2zx',
    image: '/img/documentation/checkout/marketplace.png',
    locale: 'auto',
    token: function(token) {
      // Use the token to create the charge with a server-side script.
      // You can access the token ID with `token.id`
    }
  });

    // Open Checkout with further options
    handler.open({
      name: 'Payment Portal',
      description: 'Help the cause',
      amount: 2000
    });
    // e.preventDefault();

  // Close Checkout on page navigation
    handler.close();
}