import React, { useState } from "react";
import Head from "next/head";
import Header from "../Components/Header/Header";
import RequestSidebar from "../Components/RequestSidebar/RequestSidebar";
import Notification from "../Components/Notification/Notification";
import MainPage from "../Components/MainPage/MainPage";
import VideoPage from "../Components/VideoPage/VideoPage";
import FriendPage from "../Components/FriendsPage/FriendPage";

const facebook = () => {
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
  return (
    <>
      <Head>
        <title>Facebook</title>
      </Head>

      <div className="flex flex-col h-screen">
        <Header props={ModeChange} />
        <div className="Area flex justify-between flex-1 h-[90%]">
          <section className="w-[25%] bg-gray-200 overflow-y-scroll Request hidden sm:block ">
            <RequestSidebar />
          </section>

          <section className="flex-1 bg-gray">
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

          <section className="w-[25%] bg-gray-200 overflow-y-scroll Friend hidden sm:block">
            <Notification />
          </section>
        </div>
      </div>
    </>
  );
};

export default facebook;
