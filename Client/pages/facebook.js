import React from "react";
import Head from "next/head";
import Header from "../Components/Header/Header";
import RequestSidebar from '../Components/RequestSidebar/RequestSidebar'
import FriendsSidebar from '../Components/FriendsSidebar/FriendsSidebar'
import MainPage from "../Components/MainPage/MainPage";

const facebook = () => {
  return (
    <>
      <Head>
        <title>Facebook</title>
      </Head>

      <div className="flex flex-col h-screen">
        <Header/>
        <div className="Area flex justify-between flex-1 h-[90%]">

          <section className="w-[25%] bg-gray-200 overflow-y-scroll Request hidden sm:block">
            <RequestSidebar/>
          </section>

          <section className='flex-1 bg-gray'>
            <MainPage/>
          </section>

          <section className="w-[25%] bg-gray-200 Freind overflow-y-scroll Friend hidden sm:block">
            <FriendsSidebar/>
          </section>
        </div>
      </div>
    </>
  );
};

export default facebook;
