/**
 * Created by Sravanthi Kethireddy on 7/21/2017.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("WidgetNewController", WidgetNewController);

    function WidgetNewController($routeParams, WidgetService, $location) {
        var vm = this;
        vm.userId = $routeParams['uid'];
        vm.pageId = $routeParams['pid'];
        vm.websiteId = $routeParams['wid'];
        vm.widgetId = $routeParams['wgid'];
        // vm.addWidget = addWidget;
        vm.createWidget = createWidget;

        // function init() {
        //     vm.widgets = WidgetService.findWidgetsByPageId(vm.pageId);
        //     vm.widget = WidgetService.findWidgetById(vm.widgetId);
        // }
        //
        // init();

        function createWidget(widget) {
            WidgetService
                .createWidget(vm.pageId, widget)
                .then(function (w_id) {
                    // var w_id = widgetId;
                    $location.url('/user/' + vm.userId + '/website/' + vm.websiteId + '/page/' + vm.pageId + '/widget/' + w_id);
                });
        }

    }
})();
