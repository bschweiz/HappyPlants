import React, { useState } from "react"
import { keys } from '../Settings.js'

export const TrefleContext = React.createContext()

const trefleKey = keys.trefleKey

export const TrefleProvider = (props) => {
    const [fuzzyResultArray, setSearchResults] = useState([])

    const getPlantByFuzzy = (fuzzyName) => {
        return fetch(`https://trefle.io/api/v1/plants/search?q=${fuzzyName}&token=${trefleKey}`)
            .then(res => res.json())
            .then(data => {
                setSearchResults(data.data)
                console.log(data)
            })

    }

    return (
        <TrefleContext.Provider value={{
            fuzzyResultArray, getPlantByFuzzy
        }}>
            {props.children}
        </TrefleContext.Provider>
    )
}
