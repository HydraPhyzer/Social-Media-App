import { useRouter } from "next/router";
import React, { useEffect,useState } from "react";
import Setting from "../Components/Setting/Setting";
import { getCookie } from "cookies-next";

const setting = ({ Status }) => {
  let [ShowPage, setShowPage] = useState(false);

  let Router = useRouter();
  useEffect(() => {
    if (Status?.Error) {
      setShowPage(false);
      Router.push("/signup");
    } else {
      setShowPage(true);
    }
  }, []);

  return <div>{ShowPage ? <Setting /> : ""}</div>;
};

export default setting;

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
