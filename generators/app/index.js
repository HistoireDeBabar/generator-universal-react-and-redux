'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.Base.extend({
  prompting: function () {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the ' + chalk.red('generator-universal-react-and-redux') + ' generator!'
    ));

    var prompts = [
      {
        type: 'input',
        name: 'projectName',
        message: 'Please enter the name of your project',
        default: 'universal-webapp',
      },
      {
        type: 'input',
        name: 'projectDescription',
        message: 'Please enter a description of your project',
        default: 'universal-webapp',
      },
      {
        type: 'input',
        name: 'projectAuthor',
        message: 'Please enter the author of this project',
        default: '',
      },
      {
        type: 'input',
        name: 'projectRepo',
        message: 'Please enter the repository of this project',
        default: '',
      },
      {
        type: 'list',
        name: 'includeSass',
        message: 'Do you wish to include template sass folders, structured to the BEM methodology? (this includes sass/css loaders in the webpack config)',
        default: 1,
        choices: ['no', 'yes'],
      },
    ];

    return this.prompt(prompts).then(function (props) {
      // To access props later use this.props.someAnswer;
      this.props = props;
    }.bind(this));
  },

  writing: function () {
    // Recursively copies the src and test folders
    this.directory('./src/', './src');
    this.directory('./test/', './test');
    this.directory('./scripts/', './scripts');
    // Add the files that wont change depending on whether sass is required.
    var files = ['index.js', 'gulpfile.js'];
    // List the files that Sass is changed in.
    var variants = ['server.jsx', 'webpack.config.js', 'webpack.prod.config.js'];
    // PackageJson with arguments & depending on whether sass is required.
    var packageArg;
    if (this.props.includeSass === 'no') {
      packageArg = {
        path: '_package.json',
        dest: 'package.json',
      };
      // index to go in the src folder is a special case so is wrote seperatley.
      this.fs.copy(
        this.templatePath('index.src.jsx'),
        this.destinationPath('./src/index.jsx')
      );
    } else {
      // Specific Sass Extensions that need more
      // logic than putting sass on the end.
      packageArg = {
        path: '_package.json.sass',
        dest: 'package.json',
      };
      this.fs.copy(
        this.templatePath('index.src.jsx.sass'),
        this.destinationPath('./src/index.jsx')
      );
      // Sass folder
      this.directory('./scss/', './scss');
    }
    this.fs.copyTpl(
      this.templatePath(packageArg.path),
      this.destinationPath(packageArg.dest),
      {
        projectName: this.props.projectName,
        projectDescription: this.props.projectDescription,
        projectAuthor: this.props.projectAuthor,
        projectRepo: this.props.projectRepo,
      }
    );
    for (var i = 0; i < files.length; i++) {
      this.fs.copy(
        this.templatePath(files[i]),
        this.destinationPath(files[i])
      );
    }
    for (var i = 0; i < variants.length; i++) {
      var file = variants[i];
      var path;
      if (this.props.includeSass === 'yes') {
        path = file + '.sass';
      } else {
        path = file;
      }
      this.fs.copy(
        this.templatePath(path),
        this.destinationPath(file)
      );
    }
    // Copy all dot files.
    this.fs.copy(
      this.templatePath('.*'),
      this.destinationRoot()
    );
  },

  install: function () {
    this.installDependencies({ bower: false });
  }
});
