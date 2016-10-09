var ClosureCompiler = require('google-closure-compiler').compiler;

console.log(ClosureCompiler.COMPILER_PATH); // absolute path the compiler jar
console.log(ClosureCompiler.CONTRIB_PATH); // absolute path the contrib folder which contains

var closureCompiler = new ClosureCompiler({
	compilation_level: 'SIMPLE',
	warning_level: 'VERBOSE',
	//js: 'generated/IdApp.js',
	//js: '"./generated/**.js"',
    js: ["./generated/autogenerated/AutoChallange.js",
		"./generated/challengeData.js",
		"./generated/EventDispatcher.js",
		"./generated/IdApp.js",
		"./generated/IdModel.js",
		"./generated/MainHtml.js",
		"./generated/utils.js"
    	],
	js_output_file: 'www/js/IdApp.min.js'
});

var compilerProcess = closureCompiler.run(function(exitCode, stdOut, stdErr) {
	console.log(exitCode);
	console.log(stdOut);
	console.log(stdErr);
  //compilation complete
});
