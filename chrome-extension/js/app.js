causes = {
	"child_with_book": {
		"name": "Name of cause",
		"assertion": "Do good things.",
		"description": "Pellentesque consectetur lectus eget consectetur commodo. In varius sollicitudin magna sit amet euismod.",
		"img": "http://harambeeusa.org/wp/wp-content/uploads/2010/05/Child_with_book.jpg",
		"donate-url": "https://google.com"
	}
}

$(document).ready(
	function() {
		var currCause = randomElement(causes);
		$('body').css('background-image', 'url(\'' + currCause.img + '\')');
		$("#center-title").html("<h1>" + currCause.name + "</h1>");
		$("#center-description").html(currCause.description);
		$("#center-assertion").html(currCause.assertion);
		$("#center-donate-url").attr('href', currCause['donate-url']);
	}
);


function randomElement(obj) {
	var keys = Object.keys(obj);
	return obj[keys[Math.floor(Math.random()*keys.length)]];
}