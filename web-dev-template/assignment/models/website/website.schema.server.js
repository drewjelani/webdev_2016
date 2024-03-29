/**
 * Created by andrewdickens on 11/19/16.
 */

module.exports = function () {
    var mongoose = require("mongoose");
    var websiteSchema = mongoose.Schema({
            _user: [{type: mongoose.Schema.Types.ObjectId, ref: 'UserModel'}],
            name: String,
            description: String,
            pages: [{type: mongoose.Schema.Types.ObjectId, ref: 'PageModel'}],
            dateCreated: Date
        },
        {collection: "website"}
    );
    return websiteSchema;
};
