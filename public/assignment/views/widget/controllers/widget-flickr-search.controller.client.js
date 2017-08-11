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

        function init() {
            WidgetService
                .findWidgetsByPageId(model.pageId)
                .then(function (response) {
                    model.widgets = response.data;

                });
        }

        init();

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
            var n_widget = {
                _id: model.widgetId,
                pageId: model.pageId,
                url: url,
                type: "IMAGE",
                widgetType: "IMAGE",
                width: "100%"

            };
            WidgetService
                .updateWidget(model.websiteId, n_widget)
                .then(function (response) {
                    var value = response.data;
                    if (value) {
                        $location.url("/user/" + model.userId + "/website/" + model.websiteId + "/page/" + model.pageId + "/widget/" + model.widgetId);
                    }
                    else {
                        model.error = "Error!"
                    }
                });
        }
    }
})();