import React, { useContext, useEffect } from "react"
import { PlantContext } from "./PlantProvider"


export const PlantCard = ({ plant }) => {

    const { getPlantNames, names } = useContext(PlantContext)

    useEffect(() => {
        getPlantNames()
    }, [])

    if (names.length) {

        // const matchedNames = names.find(n => n.id === plant.trefleId)
        const match = names.find(n => 
            n.id === plant.trefleId)
        console.log(match)
        // debugger
        if (match == null) {return <div></div>} else { 
            return (
                <section className="plant_info">
            <h2>Pet Name: {plant.petName}</h2>
            <h3 className="common__name">Trefle ID: {plant.trefleId}</h3>
            <img src={plant.imageURL} alt={plant.petName} />
            <div>{match.commonName}</div>
            <div>{match.scientificName}</div>
        </section>
    )
}} else {return <div>waiting on Trefle table</div>}
// }
}



