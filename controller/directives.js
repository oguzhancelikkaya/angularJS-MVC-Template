App.directive("myDropdown", function() {
    return {
		restrict : "E",
		replace  : true,
		scope	 : {content: '=content', current: '=current'},
        template : '<div class="btn-group">\
					<button class="btn btn-inverse dropdown-toggle" type="button" data-toggle="dropdown">\
					{{current.value}} <span class="caret"></span>\
					</button>\
					<ul class="dropdown-menu dropdown-menu-inverse" role="menu">\
						<li ng-repeat="roll in content" ng-click="current.value=roll.value"><a href="#">{{roll.value}}</a></li>\
					</ul>\
					</div>'
    };
});