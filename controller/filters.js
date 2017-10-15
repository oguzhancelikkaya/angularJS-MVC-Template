App.filter("myFilter", function() {
	return function(input){
		var r = "";
		for(var i = 0; i < input.length; i++){
			if( i % 2 == 0){
				r += input[i].toUpperCase();
			}
			else{
				r += input[i].toLowerCase();
			}
		}
		return r;
	}
	
});