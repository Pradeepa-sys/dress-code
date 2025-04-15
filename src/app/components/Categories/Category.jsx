import left from '../../../../public/assets/icon/leftarrow.png'
import right from '../../../../public/assets/icon/rightarrow.png'


export default function Categories() {
  return (
    <div className="px-40">
      <div className="flex py-5 self-start ">
        <p className="h-8 w-4 bg-red-600 border rounded-sm"></p>
        <p className="pl-3 pt-1 text-red-600"> Categories</p>
      </div>
      <div>
        <h1 className="text-black text-3xl font-medium"> Browse By  Category</h1>
        <div className="flex  gap-5">
          <button className="bg-gray-300 rounded-full w-10 h-10 p-2">
            <Image src={left} />
          </button>
          <button className="bg-gray-300 rounded-full w-10 h-10 p-2">
            <Image src={right} />
          </button>
        </div>
      </div>
    </div>
  );
}
