var application = angular.module("myApp", []);

// Start controller
application.controller("myCtrl", function ($scope, $http, $window, $timeout, $document) {
	//variables
	$scope.start=true;
	$scope.isPaused=false;
	$scope.AddListCards=[];
	let arr = [];
	var cards= 53;

	$scope.voces = [{
	  id: 0,
	  label: 'pavel'
	}, {
	  id: 1,
	  label: 'maribel'
	},
	{
	  id: 2,
	  label: 'ramiro'
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
			while (i < cards) {
				var src="cartas/"+arr[i]+".PNG";
				$scope.AddListCards.push({ Imagen: src, num: c});
				console.log($scope.AddListCards);
				(function(i) {
			    	setTimeout(function() {
			        	let singleCard = arr[i];
			        	


			        	
			        	//if(i===0){
			        	//	showcards = '<img src="cartas/'+arr[i]+'.PNG" width="60" height="100"><span class="badge badge-pill badge-warning count-notif">'+c+'</span>' ;
			        	//}
			        	//else{
			        	//	showcards =  showcards+' '+ '<img src="cartas/'+arr[i]+'.PNG" width="60" height="100"><span class="badge badge-pill badge-warning count-notif">'+c+'</span>' ;
			        	//}
			        	//$scope.AddListCards.push({ Imagen: src, num: c});
			        	

						//let showCard = `${singleCard}`;
						//document.getElementById("showing").innerHTML = '<img src="cartas/'+showCard+'.PNG" width="180" height="240">';
						//document.getElementById("cards").innerHTML = showcards;
						AnunciarCarta(arr[i]);
						c++;
			    	}, 800 * i)
			    })(i++)
			}
		},1200)
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
