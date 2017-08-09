module
    .exports=function () {
    // var model = null;
    var mongoose = require("mongoose");
    var pageSchema = mongoose.Schema({
        _website :{type: mongoose.Schema.ObjectId, ref:"websiteModel"},
        name : String,
        title: String,
        description: String,
        widgets:[{type: mongoose.Schema.Types.ObjectId, ref:'widgetModel'}],
        dateCreated: {type: Date, default: Date.now()}
    },{collection:"page"});
    return pageSchema;
};