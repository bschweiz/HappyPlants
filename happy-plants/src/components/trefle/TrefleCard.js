import React from "react"


export const TrefleCard = ({plant}) => (
    
    <section className="plant_info">
        <h2>Trefle ID # {plant.id}</h2>
        <h3 className="common__name">{plant.common_name}</h3>
        <div className="scientific__name">{plant.scientific_name}</div>
        <img src={plant.image_url} alt={plant.slug}/>
    </section>
)

