#!/usr/bin/env node
'use strict';

var meow = require('meow');
var nucleotide = require('./');

// var cli = meow([
// 	'Usage',
// 	'  $ nucleotide [input]',
// 	'',
// 	'Options',
// 	'  --foo  Lorem ipsum. [Default: false]',
// 	'',
// 	'Examples',
// 	'  $ nucleotide',
// 	'  unicorns & rainbows',
// 	'  $ nucleotide ponies',
// 	'  ponies & rainbows'
// ]);

// console.log(nucleotide(cli.input[0] || 'unicorns'));

var cli = meow(`
	Usage
	  $ nucleotide <input>

	Options
	  -r, --rainbow  Include a rainbow

	Examples
	  $ nucleotide unicorns --rainbow
	  🌈 unicorns 🌈
`, {
	alias: {
		r: 'rainbow'
	}
});
/*
{
	input: ['unicorns'],
	flags: {rainbow: true},
	...
}
*/
// console.log(cwd);
// console.log(__dirname);
// console.log(parent_path);
// console.log('nucleotide, run with arguments: ' +process.argv );
nucleotide(cli.input[0] || 'unicorns');
// nucleotide(cli.input[0], cli.flags);
// console.log();
// foo(cli.input[0], cli.flags);