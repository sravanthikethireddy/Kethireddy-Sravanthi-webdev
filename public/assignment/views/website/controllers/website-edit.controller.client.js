/**
 * Created by Sravanthi Kethireddy on 7/21/2017.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("WebsiteEditController", WebsiteEditController);

    function WebsiteEditController($routeParams, WebsiteService, $location) {
        var model = this;
        model.userId = $routeParams['uid'];
        model.websiteId = $routeParams['wid'];

        model.updateWebsite = updateWebsite;
        model.deletesite = deletesite;
        model.back = back;

        function init() {
            WebsiteService
                .findWebsitesByUser(model.userId)
                .then(function (response) {
                    model.websites = response.data
                });

            WebsiteService
                .findWebsiteById(model.websiteId)
                .then(function (response) {
                    model.website = response.data
                })

        }

        init();


        function updateWebsite() {
            WebsiteService
                .updateWebsite(model.website)
                .then(function (response) {
                    var value = response.data;
                    if (value) {
                        $location.url('/user/' + model.userId + '/website');
                    }
                    else{
                        console.log("testing")
                    }

                });
        }

        function deletesite() {
            var site = WebsiteService.deleteWebsite(model.websiteId);
            if (site) {
                $location.url("/user/" + model.userId + "/website");

            }
            else {
                model.error = "Unable to delete the website"
            }

        }

        function back() {
            $location.url('/user/' + model.userId + '/website')
        }
    }
})();
