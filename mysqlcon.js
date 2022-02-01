const mysql = require('mysql2');

class Database {

  getConnection() {
    const connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'Barcecampeon14',
      database: 'plotlost'
    });
    return connection;
  }

}
module.exports = Database;


