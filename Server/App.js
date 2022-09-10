let express=require('express')
let App=express()
let PORT=process.env.PORT || 3500

App.get('/' , (Req,Res)=>{
    Res.send("Hello World")
})

App.listen(PORT)