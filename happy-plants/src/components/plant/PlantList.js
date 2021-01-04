import React, { useContext, useEffect, useState } from 'react'
import {PlantContext} from "./PlantProvider"
import {PlantCard} from "./PlantCard"
import "./PlantList.css"

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
                    filteredPlants.map(p => {
                        return <PlantCard key={p.id} plant={p} props={props} />
                    })
                }
            </div>
        </div>
        </>
    )
}