import React from "react";
import { Avatar } from "@mui/material";
import DeviceHubIcon from '@mui/icons-material/DeviceHub';
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";

const EachRequest = ({props}) => {
  return (
    <div>
      {props ? (
        <div className="flex space-x-3 items-center bg-white p-3 rounded-sm shadow-md">
          <div className="Img">
            <Avatar
              src={
                "https://images.pexels.com/photos/762080/pexels-photo-762080.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
            />
          </div>
          <div className="Name-Control space-y-1">
            <div className="Name text-sm text-gray-700">
              <p>Zubair Gujjar</p>
            </div>
            <div className="Control text-white space-x-2">
              <button className="bg-[#1778F2] p-1 rounded-sm text-xs">
                Accept
              </button>
              <button className="bg-[#e74c3c] p-1 rounded-sm text-xs text-white">
                Decline
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center space-y-5">
            <div className="rounded-full bg-gray-300 h-[100px] w-[100px] flex justify-center items-center font-[100px]">
                <DeviceHubIcon className="text-[70px] text-white"/>
            </div>
          <p className="text-gray-500 text-center ">Currently No <strong>Requests</strong> <EmojiEmotionsIcon className="text-[#1778F2] animate-bounce"/>.</p>
        </div>
      )}
    </div>
  );
};

export default EachRequest;
