export default function SideMenu({data}){
       return(
        <div>
             <ul className="text-black ">
               {
                data?.map((item, index) => ( 
                        <li key={index} className="py-3">{item.name}</li>
                ))
               }
            </ul>
        </div>
       )
}