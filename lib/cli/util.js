module.exports = {
	die: function die(code, msg) {
		console.error(msg);
		process.exit(code);
	},
	exitCodes: {
		invalidUsage: 1,
		invalidResource: 1
	},
}
