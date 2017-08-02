/**
 * Created by Sravanthi Kethireddy on 7/21/2017.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("PageNewController", PageNewController);
    function PageNewController($routeParams, PageService, $location) {
        var vm = this;
        vm.userId = $routeParams['uid'];
        vm.websiteId = $routeParams['wid'];
        vm.pageId = $routeParams['pid'];
        vm.addnewPage = addnewPage;
        function init() {

            vm.pages = PageService.findAllPagesByWebsiteId(vm.websiteId);

        }
        init();
        function addnewPage(page) {
            var newPage = PageService.createPage(vm.websiteId, page);
            if (newPage) {
                init();
                $location.url('/user/' + vm.userId + '/website/' + vm.websiteId + '/page');
                // vm.message = "Page created";

            }
            else {
                vm.error = "Unable to create a page";
            }
        }
    }
})();