import React from "react"
import "./PlantCard.css"

export const PlantCard = ({ plant, props }) => {

    const choosePlant = () => {
        props.history.push(`/plants/${plant.id}`)
    }
    
        return (
            <section className="plant__info">
                <img className="plant__pic" src={plant.imageURL} alt={plant.petName} />
                <button className="plant-detail"
                    onClick={
                        choosePlant
                    }>
                    Details about {plant.petName}
                </button>
            </section>
        )
    
}




