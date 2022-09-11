let express = require("express");
let App = express();
let cors = require("cors");
App.use(express.json());
App.use(cors());
let UserSchema = require("./DB/UserSchema");
const { default: mongoose } = require("mongoose");
let PORT = process.env.PORT || 3500;
var jwt = require("jsonwebtoken");

App.get("/", (Req, Res) => {
  Res.send("Hello World");
});

App.post("/signup", async (Req, Res) => {
  let Model = new mongoose.model("users", UserSchema);
  let Data = new Model(Req.body);
  let Result = await Data.save();

  let Token = jwt.sign({Result}, "Facebook" , { expiresIn: '1h' });

  Res.send({ Result, Token });
});

App.post("/login", async (Req, Res) => {
  let Model = new mongoose.model("users", UserSchema);
  let Result = await Model.find(Req.body);

  if (Result.length) {
    let Token = jwt.sign({Result}, "Facebook" , { expiresIn: '1h' });
    Res.send({ Result, Token });
  }
  else
  {
    Res.send({Error:"No Account Found"})
  }
});

App.listen(PORT);
