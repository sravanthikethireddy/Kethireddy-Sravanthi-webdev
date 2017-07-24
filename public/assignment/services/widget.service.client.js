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
            "deleteWidget": deleteWidget


        };
        return api;
        function createWidget(pageId, type) {
            var widget = {
                    "._id": (new Date()).getTime(),
                    "pageId": pageId,
                    "widgetType": type
                }
            ;
            widgets.push(widget);
            console.log(widgets);
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

        }

        function updateWidget(widgetId, widget) {
            for (var w in widgets) {
                if (Widgets[w]._id === WidgetId) {
                    Widgets[w].name = newSite.name;
                    Widgets[w].description = newSite.description;
                }
            }
        }

        function deleteWidget(WidgetId) {
            for (var w in Widgets) {
                var site = Widgets[w];
                if (site._id === WidgetId) {
                    Widgets.splice(w, 1)
                }
            }

        }

    }

})();