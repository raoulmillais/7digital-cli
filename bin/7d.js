#! /usr/bin/env node

var cli = require('../lib/cli');
var argv = require('optimist').argv;
var api = require('../lib/api');
var metadata = cli.argv(argv);
var inspect = require('eyes').inspector({
	indent: 2,
	maxLength: 4096
});

api.call(metadata, function (err, res) {
	if (err) {
		return cli.util.die(666, err);
	}

	if (process.stdout.isTTY) {
		inspect(res);
	} else {
		console.log(JSON.stringify(res));
	}
	process.exit(0);
});

