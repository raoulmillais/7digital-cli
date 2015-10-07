'use strict';

function envOrDefault(envVar, def) {
	return process.env[envVar] || def;
}

module.exports = {
	consumerKey: envOrDefault('_7D_API_CLIENT_CONSUMER_KEY',
		'YOUR_KEY_HERE'),
	consumerSecret: envOrDefault('_7D_API_CLIENT_CONSUMER_SECRET',
		'YOUR_SECRET_HERE'),
	responseFormat: 'js'
};
