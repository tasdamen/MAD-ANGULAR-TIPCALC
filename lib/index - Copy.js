"use strict"
const controllerNames = {
    TipCalculator: 'TipCalculator'
};

var tipCalculator = function ($scope) {
    $scope.inputs = [];
    $scope.tenPercent = function () {
        let result =  $scope.inputs.join('') * 10 / 100;
        return result === 0 ? '' : result;
    };
    $scope.fifteenPercent = function () {
        let result =  $scope.inputs.join('') * 15 / 100;
        return result === 0 ? '' : result;
    };
    $scope.press = function (input) {
        console.debug('Provided input:', [input]);
        $scope.inputs.push(input);
    };
    $scope.reset = function () {
        this.inputs.length = 0;
    };
}

angular.module('WowApp', [])
    .controller(controllerNames.TipCalculator, this.tipCalculator);