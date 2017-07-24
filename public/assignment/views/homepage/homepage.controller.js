(function () {
    angular
        .module('WebAppMaker')
        .controller('homepageController', homepageController);

    function homepageController(currentUser) {
        var model = this;
        model.currentUser = currentUser;
    }
})();