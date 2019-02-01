

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
        var queryString = "INSERT INTO USER_INFO (first_name, last_name, work_zip, salary) VALUES (?)";
        connection.query(queryString, [burger], function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    getRentData: function (id, cb) {
        var queryString = "SELECT * FROM CURRENT_RENTS WHERE id = ?";
//need to grab data from algo for suggested city
        connection.query(queryString, [id], function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }
};

export default orm