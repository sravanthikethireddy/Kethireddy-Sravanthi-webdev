/**
 * Created by Sravanthi Kethireddy on 7/21/2017.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("WidgetEditController", WidgetEditController);
    function WidgetEditController($routeParams,WidgetService,$location,$sce) {
        var model=this;
        model.userId=$routeParams['uid'];
        model.pageId=$routeParams['pid'];
        model.websiteId=$routeParams['wid'];
        model.widgetId=$routeParams['wgid'];
        model.updateWidget=updateWidget;
        model.deleteWidget=deleteWidget;
        // model.uploadImage=uploadImage;
        function init() {
            WidgetService.findWidgetById(model.widgetId)
                .then(function (response) {
                    model.widget = response.data;
                });
        }
        init();
        function updateWidget(widgetId, widget) {
            WidgetService
                .updateWidget(widgetId, widget)
                .then(function () {
                    $location.url('/user/' + model.userId + '/website/' + model.websiteId + '/page/' + model.pageId + '/widget');
                });
        }
        function deleteWidget(widgetId) {
            WidgetService
                .deleteWidget(widgetId)
                .then(function () {
                    $location.url('/user/' + model.userId + '/website/' + model.websiteId + '/page/' + model.pageId + '/widget');

                });
        }
    }
})();
