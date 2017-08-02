/**
 * Created by Sravanthi Kethireddy on 7/19/2017.
 */
(function () {
    angular
        .module("WebAppMaker")
        .factory("WidgetService", WidgetService);

    function WidgetService($http) {
        var api = {
            "createWidget": createWidget,
            "findWidgetsByPageId": findWidgetsByPageId,
            "findWidgetById": findWidgetById,
            "updateWidget": updateWidget,
            "deleteWidget": deleteWidget,
            "createWidgetHeader": createWidgetHeader,
            "createWidgetImage": createWidgetImage,
            "createWidgetYouTube": createWidgetYouTube,
            "sortWidget":sortWidget


        };

        return api;

        function createWidget(pageId, widget) {
            var url = '/api/page/' + pageId + '/widget';
            return $http.post(url, widget);

        }

        function findWidgetsByPageId(pageId) {
            var url = '/api/page/' + pageId + '/widget';
            return $http.get(url);


        }

        function findWidgetById(widgetId) {
            var url = '/api/widget/' + widgetId;
            return $http.get(url);

        }

        function updateWidget(widgetId, widget) {
var url = '/api/widget/' + widgetId;
            return $http.put(url, widget);


        }

        function deleteWidget(widgetId) {
            var url ='/api/widget/' + widgetId;
            return $http.delete(url);


        }

        function createWidgetHeader(pageId, widget) {
            var url = '/api/page/' + pageId + '/widget';
            return $http.post(url, widget);

        }

        function createWidgetImage(pageId, widget) {
            var url = '/api/page/' + pageId + '/widget';
            return $http.post(url, widget);

        }

        function createWidgetYouTube(pageId, widget) {
           var url = '/api/page/' + pageId + '/widget';
            return $http.post(url, widget);


        }
        function sortWidget(pageId, inital, final) {
            return $http.put("/api/page/" + pageId + "/widget?initial=" + initial + "&final=" + final);

        }
        }


})();