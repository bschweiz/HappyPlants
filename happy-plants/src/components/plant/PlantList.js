import React, { useContext, useEffect, useState } from 'react'
import {PlantContext} from "./PlantProvider"
import {PlantCard} from "./PlantCard"

export const PlantList = ({history}) => {
    const { getPlants, plants } = useContext(PlantContext)
    const [ filteredPlants, setFiltered ] = useState([])
    useEffect(() => {
        getPlants()
    }, [])

    useEffect (()=> {
        console.log(plants)
        const subset = plants.filter(p => p.userId === parseInt(localStorage.getItem("app_user_id")))
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