myApp.factory('CalcFactory', function() {
	var calc = 1;

	return {
		get: function(){
			return calc * 4;
		}
	};
});