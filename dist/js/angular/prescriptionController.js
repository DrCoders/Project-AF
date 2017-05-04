/**
 * Created by Nirmal on 4/30/2017.
 */
var myApp = angular.module("Route").controller("prescriptionController", function ($scope) {
    $scope.message = "Prescription Page";
    // $scope.courses = ["C#", "VB>NET", "SQL SERVER", "ASP.NET"];
    //$scope.prescriptions = [{"doctor":"Doctor 22","time":"22.32","content":"sick"},{"doctor":"Doctor 22","time":"22.32","content":"fever"}];
    $scope.data = [{
        "date": "15 Mar, 2015",
        "prescriptions": [{
            "title": "Dengue Fever",
            "doctor": "Doctor 99",
            "time": "10.30",
            "content": "Dengue fever with 103F temperature"
        }, {
            "title": "Dengue Fever",
            "doctor": "Doctor 22",
            "time": "22.32",
            "content": "With 105F temperature"
        }]
    }, {
        "date": "16 Mar, 2015",
        "prescriptions": [{
            "title": "Chicken gunya",
            "doctor": "Doctor 22",
            "time": "05.20",
            "content": "Flu"
        }, {
            "title": "Flu Fever",
            "doctor": "Doctor 22",
            "time": "22.32",
            "content": "Fever with 103F Temp"
        }]
    }];
})