// EJS Render Demo

// required libraries

require('shelljs/global');
var ejs = require('ejs'),
	fs = require('fs'),
	path = require('path');
	
// set vars	

var HTMLlocals = {
	"title": "My EJS Render Demo",
	"author": "@dylanized",
};

var CSSlocals = {
	"bgdColor": "green",
	"textColor": "yellow",
	"open": "{{",
	"close": "}}"
};

// generate new files

render_file('alpha/index.ejs', 'output/index.html', HTMLlocals);
render_file('alpha/style.css.ejs', 'output/style.css', CSSlocals);

// helper functions

function render_file(sourcefile, outputfile, locals) {
	var contents = returnEJS(sourcefile, locals);
	fs.writeFileSync(outputfile, contents, 'utf-8');
}

function returnEJS(sourcefile, locals) {
	if (test('-f', sourcefile)) {
		var thisEJS = fs.readFileSync(sourcefile, 'utf-8');
		thisEJS = thisEJS.trim();
		return ejs.render(thisEJS, locals);
	}
}