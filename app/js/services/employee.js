/**
 * Created by david on 4/3/16.
 */

'use strict';

angular.module('empInfoApp')
    .service('EmployeeSvc', function() {

        var Employee = function(copyEmployee) {
            var firstName = null;
            var lastName = null;
            var email = null;
            var hiredDate = null;
            var salary = null;

            if(copyEmployee){
                this.firstName = copyEmployee.firstName;
                this.lastName = copyEmployee.lastName;
                this.email = copyEmployee.email;
                this.hiredDate = copyEmployee.hiredDate;
                this.salary = copyEmployee.salary;
            }
        };

        Employee.prototype.reset = function(){
            this.firstName = null;
            this.lastName = null;
            this.email = null;
            this.hiredDate = null;
            this.salary = null;
        };

        Employee.prototype.copyToThis = function(copyEmployee){
            if(copyEmployee){
                this.firstName = copyEmployee.firstName;
                this.lastName = copyEmployee.lastName;
                this.email = copyEmployee.email;
                this.hiredDate = copyEmployee.hiredDate;
                this.salary = copyEmployee.salary;
            }
        };

        return {
            Employee: Employee
        };
    });



