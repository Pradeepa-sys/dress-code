import Image from "next/image";
import left from "../../../../public/assets/icon/leftarrow.png";
import right from "../../../../public/assets/icon/rightarrow.png";
import Card from "../Products/Card";
import { cardlist, month, product1, product2 } from "../footer/carddata";
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import Button from "../../components/Button";


const chunkArray = (arr:any, size:any) => {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  };


const combinedProducts = [...(product1 || []), ...(product2 || [])];
const slidesInChunks = chunkArray(combinedProducts, 2
    
);
export default function Bestselling() {

    

  return (
    <div className="px-40">
      <div className="flex py-5 self-start">
        <p className="h-8 w-4 bg-red-600 border rounded-sm"></p>
        <p className="pl-3 pt-1 text-red-600"> Our Products</p>
      </div>
      <div className="flex justify-between ">
        <h1 className="text-black text-3xl font-medium">
          Explore Our Products
        </h1>
      </div>
      <div className=" flex gap-2 my-2 ">
        <Splide
          hasTrack={false}
          aria-label="..."
          className=" flex gap-10  my-2 flex-col w-[1600px]"
          options={{
            arrows: true,
            perPage: 4,
          }}
        >
          <SplideTrack>
            {slidesInChunks?.map((group, i) => {
                console.log("group",group)
              return (
                <SplideSlide key={i}>
                  <div className="flex flex-col gap-4">
                    {group?.map((item: any, idx: number) => (
                      <Card key={idx} item={item} />
                    ))}
                  </div>
                </SplideSlide>
              );
            })}
          </SplideTrack>

          <div className="splide__arrows  absolute -top-10  right-0 ">
            <button className=" splide__arrow splide__arrow--prev !bg-gray-300 w-10 h-10 p-2">
              <Image src={left} alt="" />
            </button>
            <button className="splide__arrow splide__arrow--next !bg-gray-300">
              <Image src={right} alt="" />
            </button>
          </div>
        </Splide>
      </div>
      <div className="flex items-center justify-center">
        <Button type="" onClick={""} className="bg-red-600 ">
          View All Products
        </Button>
      </div>
    </div>
  );
}
