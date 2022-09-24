import React, { useState, useRef } from "react";
import { Avatar } from "@mui/material";
import { useSelector,useDispatch } from "react-redux";
import {SetPosts} from '../Redux/Actions'
let FormData = require("form-data");
import Image from "next/image";

const AddPost = () => {
  let [Text, setText] = useState("");
  let [PostImage, setPostImage] = useState();
  let [Preview, setPreview] = useState();
  const PostImageSelector = useRef(null);

  let Dispatch=useDispatch();
  let State = useSelector((Stat) => {
    return Stat.Reduce;
  });

  const ClickHandle = () => {
    PostImageSelector.current.click();
  };
  const FileChange = async (event) => {
    const fileObj = event.target.files && event.target.files[0];
    if (!fileObj) {
      return;
    } else {
      setPostImage(fileObj);
      const form = new FormData();
      form.append("POSTIMAGE", fileObj.name);
      form.append("PREVIEWCODE", Preview?.ImageCode);
      form.append("PREVIEWEXT", Preview?.Extension);
      form.append("User-Image", fileObj);

      await fetch(`http://localhost:3500/Post-Image`, {
        method: "POST",
        body: form,
      }).then(async (Res) => {
        let Result = await Res.json();
        setPreview(Result);
      });
    }
    event.target.value = null;
  };

  let AddPost = () => {
    setText("");
    setPreview();

    let CompleteObject = {
      MyName: State?.User?.Name,
      MyProfileID: State?.User?._id,

      Caption: Text,
      Image: PostImage ? PostImage?.name : "",
      Video: "",
      TimeStamp: Date.now(),

      Comments: 0,
      Likes: 0,
      Shares: 0,
    };

    fetch("http://localhost:3500/Add-Post", {
      method: "POST",
      body: JSON.stringify({ ...CompleteObject }),
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then(async(Res)=>
    {
      let Result = await Res.json();
      Dispatch(SetPosts(Result))
    });
  };

  return (
    <div className="flex flex-col bg-white p-2 rounded-md space-y-3 shadow-lg">
      <div className="Top text-xs flex items-center bg-white space-x-2">
        <Avatar
          src={`http://localhost:3500/Public/Uploads/${State?.User?.Image}`}
        />
        <input
          className="w-[100%] bg-gray-200 outline-none focus:outline-none p-3 rounded-full"
          type="text"
          value={Text}
          onChange={(E) => {
            setText(E.target.value);
          }}
          placeholder={`Whats in Your Mind ?`}
        />
      </div>

      {Preview ? (
        <div className="relative h-[100%] w-[100%] rounded-md flex justify-center">
          <Image
            src={`http://localhost:3500/Public/PostsImages/${Preview?.ImageCode}${Preview?.Extension}`}
            height={100}
            width={100}
            objectFit="contain"
          />
        </div>
      ) : (
        ""
      )}

      {Text || PostImage ? (
        <button
          onClick={() => {
            AddPost();
          }}
          className="p-2 bg-[#3B82F6] text-white rounded-full text-sm"
        >
          Add Post
        </button>
      ) : (
        ""
      )}

      <hr className="h-[3px] bg-gray-300 border-none rounded-full" />

      <div className="Bottom flex justify-between p-1 md:text-xs sm:text-sm  text-sm text-gray-500">
        <div className="A flex items-center cursor-pointer">
          <img
            className=" sm:h-[30px] h-[25px]"
            src="/Emoji/Facebook.png"
            alt=""
          />
          <p className="p-1">Video</p>
        </div>

        <div
          className="flex cursor-pointer"
          onClick={() => {
            ClickHandle();
          }}
        >
          <img
            className=" sm:h-[30px] h-[25px]"
            src="/Emoji/Photos.png"
            alt=""
          />
          <input
            type="file"
            hidden
            ref={PostImageSelector}
            onChange={FileChange}
          />
          <p className="p-1">Photos</p>
          <input hidden type="file" id="file" />
        </div>

        <div className="C flex items-center cursor-pointer">
          <img
            className=" sm:h-[30px] h-[25px]"
            src="/Emoji/Smile.png"
            alt=""
          />
          <p className="p-1">Activity</p>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
