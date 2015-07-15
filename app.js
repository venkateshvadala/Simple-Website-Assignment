/**
 * Created by AllSa002 on 7/11/2015.
 */

var my = angular.module('myapp',['ngRoute']);

 my.config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.
                when('/registration', {
                    templateUrl: 'views/reg-page.html'
                }).
                when('/about', {
                    templateUrl: 'views/about.html'
                }).
                otherwise({
                    redirectTo: '/about'
                });
        }]);


my.controller('UserController',['$scope',function($scope){

    $scope.userList = [];
    $scope.addUser = function(param){
        var x = angular.copy(param);
        $scope.userList.push(x);
    };


    $scope.removeUser = function(user){
        $scope.userList.pop(user);
    }

}]);
