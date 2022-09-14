import React from "react";
import Link from "next/link";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import OndemandVideoRoundedIcon from "@mui/icons-material/OndemandVideoRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import Avatar from "@mui/material/Avatar";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import MarkUnreadChatAltRoundedIcon from "@mui/icons-material/MarkUnreadChatAltRounded";
import DeviceHubIcon from "@mui/icons-material/DeviceHub";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import { Icon } from "@mui/material";

const Header = ({ props }) => {
  return (
    <div className="p-1 bg-white flex justify-between relative items-center sm:space-x-5 shadow-md w-[100vw]">
      <div className="Left flex items-center space-x-2">
        <Link href="/">
          <Avatar src={"/Facebook.png"} className="Avatar" />
        </Link>
        <input
          type="text"
          placeholder="Type to Search ..."
          className="bg-[#ecf0f1] rounded-full hidden sm:block sm:px-3 text-gray-500 text-sm"
        />
        <span className="sm:hidden">
          <SearchRoundedIcon className="Icon block" />
        </span>
      </div>
      <div className="Center flex-1 justify-center flex">
        <div className="space-x-5 bg-[#ecf0f1] w-fit py-1 sm:px-5 rounded-lg sm:max-w-[80%] md:flex-1 px-2 justify-around flex">
          <HomeRoundedIcon
            onClick={() => {
              props("Main");
            }}
            className="Icon sm:hover:bg-white md:flex-1 rounded-md"
          />
          <PeopleAltRoundedIcon
            onClick={() => {
              props("Friend");
            }}
            className="Icon sm:hover:bg-white md:flex-1 rounded-md"
          />
          <OndemandVideoRoundedIcon
            onClick={() => {
              props("Video");
            }}
            className="Icon sm:hover:bg-white md:flex-1 rounded-md"
          />

          {/* <DeviceHubIcon
            onClick={() => {
              props("Request");
            }}
            className="Icon sm:hover:bg-white md:flex-[0.2] rounded-lg sm:hidden"
          /> */}

          <div className="flex justify-center items-center sm:hidden">
            <DeviceHubIcon
              onClick={() => {
                props("Request");
              }}
              className="Icon"
            />
          </div>

          <div className="flex justify-center items-center sm:hidden">
            <CircleNotificationsIcon
              onClick={() => {
                props("Notification");
              }}
              className="Icon"
            />
          </div>

          {/* <CircleNotificationsIcon
            onClick={() => {
              props("Notification");
            }}
            className="Icon sm:hover:bg-white md:flex-[0.2] rounded-lg sm:hidden"
          /> */}
        </div>
      </div>
      <div className="Right flex items-center sm:space-x-2 sm:min-w-[24%] justify-end p-1">
        <div className="sm:flex justify-center items-center hidden">
          <Avatar sx={{ background: "#3498db" }}>
            <SettingsRoundedIcon className="text-white hover:animate-spin" />
          </Avatar>
        </div>

        <div className="sm:flex justify-center items-center hidden">
          <Avatar sx={{ background: "#3498db" }}>
            <MarkUnreadChatAltRoundedIcon className="text-white hover:animate-pulse" />
          </Avatar>
        </div>

        <Avatar className="Avatar" />
      </div>
    </div>
  );
};

export default Header;
