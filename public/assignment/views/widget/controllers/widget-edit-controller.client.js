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
            model.getEditorTemplateUrl = getEditorTemplateUrl;
            WidgetService
                .findWidgetById(model.widgetId)
                .success(function (response) {
                    model.widget = response;
                });
        }

        init();

        function updateWidget(n_widget) {
            WidgetService
                .updateWidget(widgetId, n_widget)
                .success(function (updatedWidget) {
                    $location.url('/user/' + userId + '/website/' + webSiteId + '/page/' + pageId + '/widget');
                });
        }

        function deleteWidget() {
            WidgetService
                .deleteWidget(widgetId)
                .success(function () {
                    $location.url('/user/' + userId + '/website/' + webSiteId + '/page/' + pageId + '/widget');
                });
        }

        function getEditorTemplateUrl(type) {
            if (type === undefined) {
                console.log("undefined")
            }
            else {
                return 'views/widget/templates/editors/widget-' + type + '-editor.view.client.html';
            }
        }
    }
})();