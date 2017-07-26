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
        vm.widgetUpdate=widgetUpdate;
        vm.widgetDelete=widgetDelete;
        function init() {
            vm.widgets=WidgetService.findWidgetsByPageId(vm.pageId);
            vm.widget=WidgetService.findWidgetById(vm.widgetId);
            console.log(vm.widget);
        }
        init();

        function widgetUpdate(widget) {
            console.log("hi")
            var w = WidgetService.updateWidget(vm.widgetId,widget);
            // if (w){
                $location.url("/user/"+vm.userId+"/website/"+vm.websiteId+"/page/"+vm.pageId+"/widget");
            // }
            // else {
            //     vm.error = "Unable to update widget"
            // }
        }
        function widgetDelete(widgetId) {
            var w = WidgetService.deleteWidget(widgetId);
            // if (w){
                $location.url("/user/"+vm.userId+"/website/"+vm.websiteId+"/page/"+vm.pageId+"/widget");
            // }
            // else {
            //     vm.error = "Unable to delete widget"
            // }
        }
    }
})();
