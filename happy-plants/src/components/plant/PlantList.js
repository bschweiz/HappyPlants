import React, { useContext, useEffect, useState } from 'react'
import {PlantContext} from "./PlantProvider"
import {PlantCard} from "./PlantCard"
import "./PlantList.css"

// random selector from an array, the Fisher Yates

const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

export const PlantList = (props) => {
    const { plants, getPlantData } = useContext(PlantContext)

    const [ filteredPlants, setFiltered ] = useState([])

    useEffect(() => {
        getPlantData()
    }, [])

    useEffect (()=> {
        const subset = plants.filter(p => p.userId === parseInt(localStorage.getItem("app_user_id")))
        setFiltered(subset)
    }, [plants])

    return (
        <>
        <div className="plant__list">
            <h1>Your Plants</h1>
            <div className="plants">
                {
                    shuffle(filteredPlants).map(p => {
                        return <PlantCard key={p.id} plant={p} props={props} />
                    })
                }
            </div>
        </div>
        </>
    )
}

