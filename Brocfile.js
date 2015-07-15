var merge = require('broccoli-merge-trees');
var sassCompile = require ('broccoli-sass');

var includePaths = [
   'assets',
   'bower_components/reset-css',
   'bower_components/fontawesome/scss',
   'bower_components/bourbon/app/assets/stylesheets',
   'bower_components/neat/app/assets/stylesheets'
];

var compiledCss = sassCompile(includePaths, 'app.scss', 'app.css');

module.exports = merge (['public','assets/js', compiledCss]);
