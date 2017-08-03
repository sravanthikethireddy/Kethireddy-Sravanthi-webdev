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

        function createWidget(pageId, widgetType) {
            var widget = {};
            widget.widgetType = widgetType;
            switch (widgetType) {
                case "HEADER":
                    widget.size = 5;
                    widget.text = "Heading";
                    break;
                case "HTML":
                    widget.text="html";
                    break;
                case "IMAGE":
                    widget.width="100%";
                    widget.url="http://lorempixel.com/400/200";
                    break;
                case "YOUTUBE":
                    widget.width="100%";
                    widget.url='http://lorempixel.com/400/200';
                    break;

            }
            WidgetService
                .createWidget(pageId, widget)
                .then(function (response) {
                    var wid = response.data;
                    $location.url('/user/' + model.userId + '/website/' + model.websiteId + '/page/' + model.pageId + '/widget/' + wid._id);
                });
        }

    }
})();
