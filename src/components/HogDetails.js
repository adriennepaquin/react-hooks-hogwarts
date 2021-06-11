function hogDetails(hogData){
    console.log(hogData.hogData)

    return(
        <div className={"minPigTile pigTile"}>
            <ul>
                <li>Specialty: {hogData.hogData.specialty}</li>
                <li>Weight: {hogData.hogData.weight}</li>
                <li>Greased?  
                    { hogData.hogData.greased
                    ?
                    " Greased"
                    :
                    " Not Greased"}
                </li>
                <li>Highest Medal Achieved: {hogData.hogData["highest medal achieved"]}</li>
            </ul>
        </div>
    )
}

export default hogDetails;