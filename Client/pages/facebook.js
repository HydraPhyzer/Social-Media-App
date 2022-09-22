import React, { useEffect, useState } from "react";
import Head from "next/head";
import Header from "../Components/Header/Header";
import RequestSidebar from "../Components/RequestSidebar/RequestSidebar";
import Notification from "../Components/Notification/Notification";
import MainPage from "../Components/MainPage/MainPage";
import VideoPage from "../Components/VideoPage/VideoPage";
import FriendPage from "../Components/FriendsPage/FriendPage";
import { useRouter } from "next/router";

const facebook = ({ Status }) => {
  let [ShowPage, setShowPage] = useState(false);
  let Router = useRouter();

  useEffect(() => {
    if (Status?.Error) {
      setShowPage(false)
      Router.push("/signup");
    } 
    else if (Status?.Pass)
    {
      setShowPage(true);
    }
  });
  let [Main, setMainPage] = useState(true);
  let [Video, setVideo] = useState(false);
  let [Friend, setFriend] = useState(false);
  let [Request, setRequest] = useState(false);
  let [Notify, setNotify] = useState(false);

  let ModeChange = (ModeName) => {
    ModeName == "Main" ? setMainPage(true) : setMainPage(false);
    ModeName == "Video" ? setVideo(true) : setVideo(false);
    ModeName == "Friend" ? setFriend(true) : setFriend(false);
    ModeName == "Request" ? setRequest(true) : setRequest(false);
    ModeName == "Notification" ? setNotify(true) : setNotify(false);
    // alert(ModeName)
  };
  return ShowPage ? (
    <>
      <Head>
        <title>Facebook</title>
      </Head>

      <div className="flex flex-col  h-screen">
        <Header props={ModeChange} />
        <div className="Area flex justify-between h-[90%]">
          <section className="bg-gray-200 overflow-y-scroll flex-1 Request hidden sm:block">
            <RequestSidebar />
          </section>

          <section className="bg-gray w-[100%] sm:w-[50%] overflow-y-scroll Scroll">
            {Main ? <MainPage /> : ""}
            {Friend ? <FriendPage /> : ""}
            {Video ? <VideoPage /> : ""}
            {Request ? (
              <section className="sm:hidden block h-[100%]">
                <RequestSidebar />
              </section>
            ) : (
              ""
            )}
            {Notify ? (
              <section className="sm:hidden block h-[100%]">
                <Notification />
              </section>
            ) : (
              ""
            )}
          </section>

          <section className="bg-gray-200 overflow-y-scroll flex-1 Friend hidden sm:block">
            <Notification />
          </section>
        </div>
      </div>
    </>
  ) : (
    ""
  );
};

export default facebook;

export let getServerSideProps = async (context) => {
  let Res = await fetch("http://localhost:3500/facebook", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: context.req.headers?.cookie?.split("=")[1],
    },
  });
  let Result = await Res.json();

  return {
    props: {
      Status: Result,
    },
  };
};
