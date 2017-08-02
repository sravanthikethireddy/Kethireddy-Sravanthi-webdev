module.exports = function (app) {
    // app.post("")
    // var app = require("../express");

    var users = [
        {_id: "123", username: "alice",    password: "alice",    firstName: "Alice",  lastName: "Wonder" },
        {_id: "234", username: "bob",      password: "bob",      firstName: "Bob",    lastName: "Marley"  },
        {_id: "345", username: "charly",   password: "charly",   firstName: "Charly", lastName: "Garcia"  },
        {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose",   lastName: "Annunzi" }
    ];

// http handlers
    app.get("/api/user", createUser);
    app.get("/api/user/:userId", findUserById);
    app.get("/api/user/:userId", updateUser);
    app.get("/api/user/:userId", deleteUser);
    app.get("/api/user",findUser);
    // app.get("/api/user", findUser);
    // app.post("/api/user", registerUser);
    // app.put("/api/user/:userId", updateUser);
    function createUser(req, res) {
        var user = req.body;
        user._id = new Date().getTime()+"";
        users.push(user);
        res.json(user);
    }

    function findUserById(req,res) {
        var userId = req.params.userId;
        var user = users.find(function (u) {
            return u._id==userId;
        });
        res.json(user);

    }

    function updateUser(req, res) {
        var userId = req.params.userId;
        var user = req.body;

        for(var u in users) {
            if(users[u]._id === userId) {
                users[u].firstName = user.firstName;
                users[u].lastName=user.lastName;
                res.json(user[u]);
                return;
            }
        }
        res.sendStatus(404);
    }

    function deleteUser(req,res) {
        var userId = req.params.userId;
        for(var u in users){
            if(users[u]._id===userId){
                users.splice(u,1);
                res.sendStatus(200);
                return;
            }
        }

        res.sendStatus(404);
    }

    function findUser(req, res) {
        var username = req.query.username;
        var password = req.query.password;


        if(username && password) {
            findUserByCredentials(req,res);
        } else if(username) {
            findUserByUsername(req,res);
        }
        res.send("0");
    }

function findUserByCredentials(req,res) {
    var username = req.query.username;
    var password = req.quoteery.password;
    var user = user.find(function (user) {
        return user.username == username && user.password == password;
    });
    res.json(user);
}
function findUserByUsername(req,res) {
    var user = users.find(function (u) {
        return u.username == req.queery.username;
    });
    if (user){
        res.json(user);
    }else{
        res.sendStatus(404);
    }
}
};