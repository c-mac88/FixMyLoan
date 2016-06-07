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


        vm.FAQ = [{"question": "Does it cost anything to apply?", "answer": "No. there is no cost to apply.", "showing": false},
                    {"question": "Test", "answer": "Test", "showing": false}
        ]


    }
})();
