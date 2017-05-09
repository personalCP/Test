/**
 * Created by masikann on 5/9/17.
 */

(function(global) {

    var mainFunction = function(sayHiRequire){
        /*return {
         sayHiRequire: function () {
         return 'hi from require';
         }
         }*/
        console.log(sayHiRequire.sayHi('arjun'));
    };

    if(typeof define === 'function' && define.amd) {
        define(['sayHiRequire'], mainFunction);
    }
    else{
        return mainFunction();
    }

})(this);