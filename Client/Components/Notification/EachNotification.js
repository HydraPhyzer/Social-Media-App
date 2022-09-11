import React from "react";
import { Alert } from "@mui/material";
import {AlertTitle} from "@mui/material";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";

const EachNotification = ({ props }) => {
  return (
    <div>
      <div>
        {props ? (
          <div className="">
            <Alert severity="info" className="text-xs shadow-md">
              <AlertTitle className="text-xs">From Facebook</AlertTitle>
              <strong>Zubair Gujjar!</strong> Posted a New Picture
            </Alert>
          </div>
        ) : (
          <div className="flex flex-col justify-center items-center space-y-5">
            <div className="rounded-full bg-gray-300 h-[100px] w-[100px] flex justify-center items-center font-[100px]">
              <CircleNotificationsIcon className="text-[70px] text-white" />
            </div>
            <p className="text-gray-500 text-center ">
              No Notofications for Now{" "}
              <EmojiEmotionsIcon className="text-black animate-bounce" />.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EachNotification;
