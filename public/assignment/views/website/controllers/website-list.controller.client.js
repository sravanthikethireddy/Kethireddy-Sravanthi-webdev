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
        var websites;
        function init() {
            WebsiteService
                 .findWebsitesByUser(model.userId)
                 .then(function (response) {
                     console.log(model.userId);
                     model.websites = response.data;
                 });
        }
        init()
    }
})();