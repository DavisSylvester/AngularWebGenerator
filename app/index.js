var generators = require('yeoman-generator');
var mkdir = require('mkdirp');




module.exports = generators.Base.extend({ 	



	method1: function(){

		console.log('Method1 has run!');

		console.log('Dest Dir: ' + destDir);
		console.log('Source Dir: ' + srcDir);	

		var destDir = this.destinationRoot();
		var srcDir = this.sourceRoot();

		var appDir = destDir + '/app/';
		var sourceDir = destDir + '/src/';

		mkdir(appDir);
		mkdir(sourceDir);

	},

	makeDirectoryStructure: function(){
		var destDir = this.destinationRoot();
		var srcDir = this.sourceRoot();

		var appDir = destDir + '/app/';
		var sourceDir = destDir + '/src/';

		mkdir(appDir);
		mkdir(sourceDir);
	}


});

