/**
 * Created by Sravanthi Kethireddy on 7/21/2017.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("WebsiteListController",WebsiteListController);
    function WebsiteListController($routeParams,WebsiteService) {
        var model = this;
        model.userId = $routeParams['userId'];
        function init() {
             WebsiteService
                 .findAllWebsitesForUser(model.userId)
                 .then(function (websites) {
                     // console.log("all websites")
                     model.websites = websites;
                 });
        }
        init()
    }
})();