'use strict';

angular.module('app')
	.controller('DemoCtrl', function ($scope, $rootScope, $timeout) {
		$scope.message_index = 0;

		var granimInstance = new Granim({
		   element: '#granim-canvas',
			 direction: 'radial',
		   name: 'granim',
		   opacity: [1, 1],
		   states : {
					"default-state": {
						gradients: [
							['#FFCDD2', '#EF9A9A'],
							['#E57373', '#EF5350'],
							['#EF5350', '#E57373'],
							['#EF9A9A', '#FFCDD2']
						]
					}
		   }
		});
});
