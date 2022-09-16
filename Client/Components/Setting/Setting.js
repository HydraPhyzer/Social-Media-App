import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import Head from "next/head";
import BrushIcon from "@mui/icons-material/Brush";
import EditIcon from "@mui/icons-material/Edit";
import Image from "next/image";
import { useRef } from "react";
let FormData = require("form-data");

const Setting = () => {
  let [User, setUser] = useState("");
  let [Name, setName] = useState();
  let [Email, setEmail] = useState();
  let [Id, setId] = useState();
  let [Img, setImg] = useState(null);
  let [Mutable, setMutable] = useState(false);

  const ImageSelector = useRef(null);
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

  const ClickHandle = () => {
    ImageSelector.current.click();
  };
  const FileChange = (event) => {
    const fileObj = event.target.files && event.target.files[0];
    if (!fileObj) {
      return;
    } else {
      const form = new FormData();
      form.append("User-Image", fileObj);
      form.append("ID", User._id);
      form.append("Image", fileObj.name);

      // console.log(form)

      fetch(`http://localhost:3500/User-Image`, {
        method: "PUT",
        body: form,
        // headers: {
        //   ...form.getHeaders,
        // },
      }).then(async (Res) => {
        let A = await Res.json();
        console.log(A);
      });

      setImg(fileObj);
      event.target.value = null;
    }
  };

  let SaveData = () => {
    console.log(Img);
    fetch(`http://localhost:3500/setting`, {
      method: "POST",
      body: JSON.stringify({ Name, Email, Id }),
      headers: {
        "content-type": "application/json",
      },
    }).then(async (Res) => {});
  };

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
            src={"/../../../Server/Public/Uploads/pexels-rosivan-morais-11500404.jpg"
            }
            layout="fill"
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
              value={Email}
              className="text-gray-500"
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label htmlFor="Id">User ID</label>
            <input type="string" id="Id" value={Id} className="text-gray-500" />

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
