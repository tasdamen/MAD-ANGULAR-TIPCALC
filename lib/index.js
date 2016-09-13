"use strict"
const controllerNames = {
    TipCalculator: 'TipCalculator'
};

var tipCalculator = function ($scope) {
    let tip = {
        bill: undefined,
        tenPercent: undefined,
        fifteenPercent: undefined,
        inputs: []
    }

    $scope.tip = tip;
    $scope.typed = function (input) {
        console.debug('Typed input:', [input]);
        tip.inputs.length = 0;
        computeTip(input);
    }
    $scope.press = function (input) {
        console.debug('Pressed number:', [input]);
        computeTip(input);
    };
    $scope.reset = function () {
        reset();
    };

    var reset = function () {
        tip.inputs.length = 0;
        tip.bill = 0;
        tip.tenPercent = 0;
        tip.fifteenPercent = 0;
    };

    var computeTip = function (input) {
        tip.inputs.push(input);
        let result = tip.inputs.join('') * 10 / 100;
        tip.tenPercent = result === 0 ? '' : result;
        result = tip.inputs.join('') * 15 / 100;
        tip.fifteenPercent = result === 0 ? '' : result;
        tip.bill = tip.inputs.join('');
    }
}

angular.module('WowApp', [])
    .controller(controllerNames.TipCalculator, this.tipCalculator);