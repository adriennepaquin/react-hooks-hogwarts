import HogDetails from "./HogDetails"
import React, { useState } from 'react'


function Hog(props){
    const [currentHog, hogSetter] = useState(false)
        // console.log(props.hogData.name)
    function handleClick(e){
        return (
            hogSetter(!currentHog)
        )
    }

   return (
        <div onClick={handleClick} className={"ui four wide column"}>
            <h2>{props.hogData.name}</h2>
            {currentHog
            ?
            <HogDetails hogData={props.hogData}/>
            :
            <div >
                {/* <h2>{props.hogData.name}</h2> */}
            <img src={props.hogData.image} alt={props.hogData.name} className={"minPigTile pigTile"}/>
            </div>

            }
            
        </div>
    )
}

export default Hog