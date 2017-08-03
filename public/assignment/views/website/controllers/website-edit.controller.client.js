/**
 * Created by Sravanthi Kethireddy on 7/21/2017.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("WebsiteEditController", WebsiteEditController);

    function WebsiteEditController($routeParams, WebsiteService, $location) {
        var model = this;
        model.userId = $routeParams['userId'];
        model.websiteId = $routeParams['websiteId'];

        function init() {
            model.websites = WebsiteService.findAllWebsitesForUser(model.userId);
            model.website = WebsiteService.findWebsiteById(model.websiteId);
        }

        init();
        model.updateWebsite = updateWebsite;
        model.deleteWebsite = deleteWebsite;
        model.back = back;

        function updateWebsite(newSite) {
            var site = WebsiteService.updateWebsite(model.websiteId, newSite);
            if (site) {
                model.message = "Website updated";
                $location.url("/user/" + model.userId + "/website");
            }
            else {
                model.error = "Error while updating website"
            }
        }

        function deleteWebsite() {
            var site = WebsiteService.deleteWebsite(model.websiteId);
            if (site) {
                $location.url("/user/" + model.userId + "/website");

            }
            else {
                model.error = "Unable to delete the website"
            }

        }
        function back() {
            $location.url('/user/'+model.userId+'/website')
        }
    }
})();
