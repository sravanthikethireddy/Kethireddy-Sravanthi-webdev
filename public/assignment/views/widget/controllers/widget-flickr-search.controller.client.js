(function () {
    angular
        .module("WebAppMaker")
        .controller("FlickrImageSearchController", FlickrImageSearchController);

    function FlickrImageSearchController($routeParams, WidgetService, $location, FlickrService) {
        var model = this;
        var userId = $routeParams.uid;
        var webSiteId = $routeParams.wid;
        var pageId = $routeParams.pid;
        var widgetId = $routeParams.wgid;
        model.pageId = pageId;
        model.userId = userId;
        model.websiteId = webSiteId;
        model.widgetId = widgetId;
        model.searchPhotos = searchPhotos;
        model.selectPhoto = selectPhoto;

        function searchPhotos(searchTerm) {
            FlickrService
                .searchPhotos(searchTerm)
                .then(function (response) {
                    data = response.data.replace("jsonFlickrApi(", "");
                    data = data.substring(0, data.length - 1);
                    data = JSON.parse(data);
                    model.photos = data.photos;
                });
        }

        function selectPhoto(photo) {
            var url = "https://farm" + photo.farm + ".staticflickr.com/" + photo.server;
            url += "/" + photo.id + "_" + photo.secret + "_b.jpg";
            WidgetService
                .findWidgetById(widgetId)
                .then(function (response) {
                    var updatedWidget = response.data;
                    updatedWidget.url = url;
                    WidgetService
                        .updateWidget(widgetId, updatedWidget)
                        .then(function (response) {
                            var update_object = response;
                            if (update_object) {
                                $location.url("/user/" + userId + "/website/" + websiteId + "/page/" + pageId + "/widget");
                            }
                        }, function (error) {
                            model.error = "Update Failed!";
                        });
                }, function (error) {
                    model.error = "Widget not found!";
                });
        }
    }
})();