export default function Card(){
    return (
        <div className="pl-40">
            <div className="flex py-5">
                <p className="h-8 w-4 bg-red-600 border rounded-sm"></p>
                <p className="pl-3 pt-1 text-red-600"> Today's</p>
            </div>
            <div>
                <h1 className="text-black text-2xl font-semibold">Flash Sales</h1>
            </div>
        </div>
    )
}