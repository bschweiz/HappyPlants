import React, { useContext, useRef, useState, useEffect } from "react"
import { PlantContext } from "../plant/PlantProvider"
import { EventContext } from "./EventProvider"


export const EventForm = (props) => {
    const { addEvent } = useContext(EventContext)
    const { plants, getPlantData } = useContext(PlantContext)

    const [ filteredPlants, setFiltered ] = useState([])
    
    useEffect(() => {
        getPlantData()
    }, [])

    useEffect (()=> {
        const subset = plants.filter(p => p.userId === parseInt(localStorage.getItem("app_user_id")))
        setFiltered(subset)
    }, [plants])


    const date = useRef(null)
    const careNote = useRef(null)
    const plant = useRef(null)
    let waterStatus = false
    let completeStatus = false

    const constructNewEvent = () => {

        const note= careNote.current.value
        addEvent({
            plantId: parseInt(plant.current.value),
            date: date.current.value,
            water: waterStatus,
            complete: completeStatus,
            note,
        })
            .then(() => props.history.push("/events"))
    }

    const waterControl = (evt) => {
        return waterStatus = evt.target.checked
    }
    const completedControl = (evt) => {
        return completeStatus = evt.target.checked
    }
    
    return (
        <form className="plantForm">
            <h2 className="plantForm__title">New Event</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="plantName">Plant Id for the event: </label>
                    <select required
                        defaultValue=""
                        name="plantName"
                        ref={plant}
                        id="plantPetName"
                        className="form-control"
                        >
                            <option value="0">Select a Plant to check on </option>
                            {filteredPlants.map((p) => (
                                <option key={p.id} value={p.id}>{p.petName}</option>
                            ))}
                        </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="plantCommonName">Date for the event:</label>
                    <input type="date" id="plantCommonName" ref={date} required autoFocus className="form-control" placeholder="Event Date" />
                </div>
            </fieldset>
            <fieldset>
                <div className="watering-checkbox">
                    <label htmlFor="waterQuery">Watering?  </label>
                    <input type="checkbox" id="waterSelect" autoFocus className="form-control"
                        onChange={evt => {
                            waterControl(evt)
                        }} />
                </div>

            </fieldset>
            <fieldset>
                <div className="watering-checkbox">
                    <label htmlFor="completedQuery">Completed? </label>
                    <input type="checkbox" id="completeSelect" autoFocus className="form-control"
                        onChange={evt => {
                            completedControl(evt)
                        }} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="plantcareNote">Notes:</label>
                    <input type="text" id="plantcareNote" ref={careNote} required autoFocus className="form-control" placeholder="some notes..." />
                </div>
            </fieldset>

            <button type="submit"
                onClick={evt => {
                    evt.preventDefault() // Prevent browser from submitting the form
                    constructNewEvent()
                }}
                className="btn btn-primary">
                Save Event
            </button>
        </form>
    )
}

