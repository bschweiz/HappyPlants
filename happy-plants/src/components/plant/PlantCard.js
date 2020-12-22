import React, { useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import { PlantContext } from "./PlantProvider"


export const PlantCard = ({ plant, props }) => {

    const { getPlantNames, names, setChosenPlant, chosenPlant } = useContext(PlantContext)

    useEffect(() => {
        getPlantNames()
    }, [])

    const choosePlant = () => {
        setChosenPlant(plant)
        props.history.push(`/plants/${plant.id}`)
    }
    const matchName = names.find(n => n.id === plant.trefleId)
    // console.log(matchName)
    // debugger
    if (matchName == null) { return <div></div> } else {
        // debugger
        return (
            <section className="plant_info">
                <button className="plant-detail"
                    onClick={
                        choosePlant
                    }>
                    {plant.petName} details
                </button>
                <img src={plant.imageURL} alt={plant.petName} />
                {/* <h3 className="card-title">Trefle ID # {plant.trefleId}</h3> */ }
                <div>{matchName.commonName}</div>
                <div>{matchName.scientificName}</div>
            </section>
        )
    }
}




