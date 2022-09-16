let express = require("express");
let App = express();
let cors = require("cors");
const multer = require("multer");
App.use(express.json());
App.use(cors());
let UserSchema = require("./DB/UserSchema");
const { default: mongoose } = require("mongoose");
let PORT = process.env.PORT || 3500;
var jwt = require("jsonwebtoken");
let Path = require("path");
let Router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, `${__dirname}/Public/Uploads`);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = file.originalname + Path.extname(file.originalname);
    cb(null, uniqueSuffix);
  },
});

const upload = multer({ storage: storage }).single("User-Image");

App.post("/signup", async (Req, Res) => {
  // let Body={...Request.Body , Image:}
  let Model = new mongoose.model("users", UserSchema);
  let Data = new Model(Req.body);

  let PreCheck = await Model.find({ Email: Req.body.Email });

  if (PreCheck.length > 1) {
    Res.send({ Error: "Unable to Register" });
  } else {
    let Result = await Data.save();
    let Token = jwt.sign({ Result }, "Facebook", { expiresIn: "1h" });
    Res.send({ Result, Token });
  }
});

App.post("/login", async (Req, Res) => {
  let Model = new mongoose.model("users", UserSchema);
  let Result = await Model.find(Req.body);

  if (Result.length > 0) {
    let Token = jwt.sign({ Result }, "Facebook", { expiresIn: "1h" });
    Res.send({ Result, Token });
  } else {
    Res.send({ Error: "No Account Found" });
  }
});

App.put("/User-Image", upload, async (Req, Res) => {
  let Model = new mongoose.model("users", UserSchema);
  let Result = await Model.updateOne(
    {
      _id: Req.body.ID,
    },
    {
      $set: {
        Image: Req.body.Image,
      },
    }
  );
  console.log(Result);

  Res.send(Req.body);
});

App.post("/setting", upload, async (Req, Res) => {
  let Model = new mongoose.model("users", UserSchema);
  let Result = await Model.updateOne(
    {
      _id: Req.body.Id,
    },
    {
      $set: Req.body,
    }
  );
  console.log(Result);

  Res.send(Req.body);
});

let Verify = (Req, Res, next) => {
  let Token = Req.headers["authorization"];
  if (Token != undefined) {
    jwt.verify(Token, "Facebook", (Err, Done) => {
      if (Err) {
        Res.send({ Error: "User Not Authorized" });
      } else {
        next();
      }
    });
  }
};

App.get("/facebook", Verify, async (Req, Res) => {
  Res.send({ Pass: true });
});

App.listen(PORT);
