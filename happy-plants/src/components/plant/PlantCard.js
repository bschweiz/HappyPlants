import React, { useContext, useEffect } from "react"
import { PlantContext } from "./PlantProvider"


export const PlantCard = ({ plant, props }) => {

    const { releasePlant, getPlantNames, names } = useContext(PlantContext)

    useEffect(() => {
        getPlantNames()
    }, [])

    const matchNames = names.find(n => n.id === plant.trefleId)
    console.log(matchNames)
    // debugger
    if (matchNames == null) { return <div></div> } else {
        // debugger
        return (
            <section className="plant_info">
                <h2>Pet Name: {plant.petName}</h2>
                <h3 className="common__name">Trefle ID: {plant.trefleId}</h3>
                <img src={plant.imageURL} alt={plant.petName} />
                <div>{matchNames.commonName}</div>
                <div>{matchNames.scientificName}</div>
                <button className="btn--edit--Plant">Edit Plant</button>
                <button className="btn--delete--Plant"
                    onClick={
                        () => {
                            releasePlant(plant.id)
                                .then(() => {
                                    props.history.push("/plants")
                                })
                        }
                    }>Delete Plant</button>
            </section>
        )
    }
}




