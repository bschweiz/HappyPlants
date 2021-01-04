import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import "../plant/PlantCard.css"



export const TrefleCard = ({ plant }) => {

    
    
    return (

        <section className="plant__info">
            <Link className="card-link"
                to={{
                    pathname: `/addplant/list/${plant.id}`,
                    state: {chosenPlant: plant}
                }}>
            <h2 className="card-title">Choose This Plant</h2>
            </Link>
            <h3 className="common__name">{plant.common_name}</h3>
            <div className="scientific__name">{plant.scientific_name}</div>
            <img src={plant.image_url} alt={plant.slug} />
            
        </section>
    )
}

