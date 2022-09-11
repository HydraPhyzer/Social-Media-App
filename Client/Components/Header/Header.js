import React from "react";
import Link from 'next/link'
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import OndemandVideoRoundedIcon from "@mui/icons-material/OndemandVideoRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import Avatar from "@mui/material/Avatar";
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import MarkUnreadChatAltRoundedIcon from '@mui/icons-material/MarkUnreadChatAltRounded';

const Header = () => {
  return (
    <div className="p-1 bg-white flex justify-between items-center space-x-5 shadow-md">
      <div className="Left flex items-center space-x-2">
        <Link href='/'>
            <Avatar src={"/Facebook.png"} objectFit={"contain"} className='Avatar'/>
        </Link>
        <input
          type="text"
          className="bg-[#ecf0f1] rounded-full hidden sm:block px-3 text-gray-500"
        />
        <span className="sm:hidden">
          <SearchRoundedIcon className="Icon block" />
        </span>
      </div>
      <div className="Center flex-1 justify-center flex">
        <div className='space-x-5 bg-[#ecf0f1] w-fit py-1 px-5 rounded-full sm:w-[60%] justify-around flex'>
          <HomeRoundedIcon className="Icon sm:hover:bg-white md:flex-[0.2] rounded-full" />
          <PeopleAltRoundedIcon className="Icon sm:hover:bg-white md:flex-[0.2] rounded-full" />
          <OndemandVideoRoundedIcon className="Icon sm:hover:bg-white md:flex-[0.2] rounded-full" />
        </div>
      </div>
      <div className="Right flex items-center space-x-2">
        <Avatar className='Avatar'/>
        <Avatar className='hidden sm:flex justify-center items-center bg-gray-200'>
            <SettingsRoundedIcon className='text-[#1778F2] hover:animate-spin'/>
        </Avatar>
        <Avatar className='hidden sm:flex justify-center items-center bg-gray-200'>
            <MarkUnreadChatAltRoundedIcon className='text-[#1778F2] hover:animate-pulse'/>
        </Avatar>
        
      </div>
    </div>
  );
};

export default Header;
