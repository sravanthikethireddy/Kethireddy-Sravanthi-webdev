/**
 * Created by Sravanthi Kethireddy on 7/21/2017.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("RegisterController",RegisterController);
    function RegisterController($location, UserService) {
        var vm = this;
        vm.register = register;
        function init() {

        }
        init();
        function register(user) {
            var newUser = UserService.findUserByUsername(user.username);
            if(newUser){
            vm.error="Username already exists!";
            }
            else {
            newUser=UserService.createUser(user);
            if(newUser){
                $location.url("/profile/"+user._id);
            }else {
                vm.error="Registration failed"
            }
            }

        }
        }
        })();