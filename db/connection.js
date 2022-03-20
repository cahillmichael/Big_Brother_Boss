const mysql = require('mysql2');

const db = mysql.createConnection(
    {
        host:"127.0.0.1",
        user: 'root',
        password: 'mygiZmo719&ql',
        database: 'organization'
    },
    console.log('Connected')
);

module.exports = db;