/**
 * Created by Sravanthi Kethireddy on 7/21/2017.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("WebsiteListController",WebsiteListController);
    function WebsiteListController($routeParams,WebsiteService) {
        var model = this;
        model.userId = $routeParams['uid'];
        function init() {
            WebsiteService
                 .findAllWebsitesForUser(model.userId)
                 .then(function (response) {
                     console.log(model.userId)
                     model.websites = response.data;
                 });
        }
        init()
    }
})();