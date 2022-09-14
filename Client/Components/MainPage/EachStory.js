import React from "react";
import Image from "next/image";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Avatar } from "@mui/material";

const EachStory = ({ props }) => {
  return (
    <div className="bg-black rounded-lg h-[200px] w-[100px] overflow-hidden">
      {props == "First" ? (
        <div className="relative">
          <Avatar
            src={
              "https://www.esafety.gov.au/sites/default/files/2019-08/Remove%20images%20and%20video.jpg"
            }
            className="absolute z-10 top-[5px] left-[5px] border-2 border-blue-500"
          />

          <div className="absolute top-0 left-0">
            <div className="Img">
              <Image
                src={
                  "https://www.esafety.gov.au/sites/default/files/2019-08/Remove%20images%20and%20video.jpg"
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
        <div className="relative">
          <Avatar
            src={
              "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            className="absolute z-10 top-[5px] left-[5px] border-2 border-blue-500"
          />
          <div className="Img rounded-lg absolute top-0 left-0">
            <Image
              src={
                "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
