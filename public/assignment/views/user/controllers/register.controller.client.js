/**
 * Created by Sravanthi Kethireddy on 7/21/2017.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("RegisterController",RegisterController);
    function RegisterController($location, UserService) {
        var model = this;
        model.register = register;
        function init() {

        }
        init();
        function register(user) {
            UserService
                .findUserByUsername(user.username)
                .then(function (response) {
                    var _user = response.data;
                    if(_user === "0") {
                        return UserService.createUser(user)
                    } else {
                        model.error = "User already exists";
                    }
                })
                .then(function (user) {
                    // var user = response.data;
                    if(user) {
                        $location.url("/user/" + user._id);
                    }
                });
        }
    }
})();