angular.module('Fizzbuzz').controller('FizzbuzzController', function($scope, FizzbuzzFactory) {
	$scope.fizzbuzz = FizzbuzzFactory;

	$scope.startFizzbuzz = function(number) {
		$scope.fizzbuzz.displayNumbers(number).then(function(success) {
			$scope.result = success;
		}, function(error) {
			$scope.result = error;
		});
	}
});