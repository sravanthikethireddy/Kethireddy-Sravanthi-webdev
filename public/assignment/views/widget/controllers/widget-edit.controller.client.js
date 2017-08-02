/**
 * Created by Sravanthi Kethireddy on 7/21/2017.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("WidgetEditController", WidgetEditController);
    function WidgetEditController($routeParams,WidgetService,$location,$sce) {
        var vm=this;
        vm.userId=$routeParams['uid'];
        vm.pageId=$routeParams['pid'];
        vm.websiteId=$routeParams['wid'];
        vm.widgetId=$routeParams['wgid'];
        vm.updateWidget=updateWidget;
        vm.deleteWidget=deleteWidget;
        function init() {
            WidgetService.findWidgetById(vm.widgetId)
                .then(function (widget) {
                    vm.widget = widget;
                });
        }
        init();
        function updateWidget(widget) {
            WidgetService
                .updateWidget(widgetId, widget)
                .then(function () {
                    $location.url('/user/' + vm.userId + '/website/' + vm.websiteId + '/page/' + vm.pageId + '/widget');
                });
        }
        function deleteWidget() {
            WidgetService
                .deleteWidget(widgetId)
                .then(function () {
                    $location.url('/user/' + vm.userId + '/website/' + vm.websiteId + '/page/' + vm.pageId + '/widget');

                })
        }
    }
})();
