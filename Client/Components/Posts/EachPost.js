import React, { useState } from "react";
import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import FavoriteIcon from "@mui/icons-material/Favorite";
import InsertCommentIcon from "@mui/icons-material/InsertComment";
import ReplyIcon from "@mui/icons-material/Reply";

const AddPost = () => {

  let State = useSelector((Stat) => {
    return Stat.Reduce;
  });

  return (
    <div className="flex flex-col bg-white border-2 border-gray-500 p-2 rounded-md space-y-3 shadow-lg">
      <div className="Top text-xs flex items-center bg-white space-x-2">
        <Avatar
          src={`http://localhost:3500/Public/Uploads/${State?.User?.Image}`}
        />
        <div>
          <p className="text-sm font-bold text-gray-500">{State?.User?.Name}</p>
          <small>23-Jan-2022 11:59 AM</small>
        </div>
      </div>

      <div className="text-sm">
        <p>Hello World</p>
      </div>

      <hr className="h-[3px] bg-gray-300 border-none rounded-full" />

      <div className="Bottom flex justify-between p-1 md:text-xs sm:text-sm  text-xs text-gray-500">
        <div className="A flex items-center cursor-pointer">
          <FavoriteIcon />
          <p className="p-1">Likes</p>
        </div>

        <div className="flex cursor-pointer">
          <InsertCommentIcon />
          <p className="p-1">Comments</p>
          <input hidden type="file" id="file" />
        </div>

        <div className="C flex items-center cursor-pointer">
          <ReplyIcon />
          <p className="p-1">Shares</p>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
