let Mongo=require("mongoose")
require("./Connect")

let Post=Mongo.Schema({
    Comments:Array,
    Likes:Number,
    Shares:Number,
    Caption:String,
    Image:String,
    Video:String,
    TimeStamp:String

},{ timestamps: true })
let PostSchema=Mongo.Schema({
    MyName:String,
    MyProfileID:String,
    MyPosts:[Post]
})

module.exports=PostSchema