var args = require('system').args;

if (args.length !== 2) {
	console.log('Usage: noexif <filename>');
	phantom.exit();
}

var page = require('webpage').create(),
	img = args[1];

page.viewportSize = {
	width: 30000,
	height: 30000
};

page.open(img, function() {
	var width = page.evaluate(function() {
			return document.body.getElementsByTagName('img')[0].width
		}),
		height = page.evaluate(function() {
			return document.body.getElementsByTagName('img')[0].height
		});

	page.clipRect = {
		top: 0,
		left: 0,
		width: width,
		height: height
	};

	page.render(img + '.noexif.jpg', {
		quality: 100
	});

	phantom.exit();
});
