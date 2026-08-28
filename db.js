let mysql = require('mysql');

let con = mysql.createConnection({
    host: "localhost",
    user: "alessandrasilv",
    password: "1234"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!")
});