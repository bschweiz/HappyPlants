import React from "react"


export const PlantCard = ({ plant, props }) => {

    const choosePlant = () => {
        props.history.push(`/plants/${plant.id}`)
    }
    
        return (
            <section className="plant_info">
                <img src={plant.imageURL} alt={plant.petName} />
                <button className="plant-detail"
                    onClick={
                        choosePlant
                    }>
                    Details about {plant.petName}
                </button>
            </section>
        )
    
}




