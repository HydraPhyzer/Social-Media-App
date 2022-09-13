import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Head from "next/head";
import cookie from 'cookie'
let Home = ({ User }) => {
  let Router = useRouter();
  let [State, setState] = useState(false);
  useEffect(() => {
    if (cookie.parse("Token")) {
      Router.push("/facebook");
    } else {
      Router.push("/signup");
    }
  }, []);

  return (
    <>
      <Head>
        <title>Please Wait !! </title>
      </Head>
      <div className="flex justify-center flex-col items-center h-[100vh] space-y-5 bg-[#1778F2]">
        <div className="Anime flex animate-bounce">
          <div className="A-1"></div>
          <div className="A-2"></div>
          <div className="A-3"></div>
          <div className="A-4"></div>
        </div>
        <div className="Text text-white">
          <span>Loading !! Please Wait </span>
          <span className="animate-pulse"> ...</span>
        </div>
      </div>
    </>
  );
};

export default Home;
