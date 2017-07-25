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
        // vm.addWidget = addWidget;
        vm.createWidget = createWidget;

        function init() {
            vm.widgets = WidgetService.findWidgetsByPageId(vm.pageId)
        }

        init();

        function createWidget(widget) {
            var w = WidgetService.createWidget(vm.pageId, widget);
            $location.url('/user/' + vm.userId + '/website/' + vm.websiteId + '/page/' + vm.pageId + '/widget/' + w._id);
        }
    }
})();
