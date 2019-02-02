//importing the ORM for database use
var orm = require("../config/orm.js");

var rent = {
    getRentData: function (burger, cb) {
        orm.getRentData(burger, function (res) {
            cb(res);
        });
    
    }
};

module.exports = rent;
