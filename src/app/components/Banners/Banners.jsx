import Image from "next/image";
import banner2 from "../../../../public/assets/images/mainpage/banner2.png";
import Button from "../Button";

export default function Banners() {
  return (
    <div className="px-30 p-10">
      <div className="h-[575px] bg-black ">
        <div className="flex gap-15  ">
          <div className="mx-30 my-20 line-clamp-5  flex flex-col space-y-7 ">
            <p className="text-green-600 ">Categories</p>
            <h2 className="text-6xl">Enhance Your</h2>
            <h2 className="text-6xl">Music Exprience</h2>
            <div className="flex gap-8">
              <div className="flex flex-col bg-white rounded-full p-2 items-center w-15 h-15 text-black ">
                <p className="font-bold">23</p>
                <p className="text-xs">hours</p>
              </div>
              <div className="flex flex-col bg-white rounded-full p-2 items-center w-15 h-15 text-black ">
                <p className="font-bold">05</p>
                <p className="text-xs">Days</p>
              </div>
              <div className="flex flex-col bg-white rounded-full p-2 items-center w-15 h-15 text-black ">
                <p className="font-bold">59</p>
                <p className="text-xs">Minutes</p>
              </div>
              <div className="flex flex-col bg-white rounded-full p-2 items-center w-15 h-15 text-black ">
                <p className="font-bold">35</p>
                <p className="text-xs">Seconds</p>
              </div>
            </div>
            <Button className="bg-green-500  p-15px w-[130px]">Buy Now</Button>
          </div>
          <div className=" hadow-[rgba(0,0,0,0.5)_34px_3px_9px_0px] 
  shadow_clor:rgb(20 20 20) ">
            <Image src={banner2} className="h-[90%] w-[100%] m-auto  " />
          </div>
        </div>
      </div>
    </div>
  );
}
