import React, { useState } from "react"
import { keys } from '../Settings.js'

// export const PlantContext = React.createContext()

const trefleKey = keys.trefleKey
console.log(trefleKey)

export const TrefleProvider = (props) => {

    const getPlantById = () => {
        return fetch(`https://trefle.io/api/v1/plants?token=${trefleKey}`)
            .then(res => res.json())
    }

    getPlantById()
    return <div></div>
}
