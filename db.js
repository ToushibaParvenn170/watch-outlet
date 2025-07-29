import mysql from 'mysql2/promise';

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'your_mysql_password',
  database: 'watches_outlet'
});

export default db;
