'use client'
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Banner from "../../../public/assets/images/banner.png";
import Image from "next/image";
import '@splidejs/react-splide/css';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll'
export default function Home() {
  return (
    <div className="px-10">
      <div className="grid grid-cols-5 grid-rows-5 gap-4 ">
        <div className="col-span-2 bg-red-400">1</div>
        <div className="col-span-3 col-start-3">
          <Splide aria-label="My Favorite Images" options={{
            type: 'loop',
            rewind:true, 
            autoplay: true,
            perMove: 1,
            gap: '2rem',
         
            pagination: true,
            autoScroll: {
                // pauseOnHover: true,
                // pauseOnFocus: false,
                speed: 1
            },
            
         }} extensions={{ AutoScroll }}>
            <SplideSlide>
            <Image src={Banner}  alt="Picture of the author" />
            </SplideSlide>
            <SplideSlide>
            <Image src={Banner}  alt="Picture of the author" />
            </SplideSlide>
            <SplideSlide>
            <Image src={Banner}  alt="Picture of the author" />
            </SplideSlide>
          </Splide>
        </div>
      </div>
    </div>
  );
}
