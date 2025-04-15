import Button from "../Button";
import Card from "../Flashsales/Card";
import { month } from "../footer/carddata";
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";

export default function Bestselling() {
  return (
    <div className="px-40">
      <div className="flex py-5 self-start">
        <p className="h-8 w-4 bg-red-600 border rounded-sm"></p>
        <p className="pl-3 pt-1 text-red-600"> This Month</p>
      </div>
      <div className="flex justify-between ">
        <h1 className="text-black text-3xl font-medium">
          Best Selling Products{" "}
        </h1>
        <Button className="mt-0">View All </Button>
      </div>

      <div className=" flex gap-2 my-2 ">
        <Splide
          hasTrack={false}
          aria-label="..."
          className="w-[1600px] flex my-2"
          options={{
            arrows: true,
            perPage: 4,
          }}
        >
          <SplideTrack>
            {month?.map((data, i) => {
              return (
                <SplideSlide key={i}>
                  <Card item={data} key={i} />
                </SplideSlide>
              );
            })}
          </SplideTrack>
        </Splide>
      </div>
    </div>
  );
}
