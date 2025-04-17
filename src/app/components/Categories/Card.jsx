export default function Card({item,index}){
    return (
        <div key={index} className="">
          <div className="flex justify-around py-15">
            <div className="flex flex-col items-center px-13  border-2 gap-5 py-6 border-gray-300 rounded-lg hover:bg-red-500  text-black hover:text-white">
            <img src={item.imageUrl} alt={item.name} className="w-12 h-12" />
            <span className="py-2">{item.name}</span>
            </div>
          </div>
        </div>
    )
}