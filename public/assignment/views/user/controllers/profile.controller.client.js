/**
 * Created by Sravanthi Kethireddy on 7/21/2017.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("ProfileController", ProfileController);

    function ProfileController($routeParams, UserService, $location) {
        var vm = this;
        var userId = $routeParams['uid'];
        vm.updateUser = updateUser;
        vm.unregister = unregister;
        vm.userId = userId;

        function init() {
            UserService.findUserById(userId)
                .then(function (response) {
                    vm.user = response.data;
                });
        }
        init();

        function updateUser(user) {
            UserService.updateUser(userId, user)
                .then(function () {
                    vm.message='';
                });
        }

        function unregister() {
            UserService.deleteUser(user._id)
                .then(function () {
                    $location.url("/login");
                });
        }
    }
})();