import React from "react";
import { Avatar } from "@mui/material";
import {useSelector} from "react-redux";

const AddPost = () => {
  let State = useSelector((Stat) => {
    return Stat.Reduce;
  });
  return (
    <div className="flex flex-col bg-white p-2 rounded-md space-y-3 shadow-lg">
      <div className="Top text-xs flex items-center bg-white space-x-2">
        <Avatar
          src={
            `http://localhost:3500/Public/Uploads/${State?.User?.Image}`
          }
        />
        <input
          className="w-[100%] bg-gray-200 outline-none focus:outline-none p-3 rounded-full"
          type="text"
          placeholder={`Whats in Your Mind ?`}
        />
      </div>

      <button
        onClick={() => {
          AddPost();
        }}
        className="p-2 sm:p-3 bg-[#3B82F6] text-white rounded-full sm:text-sm  text-sm"
      >
        Add Post
      </button>

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

        <div className="flex cursor-pointer">
          <img
            className=" sm:h-[30px] h-[25px]"
            src="/Emoji/Photos.png"
            alt=""
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
