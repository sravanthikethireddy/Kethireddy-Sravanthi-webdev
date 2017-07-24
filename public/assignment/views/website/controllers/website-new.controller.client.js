/**
 * Created by Sravanthi Kethireddy on 7/21/2017.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("WebsiteNewController", WebsiteNewController);

    function WebsiteNewController($routeParams, WebsiteService, $location) {
        var vm = this;
        vm.userId = $routeParams['uid'];
// vm.addNewWebsite=addNewWebsite;
        vm.createWebsite = createWebsite;

        function init() {
            vm.websites = WebsiteService.findWebsitesByUser(vm.userId);

        }

        init();

        function createWebsite(website) {
            var newWebsite = WebsiteService.createWebsite(vm.userId, website);
            if (newWebsite) {
                // $location.url("/user/" + vm.userId + "/website");
            init();
            }
        }
    }
})();