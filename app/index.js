var generators = require('yeoman-generator');
var mkdir = require('mkdirp');




module.exports = generators.Base.extend({ 	



	method1: function(){

       	var destDir = this.destinationRoot();
		var srcDir = this.sourceRoot();

		var appDir = destDir + '/app/';
		var sourceDir = destDir + '/src/';
		var images = appDir + 'assets/imgs/';
		var css = appDir + 'assets/css/';
		var js = appDir + 'assets/js/';

		var srcLESS = sourceDir + '/assets/less';
		var srcCSS = sourceDir + '/assets/css';

		mkdir(appDir);
		mkdir(sourceDir);
		mkdir(images);
		mkdir(css);
		mkdir(js);
		mkdir(srcLESS);
		mkdir(srcCSS);

		console.log('SourceDir: ' + srcDir);
		console.log('DestDir: ' + destDir);
		console.log('Method1 has run!');
	},

	makeDirectoryStructure: function(){
		var destDir1 = this.destinationRoot();
		var srcDir1 = this.sourceRoot();

		var appDir = destDir1 + '/app/';
		var sourceDir = destDir1 + '/src/';

		var fs = this.fs;

		fs.copy(srcDir1 + '/package.json', appDir + '../package.json');
		fs.copy(srcDir1 + '/bower.json', appDir + '../bower.json');
		fs.copy(srcDir1 + '/.bowerrc', appDir + '../.bowerrc');
		fs.copy(srcDir1 + '/gulpfie.js', appDir + '../gulpfile.js');
		fs.copy(srcDir1 + '/index.html', appDir + 'index.html');
		

		console.log('DestDir: ' + destDir1);
	}


});

