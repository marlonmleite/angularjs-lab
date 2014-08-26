var sankhyaApp = angular.module('sankhyaApp', []);

sankhyaApp.controller('TesteCtrl', function($scope){
	
	$scope.members = [
		{name:'Marlon', city:'Araguari'},
		{name:'Deivid', city:'Araguari'},
		{name:'Daniel', city:'Uberlândia'},
		{name:'Gualberto', city:'Uberlândia'}
	];

});

sankhyaApp.controller('TesteComprasCtrl', function($scope, CalcFactory){
	
	$scope.item = {};
	$scope.item.product = '';
	$scope.item.qtd = '';
	$scope.teste = CalcFactory.get();

	$scope.itens = [
		{product:'Bolacha', qtd:10, buy:false},
		{product:'Macarrão', qtd:3, buy:true}
	];

	$scope.addItem = function() {
		$scope.itens.push(
			{
				product: $scope.item.product,
				qtd: $scope.item.qtd,
				buy: false
			});
	};

	$scope.deleteItem = function(item) {
		var index = $scope.itens.indexOf(item);
		if(index > -1){
			$scope.itens.splice(index, 1);
		}
	};

	$scope.editItem = function(item) {

	};

});

sankhyaApp.factory('CalcFactory', function() {
	var calc = 1;

	return {
		get: function(){
			return calc * 4;
		}
	};
});