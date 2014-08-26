myApp.directive('myGreet', function(){
	return {
		restrict: 'E',
		template: '<h2>Hello {{ person }}!</h2>',
		scope: {
			person: '@'
		}
	};
});