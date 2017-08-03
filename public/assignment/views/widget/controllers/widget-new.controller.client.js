/**
 * Created by Sravanthi Kethireddy on 7/21/2017.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("WidgetNewController", WidgetNewController);

    function WidgetNewController($routeParams, WidgetService, $location) {
        var model = this;
        model.userId = $routeParams['uid'];
        model.pageId = $routeParams['pid'];
        model.websiteId = $routeParams['wid'];
        model.widgetId = $routeParams['wgid'];
        // model.addWidget = addWidget;
        model.createWidget = createWidget;

        // function init() {
        //     model.widgets = WidgetService.findWidgetsByPageId(model.pageId);
        //     model.widget = WidgetService.findWidgetById(model.widgetId);
        // }
        //
        // init();

        function createWidget(widget) {
            WidgetService
                .createWidget(model.pageId, widget)
                .then(function (w_id) {
                    // var w_id = widgetId;
                    $location.url('/user/' + model.userId + '/website/' + model.websiteId + '/page/' + model.pageId + '/widget/' + w_id);
                });
        }

    }
})();
