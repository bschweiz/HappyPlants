import React, { useContext, useRef, useEffect } from "react"
// import {TrefleContext} from "./trefle/TrefleProvider"
import {PlantContext} from "./PlantProvider"

export const PlantForm = (props) => {
    const { addPlant } = useContext(PlantContext)

    const petName = useRef(null)
    const commonName = useRef(null)
    // const scienceName = useRef(null)

    const constructNewPlant= () => {
        
        // const scientificName = scienceName.current.value
    
            addPlant({
                petName: petName.current.value,
                commonName: commonName.current.value,
                // scientificName,
                userId: parseInt(localStorage.getItem("app_user_id"))   
            })
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
                    <label htmlFor="plantCommonName">Common plant name: </label>
                    <input type="text" id="plantCommonName" ref={commonName} required autoFocus className="form-control" placeholder="Plant common name" />
                </div>
            </fieldset>
            {/* <fieldset>
                <div className="form-group">
                    <label htmlFor="plantScientificName">Scientific name: </label>
                    <input type="text" id="plantScientificName" ref={scientificName} required autoFocus className="form-control" placeholder="Plant scientific name" />
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

