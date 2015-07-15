module.exports = merge (['public', compiledCss]);
var merge = require('broccoli-merge-trees');
var sassCompile = require ('broccoli-sass');
var compiledCSS = sassCompile(includePaths, 'app.scss', 'app.css');

var includePaths = [
   'assets',
   'bower_components/reset-css',
   'bower_components/fontawesome/scss',
   'bower_components/bourbon/app/assets/stylesheets',
   'bower_components/neat/app/assets/stylesheets'


];
