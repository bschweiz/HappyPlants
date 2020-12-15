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

    const getPlantData = () => {
        return fetch("http://localhost:8088/plants")
            .then(res => res.json())
            .then(setPlants)
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
    /*
        You return a context provider which has the
        `customers` state, the `addPlant` function,
        and the `getPlant` function as keys. This
        allows any child elements to access them.
    */
    return (
        <PlantContext.Provider value={{
            plants, addPlantData, getPlantData, releasePlant, getPlantNames, names, addTrefleNames
        }}>
            {props.children}
        </PlantContext.Provider>
    )
}