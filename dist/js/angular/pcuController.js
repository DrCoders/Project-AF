/**
 * Created by Nirmal on 5/1/2017.
 */
var myApp = angular.module("Route").controller("pcuController", function ($scope, $http, $interval) {
    $scope.message = "Prescription Page";
    // $scope.TimedRefresh = function(t) {
    //     console.log(t);
    //     setTimeout("location.reload(true);", t*60);
    // }
    //
    // $scope.TimedRefresh(10);
    // $interval(getPrescriptions($scope,$http),5000);

    //get prescriptions from db
    $http.get('/api/prescriptions')
        .then(function (response) {
            $scope.prescriptiondata = response.data;
            console.log(response.data);
        });

    $scope.formData = {};
    $scope.createPrescription = function () {
        $http.post('/api/prescriptions',$scope.formData);
        console.log($scope.formData);
    }

    $scope.drugdata = [];

})

// function getPrescriptions($scope,$http) {
//     $http.get('/api/prescriptions')
//         .then(function (response) {
//             $scope.prescriptiondata = response.data;
//             console.log(response.data);
//         });
// }