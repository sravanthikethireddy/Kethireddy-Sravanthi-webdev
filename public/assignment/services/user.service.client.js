/**
 * Created by Sravanthi Kethireddy on 7/19/2017.
 */
(function () {
    angular
        .module("WebAppMaker")
        .factory("UserService", UserService);

    function UserService($http) {

        var api = {
            "createUser": createUser,
            "findUserById": findUserById,
            "findUserByUsername": findUserByUsername,
            "findUserByCredentials": findUserByCredentials,
            "updateUser": updateUser,
            "deleteUser": deleteUser
        };
        return api;

        function createUser(user) {
            var url = "/api/user";
            return $http.post(url,user);
        }

        function findUserById(id) {
        var url ="/api/user/" + id;
            return $http.get(url);

        }

        function findUserByUsername(username) {
            var url = "/api/user?username="+username;
            return $http.get(url);


        }

        function findUserByCredentials(username, password) {
            var url = "/api/user?username=" + username + "&password=" + password
            return $http.get(url);

        }

        function updateUser(userId, updateUser) {
            var url = "/api/user/" + userId;
            return $http.put(url, updateUser);


        }

        function deleteUser(userId) {
            var url = '/api/user/'+ userId;
            return $http.delete(url);


        }

    }
})();
