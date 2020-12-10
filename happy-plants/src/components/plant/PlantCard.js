import React from "react"


export const PlantCard = ({plant}) => (
    
    <section className="plant_info">
        <h2>Pet Name: {plant.petName}</h2>
        <h3 className="common__name">Trefle ID: {plant.trefleId}</h3>
        <img src={plant.imageURL} alt={plant.petName}/>
    </section>
)

