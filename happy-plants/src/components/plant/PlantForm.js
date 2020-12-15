import React, { useContext, useRef } from "react"
import {PlantContext} from "./PlantProvider"

export const PlantForm = ({props}) => {
    const { addTrefleNames, addPlantData } = useContext(PlantContext)

    const petName = useRef(null)
    const imageURL = useRef(null)
    const TrefleId = useRef(null)
    const commonName = useRef(null)
    const scienceName = useRef(null)

    const constructNewPlant= () => {
        
    console.log(props)
            addPlantData({
                trefleId: parseInt(TrefleId.current.value),
                userId: parseInt(localStorage.getItem("app_user_id")),   
                petName: petName.current.value,
                imageURL: imageURL.current.value
            })
            .then(addTrefleNames({
                id: parseInt(TrefleId.current.value),
                commonName: commonName.current.value,
                scientificName:  scienceName.current.value         
            }))
            .then(() => props.history.push("/plants"))
        }
    return (
        <form className="plantForm">
            <h2 className="plantForm__title">New Plant</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="plantName">"Pet" name for your plant: </label>
                    <input type="text" id="plantName" ref={petName} required autoFocus className="form-control" placeholder="Pet plant name" />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="plantCommonName">Common plant name (from/to Trefle): </label>
                    <input type="text" id="plantCommonName" ref={commonName} required autoFocus className="form-control" placeholder="Plant common name" />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="plantScientificName">Scientific name (from/to Trefle): </label>
                    <input type="text" id="plantScientificName" ref={scienceName} required autoFocus className="form-control" placeholder="Plant scientific name" />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="plantimageURL">Image (from Trefle, to Plant): </label>
                    <input type="text" id="plantimageURL" ref={imageURL} required autoFocus className="form-control" placeholder="image URL goes here" />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="plantTrefleId">Trefle ID: </label>
                    <input type="text" id="plantTrefleId" ref={TrefleId} required autoFocus className="form-control" placeholder="trefle ID goes here" />
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

