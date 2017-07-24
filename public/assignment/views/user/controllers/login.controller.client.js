/**
 * Created by Sravanthi Kethireddy on 7/21/2017.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("LoginController",LoginController);
    function LoginController($location, UserService) {
        var vm = this;
        vm.login = login;
        // function init() {
        //
        // }
        // init();
        function login(user) {
            // if(user===null){
            //     vm.error="Invalid user name";
            //     return;
            // }
            // if(password===null){
            //     vm.error="Invalid password";
            //     return;
            // }
            user = UserService.findUserByCredentials(user.username,user.password);
            if(user){
                $location.url("/user/"+user._id);

            }
            else {
                vm.error="Invalid credentials!"
            }
        }
    }
})();