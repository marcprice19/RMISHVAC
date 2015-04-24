(function(){

  // 1. Start the application
  angular.module('rmishvac')
    .config(function($routeProvider){
      $routeProvider
        
        .when('/about', { 
          templateUrl: '/templates/pages/about.html'
        })
        .when('/products', { 
          templateUrl: '/templates/pages/products.html'
        })
        .when('/', { 
          templateUrl: '/templates/pages/home.html'
        })
        .otherwise({redirectTo: '/#'});
    });


})();