import React, { useContext, useState, useEffect } from "react"
import { PlantContext } from "./PlantProvider"

export const EditPlantName = (props) => {
    // get plant data so we can display the pet name
    const { plants, getPlantData, updatePlant } = useContext(PlantContext)
    // component state
    const [plant, setPlant] = useState({})

    // now create function to handle the changes in the form
    const handleControlledInputChange = (evt) => {
        /*
            When changing a state object or array, always create a new one
            and change state instead of modifying current one
        */
        console.log("********handleControlledInputChange Executes***********")
        console.log(evt.target)
        console.log("current state variable plant", plant)

        const newPlant = Object.assign({}, plant)
        console.log("new object that's a copy of plant state variable", newPlant)

        newPlant[evt.target.name] = evt.target.value
        console.log("newPlant after modification", newPlant)

        setPlant(newPlant)
    }

    // create a function that identifies the proper plantId
    const getSelectedPlant = () => {
        // debugger
        const plantId = parseInt(props.match.params.plantId)
        const selectedPlant = plants.find(e => e.id === plantId) || {}
        setPlant(selectedPlant)
    }

    // Get plants and plants from json server when component initializes
    useEffect(() => {
        getPlantData()
    }, [])

    // Once provider state is updated, determine the plant 
    useEffect(() => {
        getSelectedPlant()
    }, [plants])

    const constructEditedPlant = () => {
        updatePlant( plant , {
            petName: plant.petName
        })
            .then(() => props.history.push(`/plants/${plant.id}`))
    }
    return (
        <form className="editPlantPetName">
            <h2 className="editPlantPetName__title">Update your plant's "Pet" Name:</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="petName">Name: </label>
                    <input type="text" name="petName" required autoFocus className="form-control"
                        defaultValue={plant.petName}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <button type="submit"
                onClick={evt => {
                    evt.preventDefault()
                    constructEditedPlant()
                }}
                className="btn btn-primary">
                Save Updates to your Plant
            </button>
        </form>
    )
}