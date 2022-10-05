const mysql = require('mysql');

// create connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'blogsapp'
});

// connect to DB
// db.connect((err) => {
//   if (err) {
//     throw err
//   }
//   console.log('Connected to DB');
// });

module.exports = db;