import React from 'react'
import OndemandVideoRoundedIcon from "@mui/icons-material/OndemandVideoRounded";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";

export default function EachVideo({props}) {
  return (
    <div>
        <div>
      <div>
        {props ? (
          <div className="">
          </div>
        ) : (
          <div className="flex flex-col justify-center items-center space-y-5">
            <div className="rounded-full bg-gray-300 h-[100px] w-[100px] flex justify-center items-center font-[100px]">
              <OndemandVideoRoundedIcon className="text-[70px] text-white" />
            </div>
            <p className="text-gray-500 text-center ">
              No Videos Available{" "}
              <EmojiEmotionsIcon className="text-red-500 animate-bounce" />.
            </p>
          </div>
        )}
      </div>
    </div>
    </div>
  )
}
