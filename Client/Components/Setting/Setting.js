import React from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Head from "next/head";
import BrushIcon from "@mui/icons-material/Brush";
import EditIcon from "@mui/icons-material/Edit";
import { useDispatch } from "react-redux";
import Image from "next/image";

const Setting = () => {
  let [User, setUser] = useState("");

  let [Name, setName] = useState();
  let [Email, setEmail] = useState();
  let [Id, setId] = useState();
  let [Mutable, setMutable]=useState(false)

  let Router = useRouter();

  let State = useSelector((Stat) => {
    return Stat.Reduce;
  });

  useEffect(() => {
    setUser(State?.User[0]);
    setName(State?.User[0]?.Name);
    setEmail(State?.User[0]?.Email);
    setId(State?.User[0]?._id);
  }, []);

  return (
    <>
      <Head>
        <title>Setting</title>
      </Head>
      {console.log(State)}
      <div className="flex justify-center items-center flex-col space-y-5 h-[100vh]">
        <div className="h-[130px] w-[130px] sm:h-[150px] sm:w-[150px] md:h-[200px] md:w-[200px] relative">
          <Image
            className="rounded-full object-cover"
            src={
              "https://images.pexels.com/photos/13586038/pexels-photo-13586038.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            }
            layout="fill"
          />
          <BrushIcon className="absolute sm:bottom-[-10%] bottom-[-20%] left-1/3 mb-2 bg-blue-500 rounded-full text-white p-1 h-[30px] w-[30px]" />
        </div>

        <div className="flex flex-col space-y-3 text-sm">
          <div className="flex flex-col space-y-2">
            <label htmlFor="Name">Name</label>
            <section className="space-x-1 flex items-center relative">
              <input
                type="string"
                id="Name"
                value={Name}
                className="text-gray-500"
                onChange={(E)=>{Mutable ? setName(E.target.value) : setName(Name)}}
              />
                <EditIcon onClick={()=>{setMutable(true)}} className="text-black-500 right-0 w-[10%] absolute" />
            </section>
          </div>

          <div className="flex flex-col space-y-2">
            <label htmlFor="Email">Email</label>
            <input
              type="string"
              id="Email"
              value={Email}
              className="text-gray-500"
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label htmlFor="Id">User ID</label>
            <input type="string" id="Id" value={Id} className="text-gray-500" />

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
