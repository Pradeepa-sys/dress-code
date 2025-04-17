import Image from "next/image";
import Vector from "../../../public/assets/icon/Vector.svg";
import search from "../../../public/assets/icon/search.svg";
import whishlist from "../../../public/assets/icon/Wishlist.png";
import cart from "../../../public/assets/icon/Cart.png";

export default function Header() {
  return (
    <div>
   
      <div className="bg-black w-full flex justify-center items-center px-4 py-2">
        <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-[1200px] gap-4 md:gap-40 text-white text-sm md:text-base">
          <div className="flex items-center gap-2 text-center md:text-left">
            <h3>
              Summer Sale For All Swim Suit And Free Express Delivery - OFF 50%!
            </h3>
            <p className="font-bold underline cursor-pointer">ShopNow</p>
          </div>
          <div className="flex items-center gap-2">
            <p>English</p>
            <Image src={Vector} width={10} height={10} alt="Language Icon" />
          </div>
        </div>
      </div>

      <div className="bg-white border-b border-gray-300 w-full text-black ">
        <div className="flex flex-col md:flex-row  md:justify-between w-full max-w-[1200px] mx-auto px-5 py-4 gap-4">
         
         <h2 className=" text-2xl font-semibold  ">Exclusive</h2>
         
         

          
          <div className="flex gap-8 text-xl">
            <a href="#" className="hover:text-gray-600">Home</a>
            <a href="#" className="hover:text-gray-600">Contact</a>
            <a href="#" className="hover:text-gray-600">About</a>
            <a href="#" className="hover:text-gray-600">Sign Up</a>
          </div>

         
          <div className="flex items-center gap-8 px-9">
            <div className="flex items-center border border-gray-50 rounded-lg bg-gray-100 px-3 py-2 gap-3">
              <input
                type="text"
                className="bg-gray-100 outline-none px-2 w-32 md:w-55 text-gray-400"
                placeholder="What are you looking for?"
              />
              <Image src={search} width={20} alt="Search Icon" />
            </div>
            <Image src={whishlist} alt="Wishlist" width={24} />
            <Image src={cart} alt="Cart" width={24} />
          </div>
        </div>
      </div>
    </div>
  );
}
