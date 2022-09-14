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
            <div className="rounded-full bg-gray-300 h-[100px] w-[100px] flex justify-center items-center shadow-md">
              <CircleNotificationsIcon className="text-white" sx={{fontSize:50}}/>
            </div>
            <p className="text-gray-500 text-center ">
              Currently No <strong>Notification <EmojiEmotionsIcon className="text-blue-500"/> </strong>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EachNotification;
