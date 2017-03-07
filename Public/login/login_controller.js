(function () {
    'use strict';

    angular
        .module('app')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['$location', 'AuthenticationService', 'FlashService'];
    function LoginController($location, AuthenticationService, FlashService) {
        var vm = this;

        vm.login = login;

        (function initController() {
            // reset login status
            AuthenticationService.ClearCredentials();
        })();

        function login() {
            vm.dataLoading = true;
            AuthenticationService.Login(vm.username, vm.password, function (response) {
                if (response.success) {
                    AuthenticationService.SetCredentials(vm.username, vm.password);
                    $location.path('/home');
                } else {
                    FlashService.Error(response.message);
                    vm.dataLoading = false;
                }
            });
        };
    }

})();


/*(function () {
    'use strict';
 
    angular
        .module('app')
        .controller('LoginController', LoginController);
 
    LoginController.$inject = ['$location'];
    function LoginController($location) {
        var vm = this;

        vm.login = login();
 
   // ();
 
        function login() {
         
                    $location.path('/home');
            
        };
    }
 
})();
*/
/*
LoginController.$inject = ['$location'];
angular
	.module('submitExample', [])
    .controller('ExampleController', ['$scope', function($scope) {
 
 vm.user = "Chad"
      $scope.submit = function() {
		$location.path('/home');

        }
      };
    }]);
	*/