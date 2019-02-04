//importing the ORM for database use
var orm = require("../config/orm.js");

var user = {
    getAll: function (cb) {
        orm.getAll(function (res) {
            cb(res);
        });
    }
};
module.exports = user;
