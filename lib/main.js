exports.work = function(filename) {
	var path = require('path'),
		childProcess = require('child_process'),
		phantomjs = require('phantomjs'),
		binPath = phantomjs.path;

	filename = path.resolve(filename || process.argv[2]);

	var childArgs = [
		path.join(__dirname, 'exif-phantom.js'),
		filename
	];

	childProcess.execFile(binPath, childArgs, function(err, stdout, stderr) {
		if (err) {
			throw err;
		}
		if (stderr) {
			console.log(stderr);
		}
		if (stdout) {
			console.log(stdout);
		}
	});
};
