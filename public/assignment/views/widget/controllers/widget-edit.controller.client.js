(function () {
    angular
        .module("WebAppMaker")
        .controller("WidgetEditController", WidgetEditController);

    function WidgetEditController($routeParams, $location, WidgetService) {
        var model = this;
        var userId = $routeParams.uid;
        var webSiteId = $routeParams.wid;
        var pageId = $routeParams.pid;
        var widgetId = $routeParams.wgid;
        model.userId = userId;
        model.websiteId = webSiteId;
        model.pageId = pageId;
        model.widgetId = widgetId;
        model.updateWidget = updateWidget;
        model.deleteWidget = deleteWidget;

        function init() {
            WidgetService
                .findWidgetById(model.widgetId)
                .then(function (response) {
                    model.widget = response.data;
                });
        }

        init();

        function updateWidget(n_widget) {
            var value = WidgetService
                .updateWidget(model.widgetId, n_widget)
                .then(function (response) {
                    if (value) {
                        $location.url('/user/' + model.userId + '/website/' + model.websiteId + '/page/' + model.pageId + '/widget');
                    }
                });
        }

        function deleteWidget() {
            var value = WidgetService
                .deleteWidget(model.widgetId)
                .then(function (response) {
                    if (value) {
                        $location.url('/user/' + model.userId + '/website/' + model.websiteId + '/page/' + model.pageId + '/widget');
                    }
                });
        }
    }
})();