	(function () {
    'use strict';

    angular
        .module('app', ['ngRoute', 'ngCookies'])
        .config(config)
        .run(run);

    config.$inject = ['$routeProvider', '$locationProvider'];
    function config($routeProvider, $locationProvider) {
        $routeProvider
            .when('/home', {
                controller: 'HomeController',
                templateUrl: 'home/home_view.html',
                controllerAs: 'vm'
            })

            .when('/login', {
                controller: 'LoginController',
                templateUrl: 'login/login_view.html',
                controllerAs: 'vm'
            })

            .when('/register', {
                controller: 'RegisterController',
                templateUrl: 'register/register_view.html',
                controllerAs: 'vm'
            })

            .otherwise({ redirectTo: '/login' });
    }

    run.$inject = ['$rootScope', '$location', '$cookieStore', '$http'];
    function run($rootScope, $location, $cookieStore, $http) {
        // keep user logged in after page refresh
        $rootScope.globals = $cookieStore.get('globals') || {};
        if ($rootScope.globals.currentUser) {
            $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
        }

        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            // redirect to login page if not logged in and trying to access a restricted page
            var restrictedPage = $.inArray($location.path(), ['/login', '/register']) === -1;
            var loggedIn = $rootScope.globals.currentUser;
            if (restrictedPage && !loggedIn) {
                $location.path('/login');
            }
        });
    }

})();
	
	/*(function () {
    'use strict';
 
    angular
        .module('app', ['ngRoute', 'ngCookies'])
        .config(config)
        .run(run);
 
    config.$inject = ['$routeProvider', '$locationProvider'];
    function config($routeProvider, $locationProvider) {
        $routeProvider
            .when('/home', {
                controller: 'HomeController',
                templateUrl: 'home/home_view.html',
                controllerAs: 'vm'
            })
 
            .when('/login', {
                controller: 'LoginController',
                templateUrl: 'login/login_view.html',
                controllerAs: 'vm'
            })
 
            .when('/register', {
                controller: 'RegisterController',
                templateUrl: 'register/register_view.html',
                controllerAs: 'vm'
            })
 
            .otherwise({ redirectTo: '/login' });
    }
 
    run.$inject = ['$rootScope', '$location', '$cookies', '$http'];
    function run($rootScope, $location, $cookies, $http) {
  
		//$location.path('/home');

    }
 
})();

*/


/*(function () {
    'use strict';

    angular
        .module('app', ['ngRoute', 'ngCookies'])
        .config(config_func)
        .run(run);

 //   config(['$routeProvider', function($routeProvider) {

   config_func.$inject = ['$location', '$routeProvider', '$locationProvider', '$window', '$rootScope', '$rootElement'];

   function config_func($routeProvider, $locationProvider) {
    	
		 // $locationProvider.html5Mode(true)  breaks site!

        $routeProvider
            .when('/home', {
                controller: 'HomeController',
                templateUrl: 'home/home_view.html',
                controllerAs: 'vm'
            })

               .when('/login', {
                controller: 'LoginController',
                templateUrl: 'login/login_view.html',
                controllerAs: 'vm'
            })   

            .when('/register', {
                controller: 'RegisterController',
                templateUrl: 'register/register_view.html',
                controllerAs: 'vm'
            })

            .otherwise({ redirectTo: '/login' });
        	//$window.location.assign('/home');
			//$locationProvider.html5Mode(true);
			//$location.path('/home');


           
   }
   
  run.$inject = ['$rootScope', '$location', '$cookies', '$http', '$window'];

//function run($rootScope, $location, $cookies, $http, $window) {
	// $location.path('/home/home_view');
	//$window.location.href = '/home';

 //}
    })();

	*/
	
	
	
