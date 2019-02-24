const mysql = require('mysql');

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'justifyester',
    password: 'justifyester123',
    database: 'kenyanginaja',
    port: 3306
});

module.exports = conn;