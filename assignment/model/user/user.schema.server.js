module
    .exports = function () {
    var mongoose = require("mongoose");


    var userSchema = mongoose.Schema({
        username: String,
        password: String,
        firstName: String,
        lastName: String,
        email: String,
        phone: String,
        // wesites: String,
        websites: [{type: mongoose.Schema.Types.ObjectId, ref: 'websiteModel'}],
        dateCreated: {type: Date, default: Date.now()}
        // isAdmin: Boolean
    }, {collection: "user"});
    // module.exports = userSchema;
    return userSchema
};