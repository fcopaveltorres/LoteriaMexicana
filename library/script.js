var application = angular.module("myApp", []);

// Start controller
application.controller("myCtrl", function ($scope, $http, $window, $timeout, $document) {
	//variables
	$scope.tiempopasar=1400;
	$scope.tiempopasar_min=800;
	$scope.tiempopasar_max=4000;
	$scope.start=true;
	$scope.isPaused=false;
	$scope.AddListCards=[];
	$scope.Card="cartas/"+0+".PNG";
	let arr = [];
	var cards= 54;

	$scope.voces = [{
	  id: 0,
	  label: 'marco'
	},
	{
	  id: 1,
	  label: 'pavel'
	}
	];

	$scope.vozselected = $scope.voces[0];

	$scope.iniciar = function (){
		AnunciarCarta(0);
		$scope.start=false;
		$scope.AddListCards=[];
		barajear();
		var i = 0;
		var c = 1;
		var showcards;
		setTimeout(function() {
			while (i <= cards) {
				
				(function(i) {
			    	setTimeout(function() {
			    		AnunciarCarta(arr[i]);
			        	var src="cartas/"+arr[i]+".jpg";
						$scope.AddListCards.push({ Imagen: src, num: c});
						$scope.Card=$scope.AddListCards[i].Imagen;
						$scope.$apply();						
						c++;
			    	}, $scope.tiempopasar * i)

			    })(i++)
			}

		},1300)
	}

	$scope.pause=function(){		
		$scope.isPaused=true;
	}

	$scope.refresh = function (){
		location.reload();
	}

	function barajear() {
		arr = [];
		do {
			let num = Math.floor(Math.random() * cards + 1);
		  	arr.push(num);
		  	arr = arr.filter((item, index) => {
	    		return arr.indexOf(item) === index
	  		});
		} while (arr.length < cards);
	}

	$scope.changepasar = function (tiempo){
		$scope.tiempopasar=tiempo;
	}


	function AnunciarCarta(_carta) {
		var x = document.createElement("AUDIO");
	  	x.setAttribute("id", "myVideo");
	  	x.setAttribute("controls", "controls");		  
	  	var y = document.createElement("SOURCE");
	  	y.setAttribute("src", "audio/"+$scope.vozselected.label+"/"+_carta+".m4a");
	  	y.setAttribute("type", "audio/mp4");
	  	x.appendChild(y);
	  	// Set the autoplay property:
	  	x.autoplay = true;
	  	document.body.appendChild(x);
	}


});
