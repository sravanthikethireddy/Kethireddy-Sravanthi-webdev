module.exports = function (app, model) {
    // app.post("")
    // var app = require("../express");
    var userModel = model.userModel;
    app.post("/api/user", createUser);
    app.get("/api/user/:userId", findUserById);
    app.put("/api/user/:userId", updateUser);
    app.delete("/api/user/:userId", deleteUser);
    app.get("/api/user", findUser);
    // var users = [
    //     {_id: "123", username: "alice", password: "alice", firstName: "Alice", lastName: "Wonder"},
    //     {_id: "234", username: "bob", password: "bob", firstName: "Bob", lastName: "Marley"},
    //     {_id: "345", username: "charly", password: "charly", firstName: "Charly", lastName: "Garcia"},
    //     {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose", lastName: "Annunzi"}
    // ];

// http handlers

    // app.get("/api/user", findUser);
    // app.post("/api/user", registerUser);
    // app.put("/api/user/:userId", updateUser);
    function createUser(req, res) {
        var user = req.body;
        // user._id = new Date().getTime() + "";
        // users.push(user);
        // res.json(user);
        userModel
            .createUser(user)
            .then(function (user) {
                res.json(user);
            }, function (error) {
                res.sendStatus(404).send(error);
            });
    }

    function findUserById(req, res) {
        var userId = req.params.userId;
        // for (var u in users){
        //     if(users[u]._id===userId){
        //         res.send(users[u]);
        //         return;
        //     }
        // }
        userModel
            .findUserById(userId)
            .then(function (user) {
                res.json(user);
            }, function (error) {
                res.sendStatus(404).send(error);
            });

    }

    function updateUser(req, res) {
        var userId = req.params.userId;
        var n_user = req.body;

        // for (var u in users) {
        //     if (users[u]._id === userId) {
        //         users[u].firstName = user.firstName;
        //         users[u].lastName = user.lastName;
        //         res.json(user[u]);
        //         return;
        //     }
        // }
        // res.sendStatus(404);
        userModel
            .updateUser(userId, n_user)
            .then(function (user) {
                res.json(user);
            }, function (error) {
                res.sendStatus(404).send(error);
            });
    }

    function deleteUser(req, res) {
        var userId = req.params.userId;
        // for (var u in users) {
        //     if (users[u]._id === userId) {
        //         users.splice(u, 1);
        //         res.sendStatus(200);
        //         return;
        //     }
        // }
        //
        // res.sendStatus(404);
        userModel
            .deleteUser(userId)
            .then(function (status) {
                    res.send(200);
                },
                function (error) {
                    res.sendStatus(404).send(error);
                });
    }

    function findUser(req, res) {
        var username = req.query.username;
        var password = req.query.password;


        // if(username && password) {
        //     for(var u in users) {
        //         var _user = users[u];
        //         if(_user.username === username && _user.password === password) {
        //             res.send(_user);
        //             return;
        //         }
        //     }
        // } else if(username) {
        //     for(var u in users) {
        //         if(users[u].username === username) {
        //             res.send(users[u]);
        //             return;
        //         }
        //     }
        // }
        // res.send("0");
        if (username && password) {
            findUserByCredentials(req, res);
        }
        else if (username) {
            findUserByUsername(req, res);
        }
    }

    function findUserByCredentials(req, res) {
        var username = req.query.username;
        var password = req.query.password;
        // var user = users.find(function (user) {
        //     return user.username == username && user.password == password;
        // });
        // res.json(user);
        userModel
            .findUserByCredentials(username, password)
            .then(function (u_array) {
                if (u_array.length !== 0) {
                    res.json(u_array[0]);
                }
                else {
                    res.send('0');//res.sendStatus(404);
                }
            }, function (error) {
                res.sendStatus(404).send(error);
            });
    }


    function findUserByUsername(req, res) {
        // var user = users.find(function (u) {
        //     return u.username == req.query.username;
        // });
        // if (user) {
        //     res.json(user);
        // } else {
        //     res.sendStatus(404);
        // }
        var u_name = req.query.username;
        userModel
            .findUserByUsername(u_name)
            .then(function (users) {
                if (users.length != 0) {
                    res.json(users[0]);
                }
                else {
                    res.send('0');//res.sendStatus(404);
                }
            }, function (error) {
                res.sendStatus(404).send(error);
            });
    }
};