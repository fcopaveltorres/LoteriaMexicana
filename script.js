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
	        		showcards = arr[i] ;
	        	}
	        	else{
	        		showcards =  showcards+' '+arr[i] ;
	        	}

				let showCard = `${singleCard}`;
				document.getElementById("showing").innerHTML = '<img src="cartas/'+showCard+'.PNG" width="160" height="200">';

				document.getElementById("cards").innerHTML = showcards;
	    	}, 500 * i)
	    })(i++)
	}
}

