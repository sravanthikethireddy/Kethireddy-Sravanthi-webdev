/**
 * Created by Sravanthi Kethireddy on 7/21/2017.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("PageListController", PageListController);
    function PageListController($routeParams, PageService) {
        var vm = this;
        vm.userId = $routeParams['uid'];
        vm.websiteId = $routeParams['wid'];
        vm.pageId = $routeParams['pid'];
        function init() {
            vm.pages = PageService.findPageByWebsiteId(vm.websiteId);
        }

        init()
    }
})();