var describe = require('tape');
var argv = require('../lib/cli/argv');

describe('argv should check for required arguments', function (t) {

	t.plan(2);

	var result = argv({ _: [ 'release', 'by-date' ] });

	t.equal(result.klass, 'Releases');
	t.equal(result.method, 'getByDate');

});
