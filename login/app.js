"use strict";

// 모듈
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// 라우팅 
const home = require("./src/routes/home");

// 앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use(express.static(`${__dirname}/src/public`));
//__dirname == 현재 app.js위치를 반환 -> 위치의 src 폴더안에있는 public 폴더를 정적경로로 추가해주겠다는뜻

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
//url을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결

app.use("/", home); //use -> 미들웨어를 등록하는 메서드

module.exports = app;
