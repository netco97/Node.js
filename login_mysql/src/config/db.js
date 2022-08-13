const mysql = require("mysql");

const db = mysql.createConnection({
    host : 'localhost', // 데이터베이스 서버가 있는 주소
    user : 'root',
    password : '본인 패스워드',
    database : 'login_lecture' // 사용할 데이터베이스 이름
});

db.connect();

module.exports =db;

