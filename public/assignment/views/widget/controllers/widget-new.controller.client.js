(function () {
    angular
        .module("WebAppMaker")
        .controller("WidgetNewController", WidgetNewController);

    function WidgetNewController($location, $routeParams, WidgetService) {
        var model = this;
        var userId = $routeParams.uid;
        var pageId = $routeParams.pid;
        var websiteId = $routeParams.wid;
        model.userId = userId;
        model.pageId = pageId;
        model.websiteId = websiteId;
        model.createWidget = createWidget;

        function init() {

            WidgetService
                .findWidgetsByPageId(model.pageId)
                .then(function (response) {
                    model.widgets=response.data;
                })
        }
        init();

        function createWidget(pageId,n_widgetType) {
            if(n_widgetType==="HEADER"){
                var  n_widget={
                    type:"HEADER",
                    _page:model.pageId,
                    text:"text"
                }
            }
            else if(n_widgetType==="HTML"){
                var  n_widget={
                    type:"HTML",
                    _page:model.pageId,
                    text:"",

                }
            }
            else if(n_widgetType==="TEXT"){
                var  n_widget={
                    type:"TEXT",
                    _page:model.pageId,
                    text:"",
                    placeholder:" "
                }
            }
            else if(n_widgetType==="IMAGE"){
                var  n_widget={
                    type:"IMAGE",
                    _page:model.pageId,
                    width:"100%",
                    url:"http://lorempixel.com/400/200/"
                }
            }
            else if(n_widgetType==="YOUTUBE"){
                var  n_widget={
                    type:"YOUTUBE",
                    _page:model.pageId,
                    width:"100%",
                    url:"https://www.youtube.com/watch?v=1DXHE4kt3Fw"
                }
            }


            WidgetService
                .createWidget(pageId, n_widget)
                .then(function (response) {
                    var value = response.data;
                    if(value) {
                        var widgetId = value._id;
                        $location.url('/user/' + model.userId + '/website/' + model.websiteId + '/page/' + model.pageId + '/widget/' + widgetId);
                    }
                });
        }
    }
})();