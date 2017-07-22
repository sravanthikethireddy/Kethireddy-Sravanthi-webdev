/**
 * Created by Sravanthi Kethireddy on 7/21/2017.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("ProfileController", ProfileController);

    function ProfileController($routeParams, UserService, $Location) {
        var vm = this;
        var userId = $routeParams['uid'];
        function init() {
            vm.user = UserService.findUserById(userId)
        }

        init()
    }
})();