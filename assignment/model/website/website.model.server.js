module
    .exports = function () {
    var model = {};
    var mongoose = require("mongoose");
    var websiteSchema = require("./website.schema.server")();
    var websiteModel = mongoose.model("websiteModel", websiteSchema);

    var api = {
        createWebsiteForUser: createWebsiteForUser,
        findAllWebsitesForUser: findAllWebsitesForUser,
        findWebsiteById: findWebsiteById,
        updateWebsite: updateWebsite,
        deleteWebsite: deleteWebsite

    };
    return api;

    function createWebsiteForUser(userId, website) {
        website._user = userId;
        return websiteModel.create(website);
    }

    function findAllWebsitesForUser(userId) {
        return websiteModel.find({"_user": userId});
    }

    function findWebsiteById(wid) {
        return websiteModel.findById(wid);
    }

    function updateWebsite(wid, website) {
        return websiteModel.update({_id: wid}, {
            $set: {
                name: website.name,
                description: website.description,
                _user: website._user
            }
        });
    }

    function deleteWebsite(wid) {
        return websiteModel.remove({_id: wid});
    }
};