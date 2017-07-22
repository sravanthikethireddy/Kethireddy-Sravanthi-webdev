/**
 * Created by Sravanthi Kethireddy on 7/21/2017.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("RegisterController",RegisterController);
    function RegisterController($Location, UserService) {
        var vm = this;
        vm.register = register;
        function register(user) {
            var newUser = UserService.findUserByUsername(user.username);
            if (newUser){
                vm.error="Username already exists!";
            }
            else {
                newUser=UserService.createUser(user);
                if(newUser){
                    $Location.url("/profile/",newUser._id)
                }
            }
        }
    }
})();