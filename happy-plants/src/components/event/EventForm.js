import React, { useContext, useRef, useState } from "react"
// import {TrefleContext} from "./trefle/TrefleProvider"
import { EventContext } from "./EventProvider"

export const EventForm = (props) => {
    const { addEvent } = useContext(EventContext)

    const plantId = useRef(null)
    const date = useRef(null)
    const careNote = useRef(null)
    let waterStatus = false
    let completeStatus = false

    const constructNewEvent = () => {

        const notes = careNote.current.value
        addEvent({
            plantId: parseInt(plantId.current.value),
            date: date.current.value,
            water: waterStatus,
            complete: completeStatus,
            notes,
        })
            .then(() => props.history.push("/events"))
    }

    const waterControl = (evt) => {
        console.log(evt)
        return waterStatus = evt.target.checked
    }
    const completedControl = (evt) => {
        console.log(evt)
        return completeStatus = evt.target.checked
    }

    return (
        <form className="plantForm">
            <h2 className="plantForm__title">New Event</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="plantName">Plant Id for the event: </label>
                    <input type="text" id="plantName" ref={plantId} required autoFocus className="form-control" placeholder="Pet plant ID" />
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

