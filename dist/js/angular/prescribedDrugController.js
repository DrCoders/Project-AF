/**
 * Created by Nirmal on 4/30/2017.
 */
var myApp = angular.module("Route").controller("drugsController", function ($scope) {
    $scope.data = [{
        "date": "15 Mar, 2015",
        "prescriptions": [{
            "doctor": "Doctor 99",
            "time": "10.30",
            "drugs": ["Vitamin C", "Vitamin A"]
        }, {"doctor": "Doctor 22", "time": "22.32", "drugs": ["Vitamin E"]}]
    }, {
        "date": "16 Mar, 2015",
        "prescriptions": [{
            "doctor": "Doctor 22",
            "time": "05.20",
            "drugs": ["Zinet", "Pandol"]
        }, {"doctor": "Doctor 22", "time": "22.32", "drugs": ["Sepharoxine"]}]
    }];
})