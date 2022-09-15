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
import {deleteCookie} from 'cookies-next'
import { useRouter } from "next/router";
import {useState} from 'react' 

const Header = ({ props }) => {
  let [Menu,setMenu]=useState(false);

  let DisplayMenu=()=>
  {
    setMenu(!Menu);
  }
  let Router=useRouter()
  let LogOut=()=>
  { 
    deleteCookie("Token")
    Router.push('/facebook')
  }
  return (
    <div className="p-1 bg-white flex justify-between relative items-center sm:space-x-5 shadow-md w-[100vw] ">
      <div className="Left flex items-center space-x-2 sm:w-[25%]">
        <Link href="/">
          <Avatar src={"/Facebook.png"} className="Avatar" />
        </Link>
        <input
          type="text"
          placeholder="Type to Search ..."
          className="bg-[#ecf0f1] rounded-full hidden sm:block sm:px-3 text-gray-500 text-sm w-[100%]"
        />
        <span className="sm:hidden">
          <SearchRoundedIcon className="Icon block" />
        </span>
      </div>
      <div className="Center flex-1 justify-center flex">
        <div className="space-x-5 bg-[#ecf0f1] w-fit shadow-md py-1 sm:px-5 rounded-lg sm:max-w-[80%] md:flex-1 px-2 justify-around flex">
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
        </div>
      </div>
      <div className="Right flex items-center sm:space-x-2 sm:w-[24%] justify-end p-1">
        <div className="sm:flex justify-center items-center hidden">
          <Avatar sx={{ background: "#3498db" }}>
            <Link href="/setting">
              <SettingsRoundedIcon className="text-white hover:animate-spin" />
            </Link>
          </Avatar>
        </div>

        <div className="sm:flex justify-center items-center hidden">
          <Avatar sx={{ background: "#3498db" }}>
            <MarkUnreadChatAltRoundedIcon className="text-white hover:animate-pulse" />
          </Avatar>
        </div>

        <div onClick={()=>{LogOut()}} className="sm:block hidden" >
          <Avatar/>
        </div>

        <div onClick={()=>{DisplayMenu()}} className="block sm:hidden">
          <Avatar/>
          {Menu?
          <div className="shadow-md absolute right-0 bg-black text-white top-[100%] px-5 py-2 space-y-2 text-start z-[300] rounded-l-md">
            <p>Profile</p>
            <Link href='/setting'>
              <p>Seeting</p>
            </Link>
            <p onClick={()=>{LogOut()}}>LogOut</p>
          </div>
          :""}
        </div>
      </div>
    </div>
  );
};

export default Header;
