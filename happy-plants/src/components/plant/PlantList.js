import React, { useContext, useEffect, useState } from 'react'
import {PlantContext} from "./PlantProvider"
import {PlantCard} from "./PlantCard"

export const PlantList = () => {
    const { getPlantData, plants } = useContext(PlantContext)
    // const { }
    const [ filteredPlants, setFiltered ] = useState([])

    useEffect(() => {
        getPlantData()
    }, [])

    useEffect (()=> {

        const subset = plants.filter(p => p.userId === parseInt(localStorage.getItem("app_user_id")))
        // const namedSubset = subset.map(p => {

        //     const match = names.find(n => n.id === p.trefleId)
            
        //     const updatedPlant = {
        //         ...p,
        //         commonName: match.commonName,
        //         scientificName: match.scientificName,

        //     }
        //     return updatedPlant

        // })
        // console.log(namedSubset)
        setFiltered(subset)


        // add logic for filtering matching trefle data table objects
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