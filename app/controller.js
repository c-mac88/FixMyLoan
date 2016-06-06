(function() {
    'use strict';

    angular
        .module('app')
        .controller('MainCtrl', MainCtrl);

    MainCtrl.$inject = [];

    /* @ngInject */
    function MainCtrl() {

        //using vm
        var vm = this;

        vm.test = function() {
            console.log("Nice");
        }


    }
})();
