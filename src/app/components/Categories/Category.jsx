import Image from "next/image";
import left from "../../../../public/assets/icon/leftarrow.png";
import right from "../../../../public/assets/icon/rightarrow.png";
import { categories } from "../footer/carddata";

export default function Category() {
  return (
    <div className="px-40">
      <div className="flex py-5 self-start ">
        <p className="h-8 w-4 bg-red-600 border rounded-sm"></p>
        <p className="pl-3 pt-1 text-red-600"> Categories</p>
      </div>
      <div className="flex justify-between ">
        <h1 className="text-black text-3xl font-medium"> Browse By Category</h1>
        <div className="flex  gap-5">
          <button className="bg-gray-300 rounded-full w-10 h-10 p-2">
            <Image src={left} />
          </button>
          <button className="bg-gray-300 rounded-full w-10 h-10 p-2">
            <Image src={right} />
          </button>
        </div>
      </div>
      <div className="">
        <ul className="flex justify-around py-15">
          {categories?.map((item, index) => (
            <li key={index} className="flex flex-col items-center px-13  border-2 gap-5 py-6 border-gray-300 rounded-lg hover:bg-red-400  text-black hover:text-white">
              <img src={item.imageUrl} alt={item.name} className="w-12 h-12" />
              <span className="py-2">{item.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
