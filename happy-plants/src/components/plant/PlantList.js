import React, { useContext, useEffect, useState } from 'react'
import {PlantContext} from "./PlantProvider"
import {PlantCard} from "./PlantCard"

export const PlantList = () => {
    const { getPlantData, plants, getPlantNames, names } = useContext(PlantContext)
    // const { }
    const [ filteredPlants, setFiltered ] = useState([])
    useEffect(() => {
        getPlantData().then(getPlantNames)
    }, [])

    useEffect (()=> {
        console.log(plants)
        // debugger
        const subset = plants.filter(p => p.userId === parseInt(localStorage.getItem("app_user_id")))
        // add logic for filtering matching trefle data table objects
        setFiltered(subset)
        console.log(subset)
    }, [plants])

    return (
        <>
            <h1>Plants</h1>
            <div className="plants">
                {
                    filteredPlants.map(p => {
                        return <PlantCard key={p.id} plant={p} />
                    })
                }
            </div>
        </>
    )
}