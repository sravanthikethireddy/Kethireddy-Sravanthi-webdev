/**
 * Created by Sravanthi Kethireddy on 7/19/2017.
 */
(function () {
    angular
        .module("WebAppMaker")
        .factory("UserService", UserService);
    var users = [
        {_id: "123", username: "alice", password: "alice", firstName: "Alice", lastName: "Wonder"},
        {_id: "234", username: "bob", password: "bob", firstName: "Bob", lastName: "Marley"},
        {_id: "345", username: "charly", password: "charly", firstName: "Charly", lastName: "Garcia"},
        {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose", lastName: "Annunzi"}
    ];

    function UserService() {

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
            users.push(user);
            console.log(user);
            return null;

        }

        function findUserById(id) {
            for (var u in users) {
                var user = users[u];
                if (user._id === id) {
                    return users[u];
                }
            }
            return null;
        }

        function findUserByUsername(username) {
            for (var u in users) {
                var user = users[u];
                if (user.username === username) {
                    return users[u];
                }
            }
            return null;

        }

        function findUserByCredentials(username, password) {
            for (var u in users) {
                var user = users[u];
                if (user.username === username && user.password === password) {
                    return users[u];
                }
            }

            return null;
        }

        function updateUser(userId, updateUser) {
            for (var u in users) {
                var user = users[u];
                if (user._id === userId) {
                    user[u].firstName = updateUser.firstName;
                    user[u].lastName = updateUser.lastName;
                    user[u].email = updateUser.email;
                    user[u].username = updateUser.username;
                    user[u].password = updateUser.password;
                    return users[u];

                }
            }
            return null;

        }

        function deleteUser(userId) {
            for (var u in users) {
                var user = users[u];
                if (user._id === userId) {
                    users.splice(u, 1);
                    return user;
                }
            }
            return null;

        }

    }
})();
