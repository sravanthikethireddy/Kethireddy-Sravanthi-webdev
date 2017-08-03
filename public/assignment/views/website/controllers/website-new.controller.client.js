/**
 * Created by Sravanthi Kethireddy on 7/21/2017.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("WebsiteNewController", WebsiteNewController);

    function WebsiteNewController($routeParams, WebsiteService, $location) {
        var model = this;
        model.userId = $routeParams['uid'];

        model.createWebsite = createWebsite;

        function init() {
            WebsiteService
                .findAllWebsitesForUser(model.userId)
                .then(function (websites) {
                    model.websites = websites;
                });

        }

        init();

        function createWebsite(website) {
            // var newWebsite = WebsiteService.createWebsite(model.userId, website);
            // if (newWebsite) {
                // $location.url("/user/" + model.userId + "/website");
            // init();
            // }
            WebsiteService
                .createWebsite(userId, website)
                .then(function (website) {
                    $location.url("/user/" + model.userId + "/website");

                })
        }
    }
})();