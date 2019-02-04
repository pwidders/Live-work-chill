var connection = require("../config/connection.js");

var orm = {

        getAll: function (cb) {
        var queryString = "SELECT * FROM CURRENT_RENTS"
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
        addUserData: function (cb) {
            var queryString = "INSERT INTO USER_DATA VALUES ?"
            connection.query(queryString, function (err, result) {
                if (err) {
                    throw err;
                }
                cb(result);
            });
        },
        getUserData: function (cb) {
            var queryString = "select * from USER_DATA VALUES"
            connection.query(queryString, function (err, result) {
                if (err) {
                    throw err;
                }
                cb(result);
            });
        },

        // updateUserData: function (cb) {
        //     var queryString = "select * from USER_DATA VALUES"
        //     connection.query(queryString, function (err, result) {
        //         if (err) {
        //             throw err;
        //         }
        //         cb(result);
        //     });
        // }

    };

module.exports = orm;