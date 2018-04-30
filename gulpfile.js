'use strict';

var gulp = require('gulp');
var denariicoreTasks = require('denariicore-build');

denariicoreTasks('p2p', {skipBrowser: true});

gulp.task('default', ['lint', 'coverage']);
