URL = 'http://beautifulaltruism.dev:5000/causes'


var currentDonationAmount = 25;

$(document).ready(
	function() {
		$("#center-donate-url").click(function(){
			checkout();
		});
		var currCause = randomElement(causes);
		$('body').css('background-image', 'url(\'' + currCause.img + '\')');
		$("#center-title").html("<a href=\"" + currCause.url + "\"><h1>" + currCause.name + "</h1></a>");
		$("#center-description").html(currCause.description);
		$("#center-assertion").html(currCause.assertion);

		slider = document.getElementById('slider');;

		noUiSlider.create(slider, {
			start: 25,
			connect: 'lower',
			step: 1,
			range: {
			'min': 5,
			'max': 500
			}

		});

		var donationAmount = document.getElementById('donation-amount');

		slider.noUiSlider.on('update', function( values, handle ) {
			console.log(slider.noUiSlider.get());
			currentDonationAmount = values[handle];
			donationAmount.innerHTML = "$" + values[handle];
		});
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
  	console.log(currentDonationAmount);
    // Open Checkout with further options
    handler.open({
      name: 'Payment Portal',
      description: 'Help the cause',
      amount: currentDonationAmount * 100
    });
    // e.preventDefault();

  // Close Checkout on page navigation
    handler.close();
}