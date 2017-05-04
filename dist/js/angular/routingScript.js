/**
 * Created by Nirmal on 4/29/2017.
 */
var app = angular.module("Route", ["ngRoute"])
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "pages/home.html"
            })
            .when("/index.html", {
                templateUrl: "pages/home.html"
            })
            .when("/pcusheet/admission", {
                templateUrl: "pages/pcusheet/admission.html",
                controller: "admissionController"
            })
            .when("/pcusheet/addprescription", {
                templateUrl: "pages/pcusheet/addprescription.html",
                controller:"pcuController"
            })
            .when("/registration", {
                templateUrl: "pages/registration.html"
            })
            .when("/pcusheet", {
                templateUrl: "pages/pcusheet/pcusheet.html",
                controller : "pcuController"
            })
            .when("/search", {
                templateUrl: "pages/searchpatient.html"
            })
            .when("/pcusheet/addlabtest", {
                templateUrl: "pages/pcusheet/addlabtest.html"
            })


            // .when("/pagenotfound", {
            //     templateUrl: "pages/error/404.html"
            // })
            // .otherwise({redirectTo: '/pagenotfound'})
        $locationProvider.html5Mode(true);
    })
// .controller("prescriptionController", function ($scope) {
//     $scope.message = "Prescription Page";
//     // $scope.courses = ["C#", "VB>NET", "SQL SERVER", "ASP.NET"];
//     //$scope.prescriptions = [{"doctor":"Doctor 22","time":"22.32","content":"sick"},{"doctor":"Doctor 22","time":"22.32","content":"fever"}];
//     $scope.data = [{
//         "date": "15 Mar, 2015",
//         "prescriptions": [{"doctor": "Doctor 99", "time": "10.30", "content": "sick"}, {
//             "doctor": "Doctor 22",
//             "time": "22.32",
//             "content": "fever"
//         }]
//     }, {
//         "date": "16 Mar, 2015",
//         "prescriptions": [{"doctor": "Doctor 22", "time": "05.20", "content": "sick"}, {
//             "doctor": "Doctor 22",
//             "time": "22.32",
//             "content": "fever"
//         }]
//     }];
// })
// .controller("admissionController", function ($scope) {
//     $scope.message = "Admission Page";
// })
// .controller("drugsController", function ($scope) {
//     $scope.data = [{
//         "date": "15 Mar, 2015",
//         "prescriptions": [{
//             "doctor": "Doctor 99",
//             "time": "10.30",
//             "drugs": ["Vitamin C", "Vitamin A"]
//         }, {"doctor": "Doctor 22", "time": "22.32", "drugs": ["Vitamin E"]}]
//     }, {
//         "date": "16 Mar, 2015",
//         "prescriptions": [{
//             "doctor": "Doctor 22",
//             "time": "05.20",
//             "drugs": ["Zinet", "Pandol"]
//         }, {"doctor": "Doctor 22", "time": "22.32", "drugs": ["Sepharoxine"]}]
//     }];
// })