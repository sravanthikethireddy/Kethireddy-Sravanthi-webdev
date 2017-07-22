/**
 * Created by Sravanthi Kethireddy on 7/21/2017.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("PageEditController", PageEditController);
    function PageEditController($routeParams, $Location, PageService) {
        var vm = this;
        var userId = $routeParams['uid'];
        var websiteId = $routeParams['wid'];
        var pageId = $routeParams['pid'];
        vm.updatePage = updatePage;
        vm.deletePage = deletePage;
        function init() {
            vm.page = PageService.findPageById(vm.pageId);
            vm.pages = PageService.findPageByWebsiteId(vm.websiteId);
        }

        init()
        function updatePage(newPage) {
            var success = PageService.updatePage(vm.pageId, newPage);
            $location.url('/user/' + vm.userId + '/website/' + vm.websiteId + '/page');
            if (success) {
                vm.message = "Page updated";
            }
            else {
                vm.error = "Page not updated";
            }

        }

        function deletePage() {
            var success = PageService.deletePage(pageId);
            if (success) {
                $location.url('/user/' + vm.userId + '/website/' + vm.websiteId + '/page');
            }
            else {
                vm.error = "Page not deleted"
            }
        }

    }

})();