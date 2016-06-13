(function() {
    'use strict';

    angular
        .module('app')
        .factory('RegistrationFactory', RegistrationFactory);

    RegistrationFactory.$inject = ['$http', '$log', '$q'];

    /* @ngInject */
    function RegistrationFactory($http, $log, $q) {

        var service = {
            postUser: postUser
        };

        return service;

        function postUser(data) {

            var defer = $q.defer();

            $http({
                method: 'POST',
                url: 'http://localhost:53889/api/UserEntries',
                data: data
            }).then(function(response) {
                    if (typeof response.data === 'object') {
                        defer.resolve(response);
                        toastr.success('Your form has been submitted!');
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
