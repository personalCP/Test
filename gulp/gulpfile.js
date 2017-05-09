/**
 * Created by masikann on 5/9/17.
 */

var gulp = require('gulp');
var server = require('karma').Server;

gulp.task('test', function (done) {
    new server({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
    }, done).start();
});