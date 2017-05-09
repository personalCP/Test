/**
 * Created by masikann on 5/8/17.
 */


/*var requirejs = require('requirejs');
requirejs.config({
    //Pass the top-level main.js/index.js require
    //function to requirejs so that node modules
    //are loaded relative to the top-level JS file.
    nodeRequire: require
});


    requirejs(['sayHiRequire'],
        function (sayHi) {
            //foo and bar are loaded according to requirejs
            //config, but if not found, then node's require
            //is used to load the module.
            describe('says Hi', function () {
                it('says hi from require', function () {
                    var result = sayHi.sayHiRequire();
                    expect(result).not().toBe('');
                });
            });
        });
    */

define(['../src/sayHiRequire'], function(sayHiRequire){

    describe('says Hi', function () {
        var result;
        beforeEach(function(){
            spyOn(sayHiRequire, 'sayHi').and.callThrough();
            result = sayHiRequire.sayHi('arjun');
        });
        it('has say hi function', function(){
            expect(sayHiRequire.sayHi).toBeDefined();
        });

        it('say hi is called', function () {
            expect(sayHiRequire.sayHi).toHaveBeenCalled();
        });
        it('say hi is called with parameter arjun', function () {
            expect(sayHiRequire.sayHi).toHaveBeenCalledWith('arjun');
        });
        it('says hi from require', function () {
            expect(result).toBe('hi arjun - from require');
        });
    });

})