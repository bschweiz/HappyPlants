import React, { useState } from "react"
import { keys } from '../Settings.js'

export const TrefleContext = React.createContext()

const trefleKey = keys.trefleKey

export const TrefleProvider = (props) => {
    const [fuzzyResultArray, setSearchResults] = useState([])
    const [singlePlant, setSinglePlant] = useState([])

    const getPlantByFuzzy = (fuzzyName) => {
        if (fuzzyName) {
        return fetch(`https://trefle.io/api/v1/plants/search?q=${fuzzyName}&token=${trefleKey}`)
            .then(res => res.json())
            .then(data => {
                setSearchResults(data.data)
                console.log(data)
            })
        } else {return}

    }
    const getPlantById = (id) => {
        if (id) {
        return fetch(`https://trefle.io/api/v1/plants/?${id}&token=${trefleKey}`)
            .then(res => res.json())
            .then(dat => {
                setSinglePlant(dat.data)
                console.log(dat.data)
            })
        } else {return}

    }

    

    return (
        <TrefleContext.Provider value={{
            fuzzyResultArray, getPlantByFuzzy, singlePlant, getPlantById
        }}>
            {props.children}
        </TrefleContext.Provider>
    )
}
