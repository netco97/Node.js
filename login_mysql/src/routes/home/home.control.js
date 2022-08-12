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

    register : (req,res)=>{
        res.render("home/register");
    }
};

const process = {
   login : async (req, res) => {
    const user = new User(req.body); //클라이언트 유저의 특성을 가지기 때문
    const response = await user.login();
    return res.json(response);
   },

   register : async (req, res) => {
    const user = new User(req.body); //클라이언트 유저의 특성을 가지기 때문
    const response = await user.register();
    return res.json(response);
   },
}



//key 값만 넣어주었으니 value 는 알아서 key와 같이 생성됨.
module.exports = {
    output,
    process
}