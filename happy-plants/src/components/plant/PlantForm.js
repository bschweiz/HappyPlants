import React, { useContext, useRef } from "react"
import {PlantContext} from "./PlantProvider"

export const PlantForm = (props) => {
    // debugger
    const { addTrefleNames, addPlantData } = useContext(PlantContext)

    const petName = useRef(null)
    const commonName = useRef(null)
    const scienceName = useRef(null)

    const constructNewPlant= () => {
        
    console.log(props)
            addPlantData({
                trefleId: parseInt(props.location.state.chosenPlant.id),
                userId: parseInt(localStorage.getItem("app_user_id")),   
                petName: petName.current.value,
                imageURL: props.location.state.chosenPlant.image_url
            })
            .then(addTrefleNames({
                id: parseInt(props.location.state.chosenPlant.id),
                commonName: commonName.current.value,
                scientificName:  props.location.state.chosenPlant.scientific_name         
            }))
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
            {/* add logic to check if chosenPlant.common_name exists, if it does don't render the field below */}
            <fieldset>
                <div className="form-group">
                    <label htmlFor="plantCommonName">Common plant name (from/to Trefle): </label>
                    <input type="text" id="plantCommonName" ref={commonName} required autoFocus className="form-control" 
                    placeholder="No common name found, please enter" 
                    defaultValue={props.location.state.chosenPlant.common_name}
                    />
                </div>
            </fieldset>
            {/* <fieldset>
                <div className="form-group">
                    <label htmlFor="plantScientificName">Scientific name (from/to Trefle): </label>
                    <input type="text" id="plantScientificName" ref={scienceName} required autoFocus className="form-control" 
                    placeholder="Plant scientific name" 
                    defaultValue={props.location.state.chosenPlant.scientific_name}
                    />
                </div>
            </fieldset> */}
            {/* <fieldset>
                <div className="form-group">
                    <label htmlFor="plantTrefleId">Trefle ID: </label>
                    <input type="text" id="plantTrefleId" ref={TrefleId} required autoFocus className="form-control" 
                    placeholder="trefle ID goes here" 
                    defaultValue={props.location.state.id}
                    />
                </div>
            </fieldset> */}
            
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

