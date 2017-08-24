app.config(function($routeProvider){
	$routeProvider.when("/sy",{
		templateUrl:"template/home.html",
		controller:"Ctr"
		
	}).when("/gn",{
		templateUrl:"template/two.html"
	}).otherwise("/sy")
})
