export default function Card({data}){
    return(
        <div>
                             <h2 key={index}>{item.name}</h2>
                             <div className="flex">
                             <p>{item.rate}</p>
                             <s>{item.op}</s>
                             </div>
                         
        </div>
    )
}