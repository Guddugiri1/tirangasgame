const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: 'localhost',
    user: 'tirangasgame',
    password: 'tirangasgame',
    database: 'tirangasgame',
});

export default connection;