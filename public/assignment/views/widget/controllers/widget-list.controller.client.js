(function () {
    angular
        .module("WebAppMaker")
        .controller("WidgetListController", WidgetListController);

    function WidgetListController($routeParams, WidgetService, $sce) {
        var model = this;
        model.getTrustedHtml = getTrustedHtml;
        model.doYouTrustUrl = doYouTrustUrl;
        model.reorderWidget = reorderWidget;
        var websiteId = $routeParams.wid;
        model.userId = $routeParams.uid;
        model.websiteId = websiteId;
        model.pageId = $routeParams.pid;

        function init() {
            WidgetService
                .findWidgetsByPageId(model.pageId)
                .then(function (response) {
                    model.widgets = response.data;
                });
        }

        init();


        function getTrustedHtml(html) {
            return $sce.trustAsHtml(html.text);
        }



        function doYouTrustUrl(url) {
            var baseUrl = "https://www.youtube.com/embed/";
            var urlParts = url.url.split('/');
            var id = urlParts[urlParts.length - 1];
            baseUrl += id;
            return $sce.trustAsResourceUrl(baseUrl);
        }
        function reorderWidget(start, end) {
            WidgetService
                .reorderWidget(model.pageId, start, end)
                .then(function (response) {
                    init();
                });
        }
    }
})();