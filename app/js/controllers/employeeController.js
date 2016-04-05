/**
 * Created by david on 4/1/16.
 */
'use strict';

angular.module('empInfoApp')

    .controller('EmployeeCnt', function($scope, EmployeeCommand, $timeout) {

        $scope.workingEmployee = EmployeeCommand.workingEmployee;

        $scope.update = function(){

            var formKeys = Object.keys($scope.employeeForm);
            var canUpdate = true;

            for(var i = 0; i < formKeys.length; i++){
                if($scope.employeeForm[formKeys[i]] && $scope.employeeForm[formKeys[i]].$error &&
                    $scope.employeeForm[formKeys[i]].$error.required){
                    canUpdate = false;
                    break;
                }
                if($scope.employeeForm[formKeys[i]] && $scope.employeeForm[formKeys[i]].$error &&
                    $scope.employeeForm[formKeys[i]].$error.email){
                    canUpdate = false;
                    break;
                }
            }

            if(canUpdate){
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


