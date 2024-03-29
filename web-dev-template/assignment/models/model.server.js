module.exports = function () {
    // console.log("in model.server");

    var mongoose = require('mongoose');
    // mongoose.connect('mongodb://localhost/wam-fall-2016');
    mongoose.connect('mongodb://user:user@ds033056.mlab.com:33056/webdev_mongodb');


    var userModel = require("./user/user.model.server")();
    var websiteModel = require("./website/website.model.server")();
    var pageModel = require("./page/page.model.server")();
    var widgetModel = require("./widget/widget.model.server")();
    
    var model = {
        userModel: userModel,
        websiteModel: websiteModel,
        pageModel: pageModel,
        widgetModel: widgetModel
    };

    websiteModel.setModel(model);
    userModel.setModel(model);
    pageModel.setModel(model);
    widgetModel.setModel(model);

    return model;

};