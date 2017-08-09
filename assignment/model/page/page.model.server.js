module
    .exports=function () {
    var model = {};
    var mongoose = require("mongoose");
    var pageSchema = require("./page.schema.server")();
    var pageModel = mongoose.model("pageModel",pageSchema);
    var api={
        createPage: createPage,
        findAllPagesForWebsite: findAllPagesForWebsite,
        findPageById: findPageById,
        updatePage: updatePage,
        deletePage: deletePage
    };
    return api;
    function createPage(wid,page) {
        page._website = wid;
        return pageModel.create(page);
    }
    function findAllPagesForWebsite(wid){
        return pageModel.find({_website:wid});
    }

    function findPageById(pid){
        return pageModel.findById(pid);
    }
    function updatePage(pid,page){
        return pageModel
            .update({_id:pid},{
                $set:{
                    name:page.name,
                    title:page.title,
                    description:page.description
                }
            });
    }
    function deletePage(pid){
        return pageModel.remove({_id:pid});
    }
};