/**
 * Created by Sravanthi Kethireddy on 7/21/2017.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("PageNewController", PageNewController);
    function PageNewController($routeParams, PageService, $Location) {
        var vm = this;
        vm.userId = $routeParams['uid'];
        vm.websiteId = $routeParams['wid'];
        vm.pageId = $routeParams['pid'];
        function init() {
            vm.pages = PageService.findPageByWebsiteId(vm.websiteId);

        }

        init();
        vm.createPage = createPage;
        function createPage(newPage) {
            var success = PageService.createPage(vm.websiteId, newPage);
            $location.url('/user/' + vm.userId + '/website/' + vm.websiteId + '/page');
            if (success) {
                vm.message = "Page created";
                init();

            }
            else {
                vm.error = "Unable to create a page"
            }
        }
    }
})();