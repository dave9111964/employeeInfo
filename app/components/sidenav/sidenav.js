/**
 * Created by david on 4/4/16.
 */

'use strict';

angular.module('empInfoApp')
    .directive('sideNav', function() {
        return {
            restrict: 'E',
            transclude: false,
            scope: {},
            controller: ['$scope', 'EmployeeCommand', function($scope, EmployeeCommand) {
                $scope.employees = EmployeeCommand.employees;

                $scope.setCurrentEmployee = function(email){
                    EmployeeCommand.setCurrentEmployee(email);
                };
            }],
            templateUrl: 'components/sidenav/sidenav.html'
        };
    });

