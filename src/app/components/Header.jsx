import Image from "next/image";
import Vector from "../../../public/assets/icon/Vector.svg";
import search from "../../../public/assets/icon/search.svg";

export default function Header() {
  return (
    <div>
      <div className="margin-auto  bg-black w-[100%] flex justify-around items-center" >
        <div className="flex justify-center p-3 gap-40  ">
          <div className="flex items-center justify-center gap-4  ">
            <h3>
              Summer Sale For All Swim Suit And Free Express Delivery - OFF 50%!
            </h3>
            <p className="font-bold text-white underline">ShopNow</p>
          </div>
          <div className="flex justify-end gap-7">
            <p>English</p>
            <Image
              src={Vector}
              width={10}
              height={10}
              alt="Picture of the author"
            />
          </div>
        </div>
      </div>
      <div className="bg-white h-22 boreder border-b-4 border-black flex justify-around text-black items-center">
        <h2 className="py-10 text-2xl font-semibold">Exclusive</h2>
        <div className="py-10 flex gap-14 text-xl ">
          <a href="#">Home</a>
          <a href="#">contact</a>
          <a href="#">About</a>
          <a href="#">Sign Up</a>
        </div>
        <div className=" flex h-12 px-2 py-0 item-center  border border-gray-50 rounded-lg bg-gray-100">
          <input
            type="text"
            className="px-2 outline-0"
            placeholder="What are you looking for?"
          />
          <div className="py-3 ">
            <Image src={search} width={25} alt="Picture of the author" />
          </div>
        </div>
      </div>
    </div>
  );
}
