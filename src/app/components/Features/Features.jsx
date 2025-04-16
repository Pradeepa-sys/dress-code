import Image from "next/image";
import left from "../../../../public/assets/images/arrival/left.svg";
import right from "../../../../public/assets/images/arrival/right.svg";
import bottom1 from "../../../../public/assets/images/arrival/bottom1.svg";
import bottom2 from "../../../../public/assets/images/arrival/bottom2.svg";
import service from "../../../../public/assets/icon/service/Services.svg";
import Service1 from "../../../../public/assets/icon/service/Services1.svg";
import Service2 from "../../../../public/assets/icon/service/Services2.svg";

export default function Features() {
  return (
    <div className=" px-40 ">
      <div className="flex py-5 self-start">
        <p className="h-8 w-4 bg-red-600 border rounded-sm"></p>
        <p className="pl-3 pt-1 text-red-600"> Featured</p>
      </div>
      <div>
        <h1 className="text-black text-3xl font-medium">New Arrival</h1>
      </div>

      <div className="flex h-[150%] gap-9 ">
        <div
          style={{
            backgroundImage: `url(${left.src})`,
            backgroundSize: "cover",
            height: "650px",
            width: "650px",
            marginBlock: "40px",
            position: "relative",
          }}
        >
          <div className="space-y-2 absolute bottom-0 m-10">
            <p className="text-white text-2xl ">PlayStation 5</p>
            <p className="text-md">
              Black and White Version of the ps5 <br />
              coming out on sale
            </p>
            <p className="underline">shop now</p>
          </div>
        </div>

        <div>
          <div
            style={{
              backgroundImage: `url(${right.src})`,
              backgroundSize: "cover",
              height: "300px",
              width: "650px",
              marginBlock: "35px",
              position: "relative",
            }}
          >
            <div className="space-y-2 absolute bottom-0 m-10">
              <p className="text-white text-2xl ">Women's Collections</p>
              <p className="text-md">
                Featured Women collections that
                <br /> give you another vibe
              </p>
              <p className="underline">shop now</p>
            </div>
          </div>
          <div className="flex gap-10">
            <div
              style={{
                backgroundImage: `url(${bottom1.src})`,
                backgroundSize: "cover",
                height: "300px",
                width: "300px",
                marginBlock: "20px",
                position: "relative",
              }}
            >
              <div className="space-y-2 absolute bottom-0 m-10">
                <p className="text-white text-2xl ">Speakers</p>
                <p className="text-md">Amazon Wireless Speakers</p>
                <p className="underline">shop now</p>
              </div>
            </div>
            <div
              style={{
                backgroundImage: `url(${bottom2.src})`,
                backgroundSize: "cover",
                height: "300px",
                width: "300px",
                marginBlock: "20px",
                position: "relative",
              }}
            >
              <div className="space-y-2 absolute bottom-0 m-10">
                <p className="text-white text-2xl ">Perfume</p>
                <p className="text-md ">GUCCI INTENSEOUD EDP</p>
                <p className="underline">shop now</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-20 text-black h-[300px] justify-center items-center">
        <div className=" space-y-4 flex flex-col items-center">
          <Image src={service} />
          <h3 className="font-semibold text-lg">FREE AND FAST DELIVERY</h3>
          <p>free delivery for all orders over $140</p>
        </div>
        <div className=" space-y-4 flex flex-col items-center">
          <Image src={Service1} />
          <h3 className="font-semibold text-lg">24/7 CUSTOMER SERVICE</h3>
          <p>Friendly 24/7 customer support </p>
        </div>
        <div className=" space-y-4 flex flex-col items-center">
          <Image src={Service2} />
          <h3 className="font-semibold text-lg">MONEY BACK GUARANTEE</h3>
          <p>We reurn money within 30 days</p>
        </div>
      </div>
    </div>
  );
}
