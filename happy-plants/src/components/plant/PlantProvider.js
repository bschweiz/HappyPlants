import React, { useState } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
export const PlantContext = React.createContext()

/*
 This component establishes what data can be used.
 */
export const PlantProvider = (props) => {
    const [plants, setPlants] = useState([])
    const [names, setNames] = useState([])
    const [plant, setPlant] =useState({})
    const [ chosenPlant, setChosenPlant ] = useState({})


    const getPlantData = () => {
        return fetch("http://localhost:8088/plants")
            .then(res => res.json())
            .then(setPlants)
    }

    const getPlantDataById = (id) => {
        return fetch(`http://localhost:8088/plants/${id}`)
            .then(res => res.json())
            .then(setPlant)
    }

    const addPlantData= plant => {
        return fetch("http://localhost:8088/plants", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(plant)
        })
            .then(getPlantData)
    }

    const releasePlant = id => {
        return fetch(`http://localhost:8088/plants/${id}`, {
            method: "DELETE"
        })
            .then(getPlantData)
    }

    const updatePlant = (plant, plantObj) => {
        return fetch(`http://localhost:8088/plants/${plant.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(plantObj)
        })
        .then(getPlantData)
    }

    const getPlantNames = () => {
        return fetch(`http://localhost:8088/trefles`)
        .then(res => res.json())
        .then(setNames)
    }

    const addTrefleNames = nameSet => {
        return fetch("http://localhost:8088/trefles", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(nameSet)
        })
            .then(getPlantNames)
    }
    
    return (
        <PlantContext.Provider value={{
            plants, addPlantData, getPlantData, releasePlant, updatePlant, getPlantNames, names, addTrefleNames, plant, getPlantDataById, chosenPlant, setChosenPlant
        }}>
            {props.children}
        </PlantContext.Provider>
    )
}