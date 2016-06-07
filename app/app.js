(function() {
    'use strict';

    // define top-level module container
    var app = angular.module('app', []);

    $('#myModal').on('shown.bs.modal', function() {
            $('#myInput').focus()
        })
        // additional configuration goes here


})();
