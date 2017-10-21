App.factory('crud', function($http,$q){

    var _cancel = $q.defer();

    var _canceller = function(){
        _cancel.resolve();
        _cancel = $q.defer();
    }

	var _get = function(){
		//return $http.get("/getAll");
		return "Model trial";
	}
	var _set = function(name){
		return $http.post("/setThis",name);
	}
	return{
		get: _get,
		set: _set,
		cancel : _canceller
	};
});

App.factory('myServices', function(){
	var _isNotEmpty = function(val){
		
		return (val === undefined || val == null || val.length <= 0) ? false : true;
	}
	
	var _setCookie = function(name, value, days) {
		if (days) {
			var date = new Date();
			date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
			var expires = "; expires=" + date.toGMTString();
		}
		else var expires = "";
		document.cookie = name + "=" + value + expires + "; path=/";
	}
	
	var _getCookie = function(name){
		var nameEQ = name + "=";
		var ca = document.cookie.split(';');
		for (var i = 0; i < ca.length; i++) {
			var c = ca[i];
			while (c.charAt(0) == ' ') c = c.substring(1, c.length);
			if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
		}
		return null;
	}
	
	return{
		isNotEmpty: _isNotEmpty,
		setCookie : _setCookie,
		getCookie : _getCookie
	};
});

