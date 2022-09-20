import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { SetUser } from "../Redux/Actions";
import React, { useState, useEffect, useRef } from "react";
import Head from "next/head";
import BrushIcon from "@mui/icons-material/Brush";
import EditIcon from "@mui/icons-material/Edit";
import Image from "next/image";
let FormData = require("form-data");
import { getCookie,getCookies } from "cookies-next";

const Setting = ({ Status }) => {
  let [Name, setName] = useState();
  let [Mutable, setMutable] = useState(false);

  const ImageSelector = useRef(null);
  let Router = useRouter();

  let Dispatch = useDispatch();

  let State = useSelector((Stat) => {
    return Stat.Reduce;
  });

  let MyFunc = () => {
    console.log(State);
    fetch(`http://localhost:3500/Get-User`, {
      method: "POST",
      body: JSON.stringify({ _id: State?.User?._id}),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(async (Res) => {
      let Response = await Res.json();
      Dispatch(SetUser(Response[0]));
      setName(State?.User?.Name);
    });
  };

  useEffect(() => {
      MyFunc();
  }, []);

  const ClickHandle = () => {
    ImageSelector.current.click();
  };
  const FileChange = async (event) => {
    const fileObj = event.target.files && event.target.files[0];
    if (!fileObj) {
      return;
    } else {
      const form = new FormData();
      form.append("Name", fileObj.name);
      form.append("ID", State?.User?._id);
      form.append("User-Image", fileObj);

      await fetch(`http://localhost:3500/User-Image`, {
        method: "PUT",
        body: form,
      });

      await fetch(`http://localhost:3500/Get-User`, {
        method: "POST",
        body: JSON.stringify({ _id: State?.User?._id }),
        headers: {
          "Content-Type": "application/json",
        },
      }).then(async (Res) => {
        let Response = await Res.json();
        Dispatch(SetUser(Response[0]));
        console.log(State)
      });
      event.target.value = null;
    }
  };

  let SaveData = () => {
    fetch(`http://localhost:3500/setting`, {
      method: "POST",
      body: JSON.stringify({
        Name,
        Email: State?.User?.Email,
        Id: State?.User?._id,
      }),
      headers: {
        "content-type": "application/json",
        authorization: getCookie('Token')
      },
    }).then(async (Res) => {
      MyFunc();  
      Router.push("/");
    });
  };

  return (
    <>
      <Head>
        <title>Setting</title>
      </Head>
      <div className="flex justify-center items-center flex-col space-y-5 h-[100vh]">
        <div className="h-[130px] w-[130px] sm:h-[150px] sm:w-[150px] md:h-[200px] md:w-[200px] relative object-contain">
          <Image
            className="rounded-full "
            src={`http://localhost:3500/Public/Uploads/${State?.User?.Image}`}
            layout="fill"
            objectFit="cover"
            alt="User Image"
          />
          <input
            style={{ display: "none" }}
            ref={ImageSelector}
            type="file"
            onChange={FileChange}
            name="User-Image"
          />
          <BrushIcon
            onClick={() => {
              ClickHandle();
            }}
            className="absolute sm:bottom-[-10%] bottom-[-20%] left-1/3 mb-2 bg-blue-500 rounded-full text-white p-1 h-[30px] w-[30px]"
          />
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
                onChange={(E) => {
                  Mutable ? setName(E.target.value) : setName(Name);
                }}
              />
              <EditIcon
                onClick={() => {
                  setMutable(true);
                }}
                className="text-black-500 right-0 w-[10%] absolute"
              />
            </section>
          </div>

          <div className="flex flex-col space-y-2">
            <label htmlFor="Email">Email</label>
            <input
              type="string"
              id="Email"
              value={State?.User?.Email}
              className="text-gray-500"
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label htmlFor="Id">User ID</label>
            <input
              type="string"
              id="Id"
              value={State?.User?._id}
              className="text-gray-500"
            />

            <button
              onClick={() => {
                SaveData();
              }}
              className="bg-blue-500 w-full my-5 p-2 text-white rounded-sm"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Setting;
