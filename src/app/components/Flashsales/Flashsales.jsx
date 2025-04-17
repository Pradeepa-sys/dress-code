import Image from "next/image";
import right from "../../../../public/assets/icon/rightarrow.png";
import left from "../../../../public/assets/icon/leftarrow.png";
import Card from "../../components/Flashsales/Card.jsx";
import Button from "../../components/Button.jsx";
import { cardlist } from "../footer/carddata";
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";

export default function Flashsales() {
  console.log("cardlist", cardlist);

  return (
    <div className="">
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
        </div>

        <div className=" flex gap-2 my-2 ">
          <Splide
            hasTrack={false}
            aria-label="..."
            className="w-[1600px] flex gap-10  my-2"
            options={{
              arrows: true,
              perPage: 4,
            }}
          >
            <SplideTrack>
              {cardlist?.map((e, i) => {
                return (
                  <SplideSlide key={i}>
                    <Card item={e} key={i} />
                  </SplideSlide>
                );
              })}
            </SplideTrack>

            <div className="splide__arrows  absolute -top-10  right-0 ">
              <button className=" splide__arrow splide__arrow--prev !bg-gray-300 w-10 h-10 p-2">
                <Image src={right} />
              </button>
              <button className="splide__arrow splide__arrow--next !bg-gray-300">
                <Image src={left} />
              </button>
            </div>
          </Splide>
        </div>

        <Button className="bg-red-600">View All Products</Button>
        <div className="w-full mx-auto my-4 border-gray-200 border-1 rounded-sm md:my-10 ">
          {/* <hr /> */}
        </div>
      </div>
    </div>
  );
}
