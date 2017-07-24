/**
 * Created by Sravanthi Kethireddy on 7/21/2017.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("WebsiteEditController",WebsiteEditController);
    function WebsiteEditController($routeParams,WebsiteService,$location) {
var vm = this;
vm.userId=$routeParams['uid'];
vm.websiteId=$routeParams['wid'];
function init() {
    vm.websites = WebsiteService.findWebsitesByUser(vm.userId);
    vm.website = WebsiteService.findWebsiteById(vm.websiteId);
}
init();
vm.updateWebsite = updateWebsite;
vm.deleteWebsite = deleteWebsite;
function updateWebsite(newSite) {
    var site = WebsiteService.updateWebsite(vm.websiteId,newSite);
    if (site){
        vm.message = "Website updated"
        $location.url("/user"+vm.userId+"/website");
    }
    else {
        vm.error = "Error while updating website"
    }
}
function deleteWebsite() {
    var site = WebsiteService.deleteWebsite(vm.websiteId);
    if (site){
        $location.url("/user"+vm.userId+"/website");

    }
    else {
        vm.error="Unable to delete the website"
    }
    
}
    }
})();
