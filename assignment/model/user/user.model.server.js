module
.exports=function () {
  var model = {};
  var mongoose = require("mongoose");
  var userScheme = require("./user.schema.server")();
  var userModel = mongoose.model("userModel",userScheme);
  var api = {
      createUser: createUser,
      findUserById: findUserById,
      findUserByUsername: findUserByUsername,
      findUserByCredentials: findUserByCredentials,
      updateUser: updateUser,
      deleteUser: deleteUser
  };
  return api;
  function createUser(user) {
      return userModel.create(user);
  }
  function findUserById(uid) {
      return userModel.findById(uid);
  }
  function findUserByUsername(username) {
      return userModel.find({username: username});
  }
  function findUserByCredentials(username, password) {
      return userModel.find({username: username, password: password});
  }
  function updateUser(userId,user ) {
      return userModel.update({_id: userId},{$set:user});
  }
  function deleteUser(userId) {
return userModel.remove({_id:userId});
  }

};