

var connection = require("../config/connection.js");

var orm = {

    getUserData: function (cb) {
        var queryString = "SELECT * FROM USER_INFO";
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    insertUser: function (burger, cb) {
        var queryString = "INSERT INTO USER_INFO (burger_name) VALUES (?)";
        connection.query(queryString, [burger], function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    getRentData: function (id, cb) {
        var queryString = "SELECT * FROM CURRENT_RENTS WHERE id = ?";

        connection.query(queryString, [id], function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }
};