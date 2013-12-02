/**
 * Created by claudiu on 12/2/13.
 */

var phoneApp = angular.module('phoneApp', []);

phoneApp.controller('phoneList', function($scope){
    $scope.phones = [
        {'name': 'moto g', 'snippet': 'my phone'},
        {'name': 'iphone', 'snippet': 'girlfriend phone'},
        {'name': 'google x', 'snippet': 'next phone'}
    ]

    $scope.orderProp = 'age';
})