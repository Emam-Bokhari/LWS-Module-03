import { Fragment, useState } from "react";

export default function Panel({title,children}){
    const [isActive,setIsActive]=useState(false)
    function handleActive(){
        setIsActive(!isActive)
    }
    return(
        <Fragment>
            <div className="border-2 border-gray-500 px-3 py-2" >
                <h2 className="font-medium text-xl" >
                    {title}
                </h2>
               {isActive? <p>{children}</p>:
                <button 
                onClick={handleActive}
                className="bg-purple-500 px-3 py-1 rounded-sm text-white hover:bg-purple-600 transition-all ease-in duration-150 mt-2" >Show</button>}
            </div>
        </Fragment>
    )
}