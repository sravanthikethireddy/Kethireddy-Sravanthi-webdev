/**
 * Created by Sravanthi Kethireddy on 7/21/2017.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("WebsiteListController",WebsiteListController);
    function WebsiteListController($routeParams,WebsiteService) {
        var vm = this;
        vm.userId = $routeParams['uid'];
        function init() {
             WebsiteService
                 .findAllWebsitesForUser(vm.userId)
                 .then(function (websites) {
                     vm.websites = websites;
                 });
        }
        init()
    }
})();