let Mongo=require("mongoose")
require("./Connect")

let Post=Mongo.Schema({
    TimeStamp:String,
    Comments:Array,
    Likes:Number,
    Shares:Number,
    Caption:String,
    Image:String,
    Video:String,

})
let PostSchema=Mongo.Schema({
    MyName:String,
    MyProfileID:String,
    MyPosts:Post
})

module.exports=PostSchema