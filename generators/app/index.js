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
    ];

    return this.prompt(prompts).then(function (props) {
      // To access props later use this.props.someAnswer;
      this.props = props;
    }.bind(this));
  },

  writing: function () {
    this.fs.copyTpl(
      this.templatePath('_package.json'),
      this.destinationPath('package.json'),
      {
        projectName: this.projectName,
        projectDescription: this.projectDescription,
        projectAuthor: this.projectAuthor,
        projectRepo: this.projectRepo,
      }
    );
    this.fs.copy(
      this.templatePath('index.js'),
      this.destinationPath('index.js')
    );
    this.fs.copy(
      this.templatePath('server.jsx'),
      this.destinationPath('server.jsx')
    );
    this.fs.copy(
      this.templatePath('webpack.*'),
      this.destinationRoot()
    );
    // Copy all dot files.
    this.fs.copy(
      this.templatePath('.*'),
      this.destinationRoot()
    );
    // Recursively copies the src and test folders
    this.directory('./src/', './src');
    this.directory('./test/', './test');
  },

  install: function () {
    this.installDependencies({ bower: false });
  }
});
