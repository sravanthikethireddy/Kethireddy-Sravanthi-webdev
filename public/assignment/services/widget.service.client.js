/**
 * Created by Sravanthi Kethireddy on 7/19/2017.
 */
(function () {
    angular
        .module("WebAppMaker")
        .factory("WidgetService", WidgetService);
    function WidgetService() {
        var widgets = [
                {"_id": "123", "widgetType": "HEADING", "pageId": "321", "size": 2, "text": "GIZMODO"},
                {"_id": "234", "widgetType": "HEADING", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
                {
                    "_id": "345", "widgetType": "IMAGE", "pageId": "321", "width": "100%",
                    "url": "http://lorempixel.com/400/200/"
                },
                {"_id": "456", "widgetType": "HTML", "pageId": "321", "text": "<p>Lorem ipsum</p>"},
                {"_id": "567", "widgetType": "HEADING", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
                {
                    "_id": "678", "widgetType": "YOUTUBE", "pageId": "321", "width": "100%",
                    "url": "https://youtu.be/AM2Ivdi9c4E"
                },
                {"_id": "789", "widgetType": "HTML", "pageId": "321", "text": "<p>Lorem ipsum</p>"}
            ]
        ;
        var api = {
            "createWidget": createWidget,
            "findWidgetsByPageId": findWidgetsByPageId,
            "findWidgetById": findWidgetById,
            "updateWidget": updateWidget,
            "deleteWidget": deleteWidget,
            "createWidgetHeader":createWidgetHeader,
            "createWidgetImage":createWidgetImage,
            "createWidgetYouTube":createWidgetYouTube


        };

        return api;
        function createWidget(pageId, widget) {
            widget._id=(new Date()).getTime() + "";

            widget.pageId=pageId;
            widgets.push(widget);

            return widget._id;
        }

        function findWidgetsByPageId(pageId) {
            var pageWidgets = [];
            for (var w in widgets) {
                // var widget = widgets[w];
                if (widgets[w].pageId === pageId) {
                    pageWidgets.push(widgets[w]);
                }

            }
            return pageWidgets;

        }

        function findWidgetById(widgetId) {
            for (var w in widgets) {
                // var Widget = Widgets[w];
                if (widgets[w]._id === widgetId) {
                    return angular.copy(widgets[w]);
                }
            }
            return null;
            // return widgets.find(function (widget) {
            //     return widget._id===widgetId;
            // });

        }

        function updateWidget(widgetId, widget) {
            // for (var w in widgets) {
            //     if (widgets[w]._id === widgetId) {
            //         widgets[w].name = widget.name;
            //         widgets[w].description = widget.description;
            //     }
            // }
            var w = findWidgetById(widgetId);
            var w1 = w.widgetType;
            switch (w1){
                case 'HEADING':
                    w.name = widget.name;
                    w.size = widget.size;
                    w.pageId = widget.pageId;
                    w.text = widget.text;
                    break;
                case 'YOUTUBE':
                    w.name = widget.name;
                    w.width = widget.width;
                    w.pageId = widget.pageId;
                    w.text = widget.text;
                    w.url = widget.url;
                    break;
                case 'IMAGE':
                    w.name = widget.name;
                    w.width = widget.width;
                    w.pageId = widget.pageId;
                    w.text = widget.text;
                    w.url = widget.url;

                    break;
            }

        }

        function deleteWidget(widgetId) {
            // for (var w in widgets) {
            //     var site = widgets[w];
            //     if (site._id === widgetId) {
            //         widgets.splice(w, 1)
            //     }
            // }
            var w = findWidgetById(widgetId);
            var index = widgets.indexOf(w);
            widgets.splice(index,1);

        }

        function createWidgetHeader(pageId,widget) {
            widget = { "_id": "", "widgetType": "HEADING", "pageId": "", "size": "", "text": "", "name": ""};
            // widget={};
            widget._id = (new Date()).getTime()+"";
            widget.pageId=pageId;
            widgets.push(widget);
            return widget._id
        }
        function createWidgetImage(pageId,widget) {
            console.log("chech")
            widget = { "_id": "", "widgetType": "IMAGE", "pageId": "", "width": "", "url": "", "text": "", "name": "" };
            widget._id = (new Date()).getTime()+"";
            widget.pageId=pageId;
            widgets.push(widget);
            return widget._id
        }
        function createWidgetYouTube(pageId,widget) {
            console.log("check")
            widget = { "_id": "", "widgetType": "YOUTUBE", "pageId": "", "width": "", "url": "", "text": "", "name": ""};
            widget._id = (new Date()).getTime()+"";
            widget.pageId=pageId;
            widgets.push(widget);
            return widget._id
        }

    }

})();