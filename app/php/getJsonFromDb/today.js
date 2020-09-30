

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "arduino",
  database: "pernament_data"
});


con.connect(function(err) {
  if(err) throw err;
  console.log("Connected!");

  let todayDateNotFormated = new Date();
  let todayDateFormated = todayDateNotFormated.toISOString().split('T')[0];

  con.query("SELECT value, date, time FROM temp WHERE date = ?",[todayDateFormated], function (err, result, fields) {
    if (err) throw err;
    console.log(result[0]);
  });
});

