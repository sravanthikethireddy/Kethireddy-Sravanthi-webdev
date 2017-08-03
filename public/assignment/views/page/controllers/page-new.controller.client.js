/**
 * Created by Sravanthi Kethireddy on 7/21/2017.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("PageNewController", PageNewController);
    function PageNewController($routeParams, PageService, $location) {
        var model = this;
        model.userId = $routeParams['uid'];
        model.websiteId = $routeParams['wid'];
        model.pageId = $routeParams['pid'];
        model.addnewPage = addnewPage;
        function init() {

            model.pages = PageService.findAllPagesByWebsiteId(model.websiteId);

        }
        init();
        function addnewPage(page) {
            var newPage = PageService.createPage(model.websiteId, page);
            if (newPage) {
                init();
                $location.url('/user/' + model.userId + '/website/' + model.websiteId + '/page');
                // model.message = "Page created";

            }
            else {
                model.error = "Unable to create a page";
            }
        }
    }
})();