// var app = require("../express");
module.exports = function (app,model) {
var websiteModel = model.websiteModel;

    app.post("/api/user/:userId/website", createWebsite);
    app.get("/api/user/:userId/website", findAllWebsitesForUser);
    // app.get("/api/user/:userId/website/:websiteId", findWebsiteById);
    app.get("/api/website/:websiteId", findWebsiteById);
    app.put("/api/website/:websiteId", updateWebsite);
    app.delete("/api/website/:websiteId", deleteWebsite);

    // var websites = [
    //     {"_id": "123", "name": "Facebook", "developerId": "456", "description": "Lorem"},
    //     {"_id": "234", "name": "Tweeter", "developerId": "456", "description": "Lorem"},
    //     {"_id": "456", "name": "Gizmodo", "developerId": "456", "description": "Lorem"},
    //     {"_id": "890", "name": "Go", "developerId": "123", "description": "Lorem"},
    //     {"_id": "567", "name": "Tic Tac Toe", "developerId": "123", "description": "Lorem"},
    //     {"_id": "678", "name": "Checkers", "developerId": "123", "description": "Lorem"},
    //     {"_id": "789", "name": "Chess", "developerId": "234", "description": "Lorem"}
    // ];

    function createWebsite(req, res) {
        var website = req.body;
        var userId = req.params.userId;
        // website.developerId = userId;
        // website._id = (new Date()).getTime() + "";
        //
        // websites.push(website);
        // res.json(website);
        websiteModel
            .createWebsite(userId, website)
            .then(function (website) {
                res.json(website);
            }, function (error) {
                res.statusCode(404).send(error);
            });
    }

    function findAllWebsitesForUser(req, res) {
        var userId = req.params.userId;

        // var sites = [];
        //
        // for (var w in websites) {
        //     // console.log("websites!")
        //     // console.log(userId)
        //     if (websites[w].developerId === req.params.userId) {
        //         sites.push(websites[w]);
        //     }
        // }
        //
        // res.json(sites);
        websiteModel
            .findAllWebsitesForUser(userId)
            .then(function (sites) {
                res.json(sites);
            }, function (error) {
                res.sendStatus(404).send(error);
            });
    }

    function findWebsiteById(req, res) {
        var websiteId = req.params.websiteId;
        // for (var w in websites) {
        //     if (websites[w]._id === req.params['websiteId']) {
        //         // res.json(websites[w]);
        //         res.send(websites[w]);
        //         return;
        //     }
        // }
        // res.sendStatus(404);
            websiteModel
                .findWebsiteById(websiteId)
                .then(function (site) {
                    res.json(site);
                }, function (error) {
                    res.sendStatus(404).send(error);
                });
    }

    function updateWebsite(req, res) {
        var websiteId = req.params.websiteId;
        var website = req.body;
        // for (w in websites) {
        //     if (websites[w]._id === websiteId) {
        //         websites[w].name = website.name;
        //         websites[w].description = website.description;
        //         res.json(websites[w]);
        //         return;
        //     }
        // }
        websiteModel
            .updateWebsite(websiteId, website)
            .then(function (status) {
                // res.json(website);
                res.send(200)
            }, function (error) {
                // res.send("0");
                res.sendStatus(404).send(error);
            });
    }
    function deleteWebsite(req,res) {
        var websiteId = req.params.websiteId;
        // for(w in websites){
        //     if (websites[w]._id===websiteId){
        //         websites.splice(w,1);
        //         res.sendStatus(200);
        //         return
        //     }
        // }
        // res.sendStatus(404);
        websiteModel
            .deleteWebsite(websiteId)
            .then(function (status) {
                res.sendStatus(200);
            }, function (error) {
                res.sendStatus(404).send(error);
            });
    }

};