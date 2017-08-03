/**
 * Created by Sravanthi Kethireddy on 7/21/2017.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("WidgetListController", WidgetListController);

    function WidgetListController($routeParams, WidgetService, $sce, $location) {
        var model = this;
        model.userId = $routeParams['uid'];
        model.pageId = $routeParams['pid'];
        model.websiteId = $routeParams['wid'];
        model.doYouTrustUrl = doYouTrustUrl;
        model.sortWidget = sortWidget;

        function init() {
            WidgetService
                .findWidgetsByPageId(model.pageId)
                .then(function (response) {
                    model.widgets = response.data;
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

        function sortWidget(initial, final) {
            WidgetService
                .sortWidget(model.pageId, initial, final)
        }

    }
})();