"use client";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Banner from "../../public/assets/images/mainpage/banner.png";
import Image from "next/image";
import "@splidejs/react-splide/css";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import { Sidemenu } from "./components/footer/carddata.js";
import SideMenu from "./components/SideMenu/page.jsx";
import Categories from "./components/Categories/Category.jsx";

import Flashsales from "./components/Flashsales/Flashsales.jsx";

export default function Home() {
  return (
    <div className=" bg-white">
      <div className="flex px-40 gap-20 ">
        <div className="w-[18%] py-10  border-gray-300 border-r-1 border-0">
          <SideMenu data={Sidemenu} />
        </div>
        <div>
          <p className="border-gray-300 border  border-r-2 "></p>
        </div>
        <div className="w-[75%] h-[50%] pt-10">
          <Splide
            aria-label="My Favorite Images"
            options={{
              // type: 'loop',
              rewind:true,
              // autoplay: false,
              // perMove: 1,
              // pagination: true,
              // autoScroll: {
              //     pauseOnHover: true,
              //     pauseOnFocus: false,
              //     speed: 1
              // },
              nextClass: "",
            }}
            // extensions={{ AutoScroll}}
          >
            {[1, 2, 3].map((e,i) => {
              return (
                <SplideSlide key={i}>
                  <Image
                    //key={e}
                    src={Banner}
                    alt="Picture of the author"
                    className="h-[99%] w-full"
                  />
                </SplideSlide>
              );
            })}
          </Splide>
        </div>
      </div>
      <Flashsales />
      <Categories/>
    </div>
  );
}
