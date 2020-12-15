import React, { useContext, useEffect, useState } from 'react'
import {PlantContext} from "./PlantProvider"
import {PlantCard} from "./PlantCard"

export const PlantList = (props) => {
    const { getPlantData, plants } = useContext(PlantContext)
    // const { }
    const [ filteredPlants, setFiltered ] = useState([])

    useEffect(() => {
        getPlantData()
    }, [])

    useEffect (()=> {

        const subset = plants.filter(p => p.userId === parseInt(localStorage.getItem("app_user_id")))
        setFiltered(subset)


        // add logic for filtering matching trefle data table objects
    }, [plants])

    return (
        <>
            <h1>Plants</h1>
            <div className="plants">
                {
                    filteredPlants.map(p => {
                        return <PlantCard key={p.id} plant={p} props={props}/>
                    })
                }
            </div>
        </>
    )
}