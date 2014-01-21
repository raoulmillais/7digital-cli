var _ = require('lodash');
var schema = require('7digital-api').schema;
var cliUtil = require('./util');

module.exports = function handleArguments(argv) {
	var action;
	var resource;
	var params;
	var metaData;

	if (argv._.length < 2) {
		return cliUtil.die(cliUtil.invalidUsage,
			'You must supply both a resource and an action');
	}

	resource = _.find(schema.resources, function matchResource(resourceSchema) {
		return resourceSchema.resource === argv._[0];
	});

	if (!resource) {
		return cliUtil.die(cliUtil.invalidResource,
			'Unrecognised API resource');
	}

	action = _.find(resource.actions, function matchAction(actionMap) {
		var hyphenatedApiCall = actionMap
			.apiCall
			.replace(/([a-z])([A-Z])/g, '$1-$2')
			.toLowerCase();

		return hyphenatedApiCall === argv._[1].toLowerCase();
	});

	if (!action) {
		return cliUtil.die(cliUtil.invalidResource,
			'Unrecognised action');
	}

	params = _.cloneDeep(argv);
	delete params._;
	delete params['$0'];

	metaData =  {
		klass: _.findKey(schema.resources, function resourceMatching(res) {
			return res === resource;
		}),
		method: action.methodName,
		params: params
	};

	return metaData;
};
