let Mongo=require('mongoose')
require('./Connect')

let UserSchema=Mongo.Schema({
    Name:String,
    Email:String,
    Pass:String,
})

module.exports=UserSchema;