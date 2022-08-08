"use strict";

const output_home = (req,res)=>{
    res.render("home/index");
}

const login = (req,res)=>{
    res.render("home/login");
}

//key 값만 넣어주었으니 value 는 알아서 key와 같이 생성됨.
module.exports = {
    output_home,
    login,
}