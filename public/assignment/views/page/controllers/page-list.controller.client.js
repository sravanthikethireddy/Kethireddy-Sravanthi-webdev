/**
 * Created by Sravanthi Kethireddy on 7/21/2017.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("PageListController", PageListController);
    function PageListController($routeParams, PageService) {
        var model = this;
        model.userId = $routeParams['uid'];
        model.websiteId = $routeParams['wid'];
        model.pageId = $routeParams['pid'];
        function init() {
            model.pages = PageService.findAllPagesByWebsiteId(model.websiteId);
        }

        init();
    }
})();