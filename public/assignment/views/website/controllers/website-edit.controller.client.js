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

        function init() {
            model.websites = WebsiteService.findWebsitesByUser(model.userId);
            model.website = WebsiteService.findWebsiteById(model.websiteId);
        }

        init();
        model.updatesite = updatesite;
        model.deletesite = deletesite;
        model.back = back;

        function updatesite(n_site) {
            WebsiteService
                .updateWebsite(model.websiteId, n_site)
                .then(function (updated) {
                    $location.url('/user/' + model.userId + '/website');


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
