"use strict";

class UserStorage{
    static #users = {
        id : ["sangmin", "dog", "hello"],
        password : ["1234","12345","123456"],
        name : ["이상민","강아지","안녕"],
    }; //# >> 은닉화 private처리

    static getUsers(...fields){
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field)=>{
            if (users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;
        },{});
        return newUsers;
    }

    static getUserInfo(id){
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const userInfo = Object.keys(users).reduce((newUser, info)=> { 
            //Object.keys == usersKeys == Object.keys(users) ==> [id,password,name]
            newUser[info] = users[info][idx];
            return newUser;
        }, {});
        return userInfo;
    }
}

module.exports = UserStorage;