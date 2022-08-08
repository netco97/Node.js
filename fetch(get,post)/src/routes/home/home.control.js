"use strict";

const output = {
    home : (req,res)=>{
        res.render("home/index");
    },
    
    login : (req,res)=>{
        res.render("home/login");
    },
};

const users = {
    id : ["sangmin", "이상민", "hello"],
    password : ["1234","12345","123456"],
};

const process = {
   login : (req, res) => {
    const id = req.body.id,
    password = req.body.password;
    
    if(users.id.includes(id)) {
        const idx = users.id.indexOf(id);
        if (users.password[idx]=== password){
            return res.json({
                success : true,
            });
        }
    }
    return res.json({
        success: false,
        msg: "로그인에 실패하셨습니다.",
    })
   },
}



//key 값만 넣어주었으니 value 는 알아서 key와 같이 생성됨.
module.exports = {
    output,
    process
}