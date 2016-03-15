'use strict';

// var fs = require('fs'),
    // path = require('path');
var t1 = require(__dirname+'/t1.js');
// var parent_path = path.dirname(module.parent.filename);
// var cwd = process.argv[0];


module.exports = function (str, opts) {
	if (typeof str !== 'string') {
		throw new TypeError('Expected a string');
	}

	opts = opts || {};
	var outopts = opts.postfix || 'rainbows';

	// console.log(outopts);
	// console.log(str);
	t1(str);	
	// console.log(path.resolve('./')); //path of caller
	// console.log(path.resolve(__dirname)); //path of module

};
