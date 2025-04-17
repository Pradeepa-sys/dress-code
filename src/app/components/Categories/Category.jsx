import Image from "next/image";
import left from "../../../../public/assets/icon/leftarrow.png";
import right from "../../../../public/assets/icon/rightarrow.png";
import { categories } from "../footer/carddata";
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import Card from "../../components/Categories/Card.jsx"
export default function Category() {
  return (
    <div className="px-40">
      <div className="flex py-5 self-start ">
        <p className="h-8 w-4 bg-red-600 border rounded-sm"></p>
        <p className="pl-3 pt-1 text-red-600"> Categories</p>
      </div>
      <div className="">
        <h1 className="text-black text-3xl font-medium"> Browse By Category</h1>
         
        <div className=" flex gap-2 my-2 ">
          <Splide
            hasTrack={false}
            aria-label="..."
            className="w-[1600px] flex gap-10  my-2"
            options={{
              arrows: true,
              perPage: 6,
            }}
          >
            <SplideTrack>
              {categories?.map((e, i) => {
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

      {/* <div className="w-full mx-auto my-4 border-gray-200 border-1 rounded-sm md:my-10 ">
     </div> */}
    </div>
  </div>
  );
}
