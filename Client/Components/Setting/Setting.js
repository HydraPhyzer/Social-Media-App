import React from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Head from "next/head";
import Avatar from "@mui/material/Avatar";
import BrushIcon from "@mui/icons-material/Brush";
import EditIcon from "@mui/icons-material/Edit";
import { GetUser } from "../Redux/Actions";
import { useDispatch } from "react-redux";

const Setting = () => {
  let [User, setUser] = useState(null);

  let [Name, setName] = useState("");
  let [Email, setEmail] = useState("");
  let [Pass, setPass] = useState("");
  let [Check, setCheck] = useState(false);

  let Router = useRouter();

  let Dispatch=useDispatch();
  let State = useSelector((Stat) => {
    console.log(Stat.Reduce)
    return Stat.Reduce;
  });

  useEffect(() => {
    Dispatch(GetUser())
    setUser(State);
  }, []);

  return (
    <>
      <Head>
        <title>Setting</title>
      </Head>
      {console.log(State,User)}
      <div className="flex justify-center items-center flex-col space-y-5 h-[100vh]">
        <div className="h-[100px] w-[100px] sm:h-[150px] sm:w-[150px] md:h-[200px] md:w-[200px] relative">
          <Avatar className="w-[100%] h-[100%]" src={'https://images.pexels.com/photos/13586038/pexels-photo-13586038.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'} />
          <BrushIcon className="absolute sm:bottom-[-10%] bottom-[-20%] left-1/3 mb-2 bg-blue-500 rounded-full text-white p-2 h-[30px] w-[30px]" />
        </div>

        <div className="flex flex-col space-y-3">

        <div className="flex flex-col space-y-2">
          <label htmlFor="Name">Name</label>
          <section className="space-x-3 flex items-center relative">
            <input type="string" id="Name" value={State?.User?.Name}  className="text-gray-500" />
            <EditIcon className="bg-white text-blue-500 absolute right-0 h-full w-[10%]"/>
          </section>
        </div>

        <div className="flex flex-col space-y-2">
          <label htmlFor="Email">Email</label>
          <input type="string" id="Email" value={State?.User?.Email}  className="text-gray-500" />
        </div>

        <div className="flex flex-col space-y-2">
          <label htmlFor="Id">User ID</label>
          <input type="string" id="Id" value={State?.User?._id} className="text-gray-500" />

          <button className="bg-blue-500 w-full my-5 p-2 text-white rounded-sm">
            Save
          </button>
        </div>
      </div>
        </div>
    </>
  );
};

export default Setting;
