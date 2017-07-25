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
        function init() {
            vm.widgets=WidgetService.findWidgetsByPageId(vm.pageId);
            vm.widget=WidgetService.findWidgetById(vm.widgetId);
        }
        init();
        vm.updateWidget=updateWidget;
        vm.deleteWidget=deleteWidget;
        function updateWidget() {
            var w = WidgetService.updateWidget(vm.widgetId,widget);
            if (w){
                $location.url("/user/"+vm.userId+"/website/"+vm.websiteId+"/page/"+vm.pageId+"/widget");
            }
            else {
                vm.error = "Unable to update widget"
            }
        }
        function deleteWidget() {
            var w = WidgetService.deleteWidget(vm.widgetId);
            if (w){
                $location.url("/user/"+vm.userId+"/website/"+vm.websiteId+"/page/"+vm.pageId+"/widget");
            }
            else {
                vm.error = "Unable to delete widget"
            }
        }
    }
})();
