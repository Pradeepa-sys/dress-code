import Image from "next/image";
import React from "react";
import Signup from "../../../../public/assets/images/signup/signup.svg";


function page() {
  return (
    <div className="bg-white text-black  ">
      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-2 my-10">
          {" "}
          <Image src={Signup} className="h-[100%]" />
        </div>
        <div className="col-span-2 flex flex-col justify-center items-center w-full ">
          <div className="">
            <h1 className="text-4xl">Login to Exclusive</h1>
            <p className="text-lg py-7">Enter your details below </p>
            <form action="" className="space-y-14  ">
              <input
                type="text"
                placeholder="Email or phone Number"
                className="border-b border-gray-400  p-1 outline-none block"
              />
              <input
                type="text"
                placeholder="password"
                className="border-b border-gray-400  p-1 outline-none block"
              />

              <div className="flex gap-15">
                <button className="bg-[#DB4444] text-white px-9 py-4 rounded-sm">
                  Log In
                </button>
                <button className=" text-[#DB4444] ">Forget Password?</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
