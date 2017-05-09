/**
 * Created by masikann on 5/8/17.
 */

//var require = require('requirejs');
(function(global) {

    var mainFunction = function(){
        return {
            sayHi: function (name) {
                return 'hi ' + name + ' - from require';
            }
        };
    };

    if(typeof define === 'function' && define.amd) {
        define(mainFunction);
    }
    else{
        return mainFunction();
    }

})(this);