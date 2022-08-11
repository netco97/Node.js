"use strict";

const fs = require("fs").promises;

class UserStorage{
    static #getUsers(data,isAll,fields){
        const users = JSON.parse(data);
        if(isAll) return users;
        const newUsers = fields.reduce((newUsers, field)=>{
            if (users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;
        },{});
        return newUsers;
    }

    static getUsers(isAll,...fields){
        return fs.readFile("./src/databases/users.json")
        .then((data)=>{
            return this.#getUsers(data,isAll,fields)
        })
        .catch(console.error);
    }

    static #getUserInfo(data,id){
        const users = (JSON.parse(data));
        const idx = users.id.indexOf(id);
        const userInfo = Object.keys(users).reduce((newUser, info)=> {  
        //Object.keys == usersKeys == Object.keys(users) ==> [id,password,name]
        newUser[info] = users[info][idx]; //newUser라는 오브젝트의 info==키값
        return newUser;
    }, {});
        return userInfo;
    } 
    
    static getUserInfo(id){
        return fs.readFile("./src/databases/users.json")
        .then((data)=>{
            return this.#getUserInfo(data,id)
        })
        .catch(console.error);
    }


    static async save(userInfo){
        const users = await this.getUsers(true);
        if(users.id.includes(userInfo.id)){
            throw "이미 존재하는 아이디입니다. "; 
        }
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.password.push(userInfo.password);
        //데이터추가
        fs.writeFile("./src/databases/users.json", JSON.stringify(users));
        return { success : true }; 
    }
}

module.exports = UserStorage;