import React, { useState } from "react"
import { keys } from '../Settings.js'

// export const PlantContext = React.createContext()

const trefleKey = keys.trefleKey
let fuzzyName = "aloe"
console.log(trefleKey)

export const TrefleProvider = (props) => {

    const getPlantByFuzzy = (fuzzyName) => {
        return fetch(`https://trefle.io/api/v1/plants/search?q=${fuzzyName}&token=${trefleKey}`)
            .then(res => res.json())
    }

    getPlantByFuzzy(fuzzyName)
    return <div></div>
}
