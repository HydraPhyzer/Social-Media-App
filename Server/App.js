let express = require("express");
let App = express();
let cors = require("cors");
let UserSchema = require("./DB/UserSchema");
let PORT = process.env.PORT || 3500;
let Path = require("path");
let DIR = Path.join(__dirname, "/Public/Uploads");
let DIR2 = Path.join(__dirname, "/Public/PostsImages");
var jwt = require("jsonwebtoken");
let FS = require("fs");
let PostSchema = require("./DB/PostSchema");
const multer = require("multer");
const { default: mongoose, Mongoose } = require("mongoose");
const { v4: uuidv4 } = require("uuid");
App.use(express.json());
App.use(cors());
App.use("/Public", express.static(process.cwd() + "/Public"));
// ==================================================================

let ImageCode;
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

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    if (req?.body?.POSTIMAGE) {
      cb(null, `${DIR2}`);
    } else {
      console.log(req.body);
      cb(null, `${DIR}`);
    }
  },
  filename: async function (req, file, cb) {
    if (req?.body?.POSTIMAGE) {
      ImageCode = uuidv4();
      if (
        FS.existsSync(
          `${__dirname}/Public/PostsImages/${req.body?.PREVIEWCODE}${req.body?.PREVIEWEXT}`
        )
      ) {
        FS.unlinkSync(
          `${__dirname}/Public/PostsImages/${req.body?.PREVIEWCODE}${req.body?.PREVIEWEXT}`
        );
      }
      const uniqueSuffix = ImageCode + Path.extname(file.originalname);
      cb(null, uniqueSuffix);
    } else {
      let Model = new mongoose.model("users", UserSchema);
      let Result = await Model.find({ _id: req.body.ID });
      if (Result[0].Image) {
        if (FS.existsSync(`${__dirname}/Public/Uploads/${Result[0].Image}`)) {
          FS.unlinkSync(`${__dirname}/Public/Uploads/${Result[0].Image}`);
        }
        ImageCode = uuidv4();
        const uniqueSuffix = ImageCode + Path.extname(file.originalname);
        cb(null, uniqueSuffix);
      } else {
        ImageCode = uuidv4();
        const uniqueSuffix = ImageCode + Path.extname(file.originalname);
        cb(null, uniqueSuffix);
      }
    }
  },
});

const upload = multer({ storage: storage }).single("User-Image");

App.post("/signup", async (Req, Res) => {
  let Model = new mongoose.model("users", UserSchema);
  let Data = new Model(Req.body);

  let PreCheck = await Model.find({ Email: Req.body.Email });

  if (PreCheck.length >= 1) {
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
        Image: `${ImageCode}${Path.extname(Req.body.Name)}`,
      },
    }
  );
  Res.send({ ImageCode, Extension: Path.extname(Req.body.Name) });
});

App.post("/setting", Verify, upload, async (Req, Res) => {
  let Model = new mongoose.model("users", UserSchema);
  let Result = await Model.updateOne(
    {
      _id: Req.body.Id,
    },
    {
      $set: Req.body,
    }
  );
  Res.send(Req.body);
});

App.post("/Get-User", async (Req, Res) => {
  let Model = new mongoose.model("users", UserSchema);
  let Result = await Model.find(Req.body);

  Res.send(Result);
});

App.post("/Add-Post", async (Req, Res) => {
  let Model = new mongoose.model("posts", PostSchema);
  let {
    MyName,
    MyProfileID,
    Caption,
    Image,
    Video,
    TimeStamp,
    Comments,
    Likes,
    Shares,
  } = Req.body;

  let Results = await Model.find({ MyProfileID });

  if (Results.length == 0) {
    let Data = new Model({
      MyName,
      MyProfileID,
      MyPosts: [
        {
          Caption,
          Image: Image ? `${ImageCode}${Path.extname(Image)}` : "",
          Video,
          TimeStamp,
          Comments,
          Likes,
          Shares,
        },
      ],
    });
    await Data.save();
  } else {
    await Model.updateOne(
      { MyProfileID },
      {
        $push: {
          MyPosts: {
            Caption,
            Image: Image ? `${ImageCode}${Path.extname(Image)}` : "",
            Video,
            TimeStamp,
            Comments,
            Likes,
            Shares,
          },
        },
      }
    );
  }

  let Result = await Model.find({ MyProfileID });
  Res.send(Result[0]);
});

App.post("/Get-Post", async (Req, Res) => {
  let Model = new mongoose.model("posts", PostSchema);

  let Result = await Model.find({ MyProfileID: Req.body?.ID });

  if (Result.length>0) {
    Res.send(Result[0]);
  } else {
    Res.send({ Error: "Yet No Posts" });
  }
});

App.post("/Post-Image", upload, async (Req, Res) => {
  Res.send({ ImageCode, Extension: Path.extname(Req.file.originalname) });
});

App.get("/facebook", Verify, async (Req, Res) => {
  Res.send({ Pass: true });
});

App.listen(PORT);
