import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { PlantCard } from "../plant/PlantCard"
import { PlantForm } from "../plant/PlantForm"



export const TrefleCard = ({ plant, props }) => {

    
    // const [chosenPlant, setPlant] = useState({})
    
    // const handlePlantSelect = ({ plant }) => {
    //     return <PlantForm 
    //     key={plant.id}
    //         scientificName={plant.scientific_name}
    //         commonName={plant.common_name}
    //         imageURL={plant.image_url}
    //         />
    // }

    // useEffect(() => {
    //     console.log(chosenPlant)
    //     // handlePlantSelect(chosenPlant)
    // }, [chosenPlant])
    
    return (

        <section className="plant_info">
            <Link className="card-link"
                to={{
                    pathname: `/addplant/list/${plant.id}`,
                    state: {chosenPlant: plant}
                }}>
            <h2 className="card-title">Trefle ID # {plant.id}</h2>
            </Link>
            <h3 className="common__name">{plant.common_name}</h3>
            <div className="scientific__name">{plant.scientific_name}</div>
            <img src={plant.image_url} alt={plant.slug} />
            {/* <button
                onClick={evt => {
                    console.log(evt)
                    setPlant({ plant })
                }}
            >select this plant</button> */}
        </section>
    )
}

