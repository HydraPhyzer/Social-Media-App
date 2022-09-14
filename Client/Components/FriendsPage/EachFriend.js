import React from "react";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import { Avatar } from "@mui/material";

export default function EachFriend({ props }) {
  return (
    <div>
      <div>
        <div>
          {props ? (
            <div className="shadow-sm hover:shadow-lg p-2 flex justify-center items-center flex-col bg-white rounded-md space-y-2">
              <Avatar className="h-[50px] w-[50px] sm:h-[100px] sm:w-[100px]" />

              <p className="text-sm text-gray-500">Muhammad Zubair</p>

              <div className="Control text-white space-x-2 flex flex-col justify-center items-center">
                <button className="bg-[#1778F2] p-1 rounded-sm text-xs">
                  Remove
                </button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col justify-center items-center space-y-5">
              <div className="rounded-full bg-gray-300 h-[100px] w-[100px] flex justify-center items-center">
                <PeopleAltRoundedIcon className="text-white" fontSize="large"/>
            </div>
              <p className="text-gray-500 text-center ">
                No Videos Available{" "}
                <EmojiEmotionsIcon className="text-yellow-500 animate-bounce" />
                .
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
