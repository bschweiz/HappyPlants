import React, { useEffect, useState, useContext } from "react"
import {PlantContext} from "./PlantProvider"

export const PlantCard = ({plant}) => {
    const { getPlantData, plants, names, getPlantNames } = useContext(PlantContext)


    return (
    <section className="plant_info">
        <h2>Pet Name: {plant.petName}</h2>
        <h3 className="common__name">Trefle ID: {plant.trefleId}</h3>
        <img src={plant.imageURL} alt={plant.petName}/>

    </section>
    )
}

