"use client";
import { Rate } from "antd";
import eye from "../../../../public/assets/icon/Quick View.svg";
import heart from "../../../../public/assets/icon/heart small.svg";

import Image from "next/image";
export default function Card({ item, index }) {
  return (
    <div
      key={index}
      className="m-6  bg-gray-100 w-auto h-[330px] relative rounded-lg group " 
    >
      <div className="bg-gray-100 w-auto h-[200px] ">
        <div
          className="h-[150px] w-[300px] mt-10"
          style={{
            backgroundImage: `url(${item.imageUrl})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundPosition: "center center",
          }}
        ></div>
        <div className="relative ">
          <button className="text-white bg-black absolute  text-lg w-full p-2 rounded-b-lg hidden  group-hover:inline">
            Add to Cart
          </button>
        </div>

        <div className="space-y-3 absolute top-2 right-2">
          <div className=" p-1 bg-white rounded-full">
            <Image src={eye} alt="" className="  " />
          </div>
          <div className=" p-1 bg-white rounded-full">
            <Image src={heart} alt="" className="  " />
          </div>
        </div>

        <div className="bg-[#DB4444] text-sm px-2 py-1 rounded-md absolute top-3 left-3   text-white">
          - {item.discount} %
        </div>
      </div>
      <div className=" p-2 bg-white text-md ">
        <div className="text-black">{item.name}</div>
        <div className="text-[#DB4444] text-bold flex gap-4 py-2">
          {item.rate} <s className="text-gray-400">{item.op}</s>
        </div>
        <div className=" text-gray-500 flex gap-4">
          {" "}
          <Rate allowHalf defaultValue={item.rating} disabled />{" "}
          {item.ratingCount}
        </div>
      </div>
    </div>
  );
}
