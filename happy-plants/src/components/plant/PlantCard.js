import React, { useContext } from "react"
import { PlantContext } from "./PlantProvider"


export const PlantCard = ({ plant, props }) => {

    const choosePlant = () => {
        props.history.push(`/plants/${plant.id}`)
    }
    
        return (
            <section className="plant_info">
                <button className="plant-detail"
                    onClick={
                        choosePlant
                    }>
                    {plant.petName} details
                </button>
                <img src={plant.imageURL} alt={plant.petName} />
            </section>
        )
    
}




