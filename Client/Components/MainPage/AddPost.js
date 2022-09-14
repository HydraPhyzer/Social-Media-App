import React from "react";
import { Avatar } from "@mui/material";

const AddPost = () => {
  return (
    <div className="flex flex-col bg-white p-2 rounded-md space-y-3">
      <div className="Top text-xs flex items-center bg-white space-x-2">
        <Avatar
          src={
            "https://www.esafety.gov.au/sites/default/files/2019-08/Remove%20images%20and%20video.jpg"
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
            className="hover:animate-pulse sm:h-[30px] h-[25px]"
            src="/Emoji/Facebook.png"
            alt=""
          />
          <p className="p-1">Video</p>
        </div>

        <div className="flex">
          <img
            className="hover:animate-spin sm:h-[30px] h-[25px]"
            src="/Emoji/Photos.png"
            alt=""
          />
          <p className="p-1">Photos</p>
          <input hidden type="file" id="file" />
        </div>

        <div className="C flex items-center cursor-pointer">
          <img
            className="hover:animate-bounce sm:h-[30px] h-[25px]"
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
