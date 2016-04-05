/**
 * Created by david on 4/3/16.
 */

'use strict';

angular.module('empInfoApp')
    .service('EmployeeCommand', ['EmployeeSvc', function(EmployeeSvc) {

        var employees = [];
        var workingEmployee = new EmployeeSvc.Employee();;
        var activeEmployee = null;

        var saveChanges = function(){

            if(activeEmployee){
                activeEmployee.copyToThis(workingEmployee);
            }else{
                activeEmployee = new EmployeeSvc.Employee(workingEmployee);
                employees.push(activeEmployee);
            }
        };

        var resetEmployee = function(){
            workingEmployee.reset();
        };

        var addNewEmployee = function(){
            workingEmployee.reset();
            activeEmployee = null;
        };

        var setCurrentEmployee = function(email){
            for(var i = 0; i < employees.length; i++){
                if(employees[i].email === email){
                    activeEmployee = this.employees[i];
                    workingEmployee.copyToThis(activeEmployee);
                }
            }
        };

        return {
            employees:employees,
            workingEmployee: workingEmployee,
            saveChanges:saveChanges,
            resetEmployee:resetEmployee,
            addNewEmployee:addNewEmployee,
            setCurrentEmployee:setCurrentEmployee
        };
    }]);


