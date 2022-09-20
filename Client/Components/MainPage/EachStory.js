import React from "react";
import Image from "next/image";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";

const EachStory = ({ props }) => {

  let State = useSelector((Stat) => {
    return Stat.Reduce;
  });

  return (
    <div className="bg-black rounded-lg h-[200px] w-[100px] overflow-hidden">
      {props == "First" ? (
        <div className="relative">
          <Avatar
            src={
              `http://localhost:3500/Public/Uploads/${State?.User?.Image}`
            }
            className="absolute z-10 top-[5px] left-[5px] border-2 border-blue-500"
          />

          <div className="absolute top-0 left-0">
            <div className="Img">
              <Image
                src={
                  `http://localhost:3500/Public/Uploads/${State?.User?.Image}`
                }
                height={150}
                width={100}
                objectFit="cover"
                className="rounded-lg z-100"
              />
            </div>

            <div className="Intro flex items-center flex-col justify-end p-2">
              <AddCircleIcon className="text-green-500" />
            </div>
          </div>
        </div>
      ) : (
        <div className="relative z-250">
          <Avatar
            src={
              "https://images.pexels.com/photos/11500404/pexels-photo-11500404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            className="absolute z-10 top-[5px] left-[5px] border-2 border-blue-500"
          />
          <div className="Img rounded-lg absolute top-0 left-0">
            <Image
              src={
                "https://images.pexels.com/photos/11500404/pexels-photo-11500404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
              height={200}
              width={100}
              objectFit="cover"
              className="rounded-lg hover:scale-105 overflow-hidden transition-all absolute"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default EachStory;
