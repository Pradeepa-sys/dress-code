import Image from "next/image";
import React from "react";
import Signup from "../../../../public/assets/images/signup/signup.svg";

function page() {
  return (
    <div className="">
      <div className="grid grid-cols-4 grid-rows-5 gap-4">
        <div className="col-span-2 ">
          {" "}
          <Image src={Signup} />
        </div>
        <div className="col-span-2 flex flex-col justify-center items-center w-full">
          <div className="">
            <h1 className="text-xl">Create an account</h1>
            <p className="text-lg">Enter your details below </p>
            <form action="" className="space-y-5  ">
              <input
                type="text"
                placeholder="Name"
                className="border-b border-gray-400  p-1 outline-none block"
              />
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
              <button className="bg-[#DB4444] w-full text-white px-5 py-2">Create a Account</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
