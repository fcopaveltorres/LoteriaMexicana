let arr = [];
var cards= 53;
barajear();

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

function iniciar(){
	var i = 0;
	var showcards;
	while (i < cards) {
		(function(i) {
	    	setTimeout(function() {
	        	let singleCard = arr[i];
	        	
	        	if(i===0){
	        		showcards = '<img src="cartas/'+arr[i]+'.PNG" width="60" height="100">' ;
	        	}
	        	else{
	        		showcards =  showcards+' '+ '<img src="cartas/'+arr[i]+'.PNG" width="60" height="100">' ;
	        	}

				let showCard = `${singleCard}`;
				document.getElementById("showing").innerHTML = '<img src="cartas/'+showCard+'.PNG" width="180" height="240">';

				document.getElementById("cards").innerHTML = showcards;
	    	}, 500 * i)
	    })(i++)
	}
}

