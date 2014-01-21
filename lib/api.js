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

module.exports = {
	call: callApi
};
