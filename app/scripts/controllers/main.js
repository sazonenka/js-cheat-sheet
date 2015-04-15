'use strict';

/**
 * @ngdoc function
 * @name jsCheatSheetApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the jsCheatSheetApp
 */
angular.module('jsCheatSheetApp')
  .controller('MainCtrl', function ($scope) {

    $scope.initSnippets = [
      'var value;',
      'var value = undefined;',
      'var value = null;',

      'var value = "test";',
      'var value = "";',
      'var value = new String("");',
      'var value = " ";',
      'var value = "0";',

      'var value = 0;',
      'var value = new Number(0);',
      'var value = 1;',

      'var value = true;',
      'var value = false;',
      'var value = new Boolean(false);',

      'var value = {};',

      'var value = [];'
    ];

    $scope.testSnippets = [
      'typeof value',

      'value == undefined',
      'value === undefined',

      'value == null',
      'value === null',

      'value ? "true" : "false"',
      '!value',
      '!!value',

      'value == 0',
      'value > 0',
      'value < 0',
      'value >= 0',
      'value <= 0'
    ];

    $scope.evalSnippet = function(initSnippet, testSnippet) {
      return eval(initSnippet + testSnippet);
    };
  });
