import Image from "next/image";
import React from "react";
import Signup from "../../../../public/assets/images/signup/signup.svg";
import google from "../../../../public/assets/icon/google.svg";
import Link from "next/link";

function page() {
  return (
    <div className="bg-white text-black  ">
      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-2 my-10">
          {" "}
          <Image src={Signup} className="h-[100%]"/>
        </div>
        <div className="col-span-2 flex flex-col my-30 items-center w-full ">
          <div className="">
            <h1 className="text-4xl">Create an account</h1>
            <p className="text-lg py-4">Enter your details below </p>
            <form action="" className="space-y-14  ">
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
              <div className="space-y-5 ">
                <button className="bg-[#DB4444] w-full text-white px-5 py-3 rounded-sm">
                  Create a Account
                </button>

                <div className="px-5 py-3 border-2 border-gray-300 flex gap-3 items-center justify-center rounded-sm">
                  <Image src={google} className="" />
                  <button className=" text-black ">Sign up with Google </button>
                </div>
              </div>

              <div className="flex text-gray-600 gap-3 ">
                <p className="flex text-gray-600">Already have account ? </p>
                <Link href="/login" className="underline text-gray-800 ">
                  Login in{" "}
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
