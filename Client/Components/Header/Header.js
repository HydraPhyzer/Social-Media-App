import React, { useEffect } from "react";
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
import Person2Icon from "@mui/icons-material/Person2";
import SettingsIcon from "@mui/icons-material/Settings";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AddCircleIcon from "@mui/icons-material/AddCircle";

import { deleteCookie } from "cookies-next";
import { useRouter } from "next/router";
import { useState } from "react";
import { useSelector } from "react-redux";

const Header = ({ props }) => {
  let [Menu, setMenu] = useState(false);
  let [Type, setType] = useState("");
  let [AvailableUser, setAvailableUser] = useState();
  let Router = useRouter();

  let State = useSelector((Stat) => {
    return Stat.Reduce;
  });

  let DisplayMenu = () => {
    setMenu(!Menu);
  };

  let SearchUser = (Val) => {
    console.log(Val);
    fetch("http://localhost:3500/Search-User", {
      method: "POST",
      body: JSON.stringify({ Query: Val }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(async (Res) => {
      let Result = await Res.json();
      setAvailableUser(Result);
    });
  };
  let LogOut = () => {
    deleteCookie("Token");
    Router.push("/facebook");
  };
  return (
    <div className="p-1 bg-white flex justify-between items-center sm:space-x-5 shadow-md w-[100vw] relative">
      <div className="Left flex flex-col justify center sm:w-[25%]">
        <section className="flex space-x-2">
          <Link href="/">
            <Avatar src={"/Facebook.png"} className="Avatar" />
          </Link>
          <input
            type="text"
            placeholder="Type to Search ..."
            className="bg-[#ecf0f1] rounded-full hidden sm:block sm:px-3 text-gray-500 text-sm w-[100%]"
            onChange={(E) => {
              SearchUser(E.target.value);
              setType(E.target.value);
            }}
            onKeyDown={(E) => {
              if (E.key == "Enter") {
                SearchUser(Type);
              }
            }}
          />
          <span className="sm:hidden">
            <SearchRoundedIcon className="Icon block" />
          </span>
        </section>

        <section className="absolute justify-between items-center text-gray-500 sm:text-xs text-sm space-x-5 left-0 top-[100%] max-h-[25vh] bg-white hidden sm:flex sm:w-[25%]  md:pr-5">
          <div className="flex flex-col space-y-2">
            {Type
              ? AvailableUser?.map((Elem) => {
                  return (
                    <div className="flex items-center justify-between space-x-5 p-1">
                      <Link href="/">
                        <Avatar
                          src={`http://localhost:3500/Public/Uploads/${Elem?.Image}`}
                        />
                      </Link>
                      <p>{Elem?.Name}</p>
                      <AddCircleIcon className=" text-green-500" />
                    </div>
                  );
                })
              : ""}
          </div>
        </section>
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
      <div className="Right flex items-center sm:space-x-2 sm:w-[24%] justify-end p-1 ">
        <div className="sm:flex justify-center items-center hidden">
          <Avatar sx={{ background: "#3498db" }}>
            <Link href="/setting">
              <SettingsRoundedIcon className="text-white hover:animate-spin" />
            </Link>
          </Avatar>
        </div>

        <div className="sm:flex justify-center items-center hidden">
          <Link href="/chats">
            <Avatar sx={{ background: "#3498db" }}>
              <MarkUnreadChatAltRoundedIcon className="text-white hover:animate-pulse" />
            </Avatar>
          </Link>
        </div>

        <div
          onClick={() => {
            LogOut();
          }}
          className="sm:block hidden"
        >
          <Avatar
            src={`http://localhost:3500/Public/Uploads/${
              State?.User?.Image || State?.User[0]?.Image
            }`}
          />
        </div>

        <div
          onClick={() => {
            DisplayMenu();
          }}
          className="block sm:hidden"
        >
          <Avatar
            src={`http://localhost:3500/Public/Uploads/${
              State?.User?.Image || State?.User[0]?.Image
            }`}
          />
          {Menu ? (
            <div className="shadow-md absolute right-0 bg-black text-white top-[100%] px-5 py-2 space-y-2 text-start z-[300] rounded-l-md flex flex-col items-start Anime">
              <div className="flex space-x-5 items-center">
                <Person2Icon className="bg-white rounded-full p-1 text-black" />
                <p>Profile</p>
              </div>
              <Link href="/setting">
                <div className="flex space-x-5 items-center">
                  <SettingsIcon className="bg-white rounded-full p-1 text-black" />
                  <p>Setting</p>
                </div>
              </Link>
              <div
                onClick={() => {
                  LogOut();
                }}
                className="flex space-x-5 items-center"
              >
                <ExitToAppIcon className="bg-white rounded-full p-1 text-black" />
                <p>LogOut</p>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
