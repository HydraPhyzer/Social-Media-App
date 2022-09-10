import React from "react";
import Image from "next/image";
import Link from "next/link";

const Signup = () => {
  return (
    <div className="md:flex md:w-[100vw] h-[100vh] md:flex-row flex flex-col bg-[#1778F2] md:bg-transparent items-center">

      <div className="Si-Right md:space-y-5 flex-col w-[100%] md:w-[50%] h-fit md:h-[100%] flex justify-center md:items-center">
        <Image src={"/Facebook.png"} height={100} width={100} objectFit={'contain'} />

        <p className="w-[50%] text-center hidden md:block">Facebook helps you connect and share with the people in your life.</p>
      </div>

      <div className="space-y-2 Si-Left flex flex-col bg-[#1778F2] w-[50%] h-full md:h-[100%] md:flex justify-center items-center">
        <div className="flex flex-col ">
            <label className="text-white" htmlFor="Name">Enter Your Name</label>
            <input className="font-normal" type="text" id="Name"/>
        </div>

        <div className="flex flex-col ">
            <label className="text-white" htmlFor="Email">Enter Your Email</label>
            <input className="font-normal" type="email" id="Email"/>
        </div>

        <div className="flex flex-col space-y-2 ">
            <label className="text-white" htmlFor="Pass">Enter Your Password</label>
            <input className="font-normal" type="password" id="Pass"/>

            <button className="bg-black text-white p-2 rounded-md text-sm hover:animate-pulse">Sign Up</button>
            <hr className='border-2'/>
            <span className="text-center space-y-2 text-[#f1c40f]">or</span>
            
            <Link href='/login'>
                <button className="bg-[#2ecc71] p-2 text-sm rounded-md text-white">Already Have an Account</button>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
