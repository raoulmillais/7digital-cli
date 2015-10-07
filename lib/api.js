var config = require('./config');
var api = require('7digital-api').configure({
	consumerkey: config.consumerKey,
	consumersecret: config.consumerSecret,
	format: config.responseFormat
});

function callApi(metaData, callback) {
	var res = new api[metaData.klass]();

	return res[metaData.method](metaData.params,  callback);
}

function describe(opts) {
	console.log('Supported API calls: \n');

	Object.keys(api.schema.resources).forEach(function (resourceName) {
		var res = api.schema.resources[resourceName];

		console.log(res.resource);
		res.actions.forEach(function (action) {
			console.log('\t', action.apiCall);
		});
	});

	console.log('\n');
}

module.exports = {
	call: callApi,
	describe: describe
};
