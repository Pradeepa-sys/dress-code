"use client";
import { Rate } from "antd";
import eye from "../../../../public/assets/icon/Quick View.svg";
import heart from "../../../../public/assets/icon/heart small.svg";

import Image from "next/image";
export default function Card({ item, index }) {
  return (
    <div key={index} className="m-1  bg-gray-100 w-auto relative">
      <div
        className="h-[200px] w-[auto]"
        style={{
          backgroundImage: `url(${item.imageUrl})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "center center",
        }}
      >
        <div className="space-y-3 absolute top-2 right-2">
          <div className=" p-1 bg-white rounded-full">
            <Image src={eye} alt="" className="  " />
          </div>
          <div className=" p-1 bg-white rounded-full">
            <Image src={heart} alt="" className="  " />
          </div>
        </div>

        <div className="bg-[#DB4444] text-sm px-2 py-1 rounded-md absolute top-3 left-3  text-white">
        -  {item.discount} %
        </div>
      </div>
      <div className="space-y-2 p-2 bg-white text-md">
        <div className="">{item.name}</div>
        <div className="text-[#DB4444] text-bold">
          {item.rate} <s className="text-gray-400">{item.op}</s>
        </div>
        <div className="">
          {" "}
          <Rate allowHalf defaultValue={item.rating} disabled />{" "}
          {item.ratingCount}
        </div>
      </div>
     
    </div>
  );
}
