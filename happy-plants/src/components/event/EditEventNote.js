import React, { useContext, useState, useEffect } from "react"
import { PlantContext } from "../plant/PlantProvider"
import { EventContext } from "./EventProvider"

export const EditEventNote = (props) => {
    // get plant data so we can display the pet name
    const { plants, getPlantData } = useContext(PlantContext)
    // get the functions and variables we need for manipulating event data
    const { events, getEvents, updateEvent } = useContext(EventContext)
    // component state
    const [event, setEvent] = useState({})

    // now create function to handle the changes in the form
    const handleControlledInputChange = (evt) => {
        /*
            When changing a state object or array, always create a new one
            and change state instead of modifying current one
        */
        console.log("********handleControlledInputChange Executes***********")
        console.log(evt.target)
        console.log("current state variable event", event)

        const newEvent = Object.assign({}, event)
        console.log("new object that's a copy of event state variable", newEvent)

        newEvent[evt.target.name] = evt.target.value
        console.log("newEvent after modification", newEvent)

        setEvent(newEvent)
    }

    // create a function that identifies the proper eventId
    const getSelectedEvent = () => {
        // debugger
        const eventId = parseInt(props.match.params.eventId)
        const selectedEvent = events.find(e => e.id === eventId) || {}
        setEvent(selectedEvent)
    }

    // Get plants and eventsfrom json server when component initializes
    useEffect(() => {
        getPlantData()
        getEvents()
    }, [])

    // Once provider state is updated, determine the event 
    useEffect(() => {
        getSelectedEvent()
    }, [events])

    const constructEditedEvent = () => {


        updateEvent( event , {
            note: event.note
        })
            .then(() => props.history.push("/events"))
    }
    return (
        <form className="editEventNote">
            <h2 className="editEventNote__title">Update your care note:</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="note">Note: </label>
                    <input type="text" name="note" required autoFocus className="form-control"
                        defaultValue={event.note}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <button type="submit"
                onClick={evt => {
                    evt.preventDefault()
                    constructEditedEvent()
                }}
                className="btn btn-primary">
                Save Updates to Note
            </button>
        </form>
    )
}