"use strict";

const User = require("../../models/User");
const UserStorage = require("../../models/UserStorage");

const output = {
    home : (req,res)=>{
        res.render("home/index");
    },
    
    login : (req,res)=>{
        res.render("home/login");
    },
};

const process = {
   login : (req, res) => {
    const user = new User(req.body);
    const response = user.login();
    return res.json(response);
   },
}



//key 값만 넣어주었으니 value 는 알아서 key와 같이 생성됨.
module.exports = {
    output,
    process
}