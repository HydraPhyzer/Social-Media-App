import React from "react";
import Login from "../Components/Account/Login";
import Head from "next/head";

const login = () => {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <Login />
    </>
  );
};

export default login;
