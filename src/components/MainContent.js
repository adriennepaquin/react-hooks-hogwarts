import HogContainer from "./HogContainer"
import Button from "./Button"

function MainContent(props){
    //console.log(props.hogData)
    hogArray = []
    const pigsToDisplay = props.hogData.filter((hog) => {
        if (hog.greased){[...hogArray, hog]}
    })
    }

    function handleGrease({props}){
        // const greasedArray = []
    }

    return (
        <div>
            <header className={"smallHeader"}>
            <button onClick={(e) => handleGrease(props)} type={"button"} className={"btn btn-info"}>Greased Pigs Only</button>
            </header>
            <HogContainer hogData={props.hogData} />
        </div>
    )
}

export default MainContent