import React, { useEffect } from "react";
import EachPost from "./EachPost";
import { useSelector, useDispatch } from "react-redux";
import { SetPosts } from "../Redux/Actions";

const AllPosts = () => {
  let Dispatch = useDispatch();
  let State = useSelector((Stat) => {
    return Stat.Reduce;
  });

  useEffect(() => {
    fetch("http://localhost:3500/Get-Post", {
      method: "POST",
      body: JSON.stringify({ ID: State?.User?._id }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(async (Res) => {
      if (Res) {
        let Result = await Res.json();
        console.log(Result);
        if (Result?.Error) Dispatch(SetPosts([]));
        else Dispatch(SetPosts(Result));
      }
    });
  }, []);

  return (
    <div className="space-y-2">
      {State?.UserPosts?.MyPosts ? (
        State?.UserPosts?.MyPosts?.sort(
          (A, B) => B.TimeStamp - A.TimeStamp
        ).map((Element) => {
          return <EachPost Element={Element} />;
        })
      ) : (
        <p className="text-center text-gray-500 p-2 border-dashed border-2 border-gray-500">
          No Posts 😟. Add Posts to See{" "}
        </p>
      )}
    </div>
  );
};

export default AllPosts;
