import React, { useContext, useRef } from "react"
import {PlantContext} from "./PlantProvider"

export const PlantForm = (props) => {
    // debugger
    const { addTrefleNames, addPlantData } = useContext(PlantContext)

    const petName = useRef(null)

    const constructNewPlant= () => {
        
    // console.log(props)
            addPlantData({
                trefleId: parseInt(props.location.state.chosenPlant.id),
                userId: parseInt(localStorage.getItem("app_user_id")),   
                petName: petName.current.value,
                imageURL: props.location.state.chosenPlant.image_url
            })
            // .then(addTrefleNames({
            //     id: parseInt(props.location.state.chosenPlant.id),
            //     commonName: props.location.state.chosenPlant.common_name,
            //     scientificName:  props.location.state.chosenPlant.scientific_name         
            // }))
            .then(() => props.history.push("/plants"))
        }
    
    return (
        <form className="plantForm">
            <h2 className="plantForm__title">New Plant</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="plantName">"Pet" name for your plant: </label>
                    <input type="text" id="plantName" ref={petName} required autoFocus className="form-control" 
                    placeholder="Pet plant name" 
                    />
                </div>
            </fieldset>
            
            <button type="submit"
                onClick={evt => {
                    evt.preventDefault() // Prevent browser from submitting the form
                    constructNewPlant()
                }}
                className="btn btn-primary">
                Save Plant
            </button>
        </form>
    )
}

