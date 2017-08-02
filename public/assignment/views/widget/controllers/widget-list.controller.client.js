/**
 * Created by Sravanthi Kethireddy on 7/21/2017.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("WidgetListController", WidgetListController);

    function WidgetListController($routeParams, WidgetService, $sce, $location) {
        var vm = this;
        vm.userId = $routeParams['uid'];
        vm.pageId = $routeParams['pid'];
        vm.websiteId = $routeParams['wid'];
        vm.doYouTrustUrl = doYouTrustUrl;

        function init() {
            WidgetService
                .findWidgetsByPageId(vm.pageId)
                .then(function (widgets) {
                    vm.widgets = widgets;
                });
        }

        init();

        function doYouTrustUrl(url) {
            var u = "https://www.youtube.com/embed/";
            var p = url.split('/');
            var id = p[p.length - 1];
            u += id;
            return $sce.trustAsResourceUrl(u);
        }

    }
})();