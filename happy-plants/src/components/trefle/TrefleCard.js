import React, { useEffect, useState } from "react"


export const TrefleCard = ({plant, props}) => {
    const [chosenPlant, setPlant] = useState({})
    useEffect(() =>{
        console.log(chosenPlant)
    },[chosenPlant])
    return (  
    
    <section className="plant_info">
        <h2>Trefle ID # {plant.id}</h2>
        <h3 className="common__name">{plant.common_name}</h3>
        <div className="scientific__name">{plant.scientific_name}</div>
        <img src={plant.image_url} alt={plant.slug}/>
        <button
        onClick={evt=>{
            console.log(evt)
            setPlant({
                
            })
        }
        }
        >select this plant</button> 
    </section>
    )
}

