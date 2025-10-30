import React, { useState } from "react";
import { FaHandsClapping } from "react-icons/fa6";
import RegisterImg from "../assets/Reddit/register.webp";
import { Link } from "react-router-dom";

const Register = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const handleFormSubmit = (e)=>{
        e.preventDefault()

        console.log(name, " ", email, " ", password)
    }
  return (
    <div className="flex mt-[124px]">
      <div className="w-full md:w-1/2 flex justify-center items-center p-8 md:p-12">
        <form onSubmit={handleFormSubmit} className="w-full max-w-md p-6 rounded-lg shadow-md">
          <div className="mb-3 flex justify-center items-center">
            <h2 className="text-xl font-bold">Rabbit</h2>
          </div>
          <h2 className="text-xl font-semibold flex justify-center items-center gap-3">
            Hey There <FaHandsClapping className="text-lg" />{" "}
          </h2>
          <p className="text-center text-sm mt-4 font-semibold">
            Please Enter Your Email and Password
          </p>

          <div className="mt-4">
            <label className="text-sm font-semibold mb-2 blcok">Name : </label>
            <input 
            value={name}
            onChange={(e)=> setName(e.target.value)}
            type="text" className="p-2 border border-gray-200 text-lg focus:outline-none rounded-lg w-full" placeholder="Enter Your Name " />
          </div>
          <div className="mt-4">
            <label className="text-sm font-semibold mb-2 block">Email : </label>
            <input 
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
            type="email" className="p-2 border border-gray-200 text-lg focus:outline-none rounded-lg w-full" placeholder="Enter Your Email " />
          </div>
          <div className="mt-4">
            <label className="text-sm font-semibold mb-2 block">Password : </label>
            <input 
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
            type="password" className="p-2 border border-gray-200 text-lg focus:outline-none rounded-lg w-full" placeholder="Enter Your Password " />
          </div>

          <button type="submit" className="w-full bg-black text-white px-2 py-3 font-semibold hover:bg-gray-800 mt-4 rounded-lg">Sign Up</button>
          <p className="mt-4 text-center">Already Have an account ? <Link to={"/login"} className="text-blue-500">Login</Link> </p>
        </form>
      </div>
      <div className="hidden md:block md:w-1/2 bg-gray-500">
        <div className="h-full">
          <img
            src={RegisterImg}
            className="w-full h-[700px] object-center"
            alt=""
          />
        </div>
      </div>

      
    </div>
  );
};

export default Register;
