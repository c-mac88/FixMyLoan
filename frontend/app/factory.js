(function() {
    'use strict';

    angular
        .module('app')
        .factory('CarFactory', CarFactory);

    CarFactory.$inject = ['$http', '$log', '$q'];

    /* @ngInject */
    function CarFactory($http, $log, $q) {

        var service = {
            getCars: getCars,
            postUser: postUser
        };

        return service;

        function getCars(url) {

            var defer = $q.defer();

            $http({
                method: 'GET',
                url: url
            }).then(function(response) {
                    if (typeof response.data === 'object') {
                        defer.resolve(response);
                    } else {
                        defer.reject(response);
                        //error if found but empty
                    }
                },
                // failure
                function(error) {
                    //error if the file isn't found
                    defer.reject(error);
                    $log.error(error);
                });

            return defer.promise;
        }


        function postUser(data) {

            var defer = $q.defer();

            $http({
                method: 'POST',
                url: 'http://localhost:53889/api/UserEntries',
                data: data
            }).then(function(response) {
                    if (typeof response.data === 'object') {
                        defer.resolve(response);
                        toastr.success('Submitted your Application!');
                    } else {
                        defer.reject(response);
                        //error if found but empty
                    }
                },
                // failure
                function(error) {
                    //error if the file isn't found
                    defer.reject(error);
                    $log.error(error);
                });

            return defer.promise;
        }






    }

})();