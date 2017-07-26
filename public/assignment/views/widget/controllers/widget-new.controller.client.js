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
        vm.createWidgetHeader = createWidgetHeader;
        vm.createWidgetImage = createWidgetImage;
        vm.createWidgetYouTube = createWidgetYouTube;

        function init() {
            vm.widgets = WidgetService.findWidgetsByPageId(vm.pageId);
            vm.widget = WidgetService.findWidgetById(vm.widgetId);
        }

        init();

        // function createWidget(widgetType) {
        //     var widget = {};
        //     widget.widgetType = widgetType;
        //     widget.editing = true;
        //     var w = WidgetService.createWidget(vm.pageId, widget);
        //     $location.url('/user/' + vm.userId + '/website/' + vm.websiteId + '/page/' + vm.pageId + '/widget/' + w);
        // }
        function createWidgetHeader(widget) {
            // console.log("hello")
            var widgetID = WidgetService.createWidgetHeader(vm.pageId,widget);
            $location.url('/user/'+vm.userId+'/website/'+vm.websiteId+'/page/'+vm.pageId+'/widget/'+widgetID);
        }
        function createWidgetImage(widget) {
            var widgetID = WidgetService.createWidgetImage(vm.pageId,widget);
            $location.url('/user/'+vm.userId+'/website/'+vm.websiteId+'/page/'+vm.pageId+'/widget/'+widgetID);
        }
        function createWidgetYouTube(widget) {
            var widgetID = WidgetService.createWidgetYouTube(vm.pageId,widget);
            $location.url('/user/'+vm.userId+'/website/'+vm.websiteId+'/page/'+vm.pageId+'/widget/'+widgetID);
        }

    }
})();
