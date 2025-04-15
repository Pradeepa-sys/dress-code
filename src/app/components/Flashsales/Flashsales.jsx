import Image from "next/image";
import right from "../../../../public/assets/icon/rightarrow.png";
import left from "../../../../public/assets/icon/leftarrow.png";
import Card from "../../components/Flashsales/Card.jsx";
import { cardlist } from "../footer/carddata";

export default function Flashsales() {
  return (
    <div className="flex justify-center items-center flex-col px-40 ">
      <div className="flex py-5 self-start">
        <p className="h-8 w-4 bg-red-600 border rounded-sm"></p>
        <p className="pl-3 pt-1 text-red-600"> Today's</p>
      </div>
      <div className="self-start flex justify-between  w-full">
        <div className="flex justify-between ">
          <div className="flex gap-20 text-xl ">
            <h1 className="text-black text-3xl font-medium">Flash Sales </h1>
            <div className=" flex gap-3 text-black items-center">
            <div className="">
              <div className="text-sm">Days</div>
              <div className="text-2xl font-bold">03 </div>
            </div>
            <span className="text-[#DB4444] self-end">:</span>
            <div className="">
              <div className="text-sm">hour</div>
              <div className="text-2xl font-bold">23</div>
            </div>
            <span className="text-[#DB4444] self-end">:</span>
            <div className="">
              <div className="text-sm">minutes</div>
              <div className="text-2xl font-bold">19</div>
            </div>
            <span className="text-[#DB4444] self-end">:</span>
            <div className="">
              <div className="text-sm">secound</div>
              <div className="text-2xl font-bold">56</div>
            </div>

            </div>
          
          </div>
        </div>
        <div className="flex  gap-5">
          <button className="bg-gray-300 rounded-full w-10 h-10 p-2">
            <Image src={left} />
          </button>
          <button className="bg-gray-300 rounded-full w-10 h-10 p-2">
            <Image src={right} />
          </button>
        </div>
      </div>

      <div className=" flex gap-2 my-2">
        {cardlist.map((data, i) => {
          return <Card item={data} index={i + "card"} />;
        })}
      </div>
    </div>
  );
}
