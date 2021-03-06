var ClosureCompiler = require('google-closure-compiler').compiler;

console.log(ClosureCompiler.COMPILER_PATH); // absolute path the compiler jar
console.log(ClosureCompiler.CONTRIB_PATH); // absolute path the contrib folder which contains

var closureCompiler = new ClosureCompiler({
	js: ["www/gen/**.js"
	],
	externs:"node_modules/react/dist/react-with-addons.js",
	compilation_level: 'SIMPLE', //ADVANCED SIMPLE
	//warning_level: 'VERBOSE',
	//js: 'www/gen/IdApp.js',
	//js: '"www/gen/**.js"',
	js_output_file: 'www/js/IdApp.min.js',
	debug: true
});

var compilerProcess = closureCompiler.run(function(exitCode, stdOut, stdErr) {
	console.log(exitCode);
	console.log(stdOut);
	console.log(stdErr);
  //compilation complete
});

