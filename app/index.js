var generators = require('yeoman-generator');
var mkdir = require('mkdirp');
var yosay = require('yosay');
var chalk = require('chalk');




module.exports = generators.Base.extend({ 	



	method1: function(){

       	var destDir = this.destinationRoot();
		var srcDir = this.sourceRoot();

		var appDir = destDir + '/app/';
		var sourceDir = destDir + '/src/';
		var images = appDir + 'assets/imgs/';
		var css = appDir + 'assets/css/';
		var js = appDir + 'assets/js/';
                var angularCore = js + 'Core/Controller';
                var viewFolder = appDir + 'views/';
                var navViewFolder = viewFolder + 'navagation/';
                var sharedViewFolder = viewFolder + 'shared/';

		var srcLESS = sourceDir + '/assets/less';
		var srcCSS = sourceDir + '/assets/css';

		mkdir(appDir);
		mkdir(sourceDir);
		mkdir(images);
		mkdir(css);
		mkdir(js);
                mkdir(angularCore);
		mkdir(srcLESS);
		mkdir(srcCSS);
                mkdir(navViewFolder);
                mkdir(sharedViewFolder);

		console.log('SourceDir: ' + srcDir);
		console.log('DestDir: ' + destDir);
		
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
                fs.copy(srcDir1 + '/less/custom.less', sourceDir + 'assets/less/custom.less');
		fs.copy(srcDir1 + '/app/angularFiles/app.js', appDir + 'assets/js/app.js');
                fs.copy(srcDir1 + '/app/angularFiles/routes.config.js', appDir + 'assets/js/routes.config.js');
                fs.copy(srcDir1 + '/app/angularFiles/Core/Controller/MainController.js', appDir + 'assets/js/Core/Controller/MainController.js');
                
                

		console.log('DestDir: ' + destDir1);
	},
        
        Init: function(){
            
            var message = chalk.green.bold("Welcome to PGF Starter")
            + chalk.white('An Angular Project with all the Cool stuff');

        this.log(yosay(message, { maxLength: 40 }));
        },
        
        InstallPackages: function(){
            this.bowerInstall();
            this.npmInstall();
        }


});

