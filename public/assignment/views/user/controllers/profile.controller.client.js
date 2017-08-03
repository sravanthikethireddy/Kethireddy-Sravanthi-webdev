/**
 * Created by Sravanthi Kethireddy on 7/21/2017.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("ProfileController", ProfileController);

    function ProfileController($routeParams, UserService, $location) {
        var model = this;
        var userId = $routeParams['uid'];
        model.updateUser = updateUser;
        // model.unregister = unregister;
        model.userId = userId;

        function init() {
            UserService
                .findUserById(userId)
                .then(function (response) {
                    model.user = response.data;
                });
        }
        init();

        function updateUser() {
            UserService
                .updateUser(model.userId, model.user)
                .then(function () {
                    model.message='';
                });
        }

    }
})();