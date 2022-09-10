import React ,{useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Login = () => {
  let [Email,setEmail]=useState('')
  let [Pass,setPass]=useState('')
  let [Check,setCheck]=useState(false)

  let LogIn=()=>
  {
    if(Email && Pass)
    {
      setEmail("");
      setPass("");
      setCheck(false);
    }
    else
    {
      setCheck(true)
    }
  }


  return (
    <div className="md:flex md:w-[100vw] h-[100vh] flex-col flex md:flex-row-reverse bg-[#1778F2] md:bg-transparent items-center">
      <div className="Si-Right md:space-y-5 flex-col w-[100%] md:w-[50%] h-fit md:h-[100%] flex justify-center md:items-center">
        <Image src={"/Facebook.png"} height={100} width={100} objectFit={'contain'}></Image>
        <p className="w-[50%] text-center md:block hidden">Facebook helps you connect and share with the people in your life.</p>
      </div>

      <div className="space-y-2 Si-Left flex flex-col bg-[#1778F2] w-[50%] h-full md:h-[100%] md:flex justify-center items-center">
        <div className="flex flex-col">
            <label className="text-white" htmlFor="Email">Enter Your Email</label>
            <input value={Email}  onChange={(E)=>{setEmail(E.target.value)}} className="font-normal" type="email" id="Email"/>
            {Check && !Email ? <small className="text-black">Email Can't be Blank</small>:""}
        </div>
        <div className="flex flex-col space-y-2">
            <label className="text-white" htmlFor="Pass">Enter Your Password</label>
            <input value={Pass}  onChange={(E)=>{setPass(E.target.value)}} className="font-normal" type="password" id="Pass"/>
            {Check && !Pass ? <small className="text-black">Password Can't be Blank</small>:""}

            <button onClick={()=>{LogIn()}} className="bg-black text-white p-2 rounded-md text-sm hover:animate-pulse">Login</button>
            <hr className='border-2'/>
            <span className="text-center space-y-2 text-[#f1c40f]">or</span>
            
            <Link href='/signup'>
                <button className="bg-[#2ecc71] p-2 rounded-md  text-sm text-white">Create New Account</button>
            </Link>
        </div>
      </div>
    </div>
  )
}

export default Login