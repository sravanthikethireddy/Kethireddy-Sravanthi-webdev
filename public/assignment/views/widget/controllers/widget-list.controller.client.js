(function () {
    angular
        .module("WebAppMaker")
        .controller("WidgetListController", widgetListController);

    function widgetListController($routeParams, WidgetService, $sce) {
        var model = this;
        model.getTrustedHtml = getTrustedHtml;
        model.getWidgetTemplateUrl = getWidgetTemplateUrl;
        model.doYouTrustUrl = doYouTrustUrl;
        var widgets;
        var websiteId = $routeParams.wid;
        model.userId = $routeParams.uid;
        model.websiteId = websiteId;
        model.pageId = $routeParams.pid;

        function init() {
            WidgetService
                .findWidgetsByPageId(model.pageId)
                .success(function (widgets) {
                    model.widgets = widgets;
                    if (widgets.length === 0) {
                        model.message = "No widgets found!";
                    }
                });
            var initialIndex = -1;
            var finalIndex = -1;
            $('#widget-list').sortable({
                axis: "y",
                initial: function (event, ui) {
                    initialIndex = ui.item.index();
                },
                final: function (event, ui) {
                    finalIndex = ui.item.index();
                    WidgetService
                        .sortWidgetList(model.pageId, initialIndex, finalIndex)
                        .success(function (widgets) {
                            console.log("success!")
                        })
                }
            });
        }

        init();


        function getTrustedHtml(html) {
            return $sce.trustAsHtml(html);
        }

        function getWidgetTemplateUrl(widgetType) {
            var url = 'views/widget/templates/widget-' + widgetType + '.view.client.html';
            return url;
        }

        function doYouTrustUrl(url) {
            var baseUrl = "https://www.youtube.com/embed/";
            var urlParts = url.split('/');
            var id = urlParts[urlParts.length - 1];
            baseUrl += id;
            return $sce.trustAsResourceUrl(baseUrl);
        }
    }
})();