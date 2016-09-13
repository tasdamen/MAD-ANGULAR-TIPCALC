"use strict"
const controllerNames = {
    TipCalculator: 'TipCalculator'
};

var tipCalculator = function ($scope) {
    function tipCalculator($scope) {
        console.debug('Tipcalculator is being initialized. ',[]);
        this.scope = $scope;
        this.scope.inputs = [];
        this.scope.tenPercent = function () {
            let result = this.inputs.join('') * 10 / 100;
            return result === 0 ? '' : result;
        };
        this.scope.fifteenPercent = function () {
            let result = this.inputs.join('') * 15 / 100;
            return result === 0 ? '' : result;
        };
        this.scope.press = function (input) {
            console.debug('Provided input:', [input]);
            this.inputs.push(input);
        };
        this.scope.reset = function () {
            this.inputs = [];
        };
    }
    return tipCalculator;
}();



var app = angular.module('WowApp', [])
    .controller(controllerNames.TipCalculator, this.tipCalculator);