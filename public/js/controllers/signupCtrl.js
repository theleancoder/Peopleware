angular.module('peopleware')
    .controller('SignupCtrl', ['$scope', '$location', 'AuthService',
        function($scope, $location, AuthService) {

            console.log(AuthService.getUserStatus());

            $scope.signup = function() {

                // initial values
                $scope.error = false;
                $scope.disabled = true;

                // call register from service
                AuthService.signup($scope.signUpForm.username, $scope.signupForm.password)
                    // handle success
                    .then(function() {
                        $location.path('/home');
                        $scope.disabled = false;
                        $scope.registerForm = {};
                    })
                    // handle error
                    .catch(function() {
                        $scope.error = true;
                        $scope.errorMessage = "Something went wrong!";
                        $scope.disabled = false;
                        $scope.registerForm = {};
                    });

            };

        }
    ]);
