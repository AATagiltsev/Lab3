angular.module('myApp', []).
    controller('myController', function ($scope) {
        $scope.prefixes = ['Mr', 'Mrs', 'Miss', 'Ms', 'Dr'];
    });