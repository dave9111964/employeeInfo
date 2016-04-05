/**
 * Created by david on 4/1/16.
 */
'use strict';

angular.module('empInfoApp')

    .controller('EmployeeCnt', function($scope, EmployeeCommand, $timeout) {

        $scope.workingEmployee = EmployeeCommand.workingEmployee;

        $scope.update = function(){

            if(!$scope.employeeForm.uFirstName.$error.required && !$scope.employeeForm.uLastName.$error.required &&
                !$scope.employeeForm.uEmail.$error.required && !$scope.employeeForm.uEmail.$error.email &&
                !$scope.employeeForm.uHiredDate.$error.required && !$scope.employeeForm.uSalary.$error.required) {
                EmployeeCommand.saveChanges();
            }
        };

        $scope.reset = function(){
            EmployeeCommand.resetEmployee();
        };

        $scope.addNew = function(){
            EmployeeCommand.addNewEmployee();

            $timeout(function(){
                $scope.employeeForm.$setPristine();
            },250);

        };

    });


