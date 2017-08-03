/**
 * Created by Sravanthi Kethireddy on 7/21/2017.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("LoginController",LoginController);
    function LoginController($location, UserService) {
        var model = this;
        model.login = login;
        function init() {

        }
        init();

        function login(user) {
            if(!user) {
                model.errorMessage = "User not found";
                return;
            }
            promise = UserService
                .findUserByCredentials(user.username, user.password)
            // promise
            // console.log("testingggggg")
                .then(function (user) {
                    // user = response.data;
                    // if(user === null) {
                    //     model.errorMessage = "User not found";
                    // }
                    // else {
                    //     // $rootScope.currentUser = user;
                    //     $location.url("/user/"+user._id);
                    // }
                    if (user){
                        $location.url('/user/'+user._id);
                        console.log(user._id)
                    }else{model.error="Invalid username or password"}
                });
        }
    }
})();