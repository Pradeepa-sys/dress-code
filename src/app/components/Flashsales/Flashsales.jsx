import Image from "next/image";
import right from "../../../../public/assets/icon/rightarrow.png";
import left from "../../../../public/assets/icon/leftarrow.png";
import Card from "../../components/Flashsales/Card.jsx";
import { cardlist } from "../footer/carddata";

export default function Flashsales() {
  return (
    <div className="pl-40 text-black">
      <div className="flex py-5">
        <p className="h-8 w-4 bg-red-600 border rounded-sm"></p>
        <p className="pl-3 pt-1 text-red-600"> Today's</p>
      </div>
      <div className="flex justify-between relative">
        <div className="flex gap-20 text-3xl">
          <h1 className="text-black text-3xl font-medium">Flash Sales </h1>
          <p>03 : 23 : 19 :56</p>
        </div>
        <div className="w-40">
          <div className="splide__arrows absolute top-4">
            <button className="splide__arrow splide__arrow--prev">
              <Image src={right} />
            </button>
            <button className="splide__arrow splide__arrow--next">
              <Image src={left} />
            </button>
          </div>
        </div>
      </div>
      <div className=" flex gap-2">
        {data?.map(() => {
          return <Card data={cardlist} />;
        })}
      </div>
    </div>
  );
}
