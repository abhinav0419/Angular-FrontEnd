// Creating the module and controller to GET data
(function() {
    var app=angular.module('myApp', []);
    app.controller('mainCtrl', mainController);

    function mainController($http,$scope) {
        var user = this;
        $scope.currentPage = 0;
        $scope.pageSize = 10;
        $http({
            method: 'GET',
            url: 'http://private-a73e-aquentuxsociety.apiary-mock.com/members'
        }).then(function successCallback(response) {
            user.data = response.data;
        }, function errorcallBack(response){
            user.errorMessage = "There is an error with getting data from the source";
            console.log(response.status);
        })

    };
    app.filter('startFrom', function() {
        return function(input, start) {
            start = +start; //parse to int
            return input.slice(start);
        }
    });
})();
