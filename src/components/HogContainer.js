import Hog from "./Hog"
import React, { useState } from 'react'
// import Button from "./Button"

function HogContainer({hogData}){
    //console.log(hogData)
    const [currentHog, hogSetter] = useState(false)

    function handleClick(e){
        //console.log(e.target.alt)
        return (
            hogSetter(!currentHog)
        )
    }
// console.log(hogData)
    const singleHog = hogData.map((hog) => {
    
        return (
            <div key={hog.name} onClick={handleClick}>
                {/* {currentHog
                ?
                <HogDetails hogData={hog} specialty={hog.specialty} greased={hog.greased} weight={hog.weight} highest={hog["highest medal achieved"]}/>
                :
                <Hog name={hog.name} image={hog.image} />} */}
                <Hog hogData={hog} />
                
            </div>
        )
    })

    return (
        <div>
            {/* <div>
            <Button />
            </div> */}
            <div className={"ui grid container"}>
                {singleHog}
            </div>
        </div>
    )
}

export default HogContainer