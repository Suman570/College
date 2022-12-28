// const router = require('express').Router();

const userModel = require("../../models/user.model")
const passwordHash = require('password-hash');

function map_user(user,userData){
    if(userData.name)
        user.name = userData.name;
    if(userData.password)
        user.password = userData.password;
    if(userData.username)
        user.username = userData.username;
    if(userData.email)
        user.email = userData.email;
    if(userData.role)
        user.role = userData.role;
    
    return user; 
}

function insert(req,res,next){
    var newUser = new userModel({});
    var newMappedUser = map_user(newUser , req,body);
    newMappedUser.password = passwordHash.generate(req.body.password);
    newMappedUser.save(function(err,done){
        if(err){
            return next(err);
        }else{
            res.json(done)
        }
    })
}


module.exports = {
    insert
}