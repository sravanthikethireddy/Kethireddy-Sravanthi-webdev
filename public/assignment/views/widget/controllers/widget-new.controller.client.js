(function () {
    angular
        .module("WebAppMaker")
        .controller("NewWidgetController", NewWidgetController);

    function NewWidgetController($location, $routeParams, WidgetService) {
        var model = this;
        var userId = $routeParams.uid;
        var pageId = $routeParams.pid;
        var websiteId = $routeParams.wid;
        model.userId = userId;
        model.pageId = pageId;
        model.websiteId = websiteId;
        model.n_widget = n_widget;

        function n_widget(n_widgetType) {
            var n_widget = {
                type: n_widgetType
            };
            WidgetService
                .createWidget(pageId, n_widget)
                .success(function (w) {
                    $location.url('/user/' + userId + '/website/' + websiteId + '/page/' + pageId + '/widget/' + w._id);
                });
        }
    }
})();