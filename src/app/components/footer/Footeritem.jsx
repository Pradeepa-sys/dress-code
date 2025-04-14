

export default function Footercard({data,title}){
    
    return(
        <div className="text-white">
            <h1 className="h-10 text-xl">{title}</h1>
            <ul >
               {
                data?.map((item, index) => ( 
                        <li key={index} className="py-3">{item.name}</li>
                ))
               }
            </ul>
        </div>
    )
}
