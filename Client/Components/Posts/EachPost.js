import React, { useState } from "react";
import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import FavoriteIcon from "@mui/icons-material/Favorite";
import InsertCommentIcon from "@mui/icons-material/InsertComment";
import ReplyIcon from "@mui/icons-material/Reply";
import Image from "next/image";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import DeleteIcon from "@mui/icons-material/Delete";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

const AddPost = ({ Element, Name }) => {
  let [Show, setShow] = useState(false);
  let State = useSelector((Stat) => {
    return Stat.Reduce;
  });

  return (
    <div className="flex flex-col bg-white border-2 border-gray-500 p-2 rounded-md space-y-3 shadow-lg ">
      <div className="Top text-xs flex items-center bg-white space-x-2 relative">
        <Avatar
          src={`http://localhost:3500/Public/Uploads/${State?.User?.Image}`}
        />
        <div className="flex justify-between w-[100%]">
          <section>
            <p className="text-sm font-bold text-gray-500">{Name}</p>
            <small>{Element?.createdAt.toString()}</small>
          </section>

            <MoreHorizIcon onClick={()=>{setShow(!Show)}} className="text-blue-500" />
          
        </div>

        {Show ? (
          <div className="absolute right-0 top-5 bg-gray-200 text-black rounded-sm p-2 z-10">
            <ul className="flex space-x-2">
              <li className="text-red-500 font-sm">
                <DeleteIcon />
              </li>
            </ul>
          </div>
        ) : (
          ""
        )}
      </div>

      {Element?.Caption ? (
        <div className="text-sm px-2">
          <p>{Element?.Caption}</p>
        </div>
      ) : (
        ""
      )}

      {Element?.Image ? (
        <div className="relative h-[300px] bg-black w-[100%]">
          <div>
            <Image
              src={`http://localhost:3500/Public/PostsImages/${Element?.Image}`}
              layout="fill"
              objectFit="contain"
              alt="Post Image"
            />
          </div>
        </div>
      ) : (
        ""
      )}

      <hr className="h-[3px] bg-gray-300 border-none rounded-full" />

      <div className="Bottom flex justify-between p-1 md:text-xs sm:text-sm  text-xs text-gray-500">
        <div className="A flex items-center cursor-pointer">
          <FavoriteIcon />
          <p className="p-1">{Element?.Likes} Likes</p>
        </div>

        <div className="flex cursor-pointer">
          <InsertCommentIcon />
          <p className="p-1">{Element?.Comments.length - 1} Comments</p>
          <input hidden type="file" id="file" />
        </div>

        <div className="C flex items-center cursor-pointer">
          <ReplyIcon />
          <p className="p-1">{Element?.Shares} Shares</p>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
