// console.log("Hello")
module.exports = function(app) {
    var model = require("./model/model.server")();
    require("./services/user.service.server")(app,model);
    require("./services/website.service.server")(app,model);
    require("./services/page.service.server")(app,model);
    require("./services/widget.service.server")(app,model);
};
