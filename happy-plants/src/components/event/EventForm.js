import React, { useContext, useRef } from "react"
// import {TrefleContext} from "./trefle/TrefleProvider"
import { EventContext } from "./EventProvider"

export const EventForm = (props) => {
    const { addEvent } = useContext(EventContext)

    const plantId = useRef(null)
    const date = useRef(null)
    const waterYes = useRef(null)
    const waterNo = useRef(null)
    const completedYes = useRef(null)
    const completedNo = useRef(null)
    const careNote = useRef(null)

    const constructNewEvent = () => {

        const completeStatus = completedYes.current.value ? true : false;
        const waterStatus = waterYes.current.value ? true : false;
        console.log(completeStatus)
        console.log(waterStatus)
        // const plantId = parseInt(plantId.current.value)
        // const date = date.current.value
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
                <label htmlFor="plantCommonName">Watering?  </label>
            
                    <div className="watering-buttons">
                        <label htmlFor="wateringYes">
                            Yes
                    <input type="radio" id="waterYes" ref={waterYes} required className="form-control" autoFocus />
                        </label>
                        <label htmlFor="wateringNo">No
                    <input type="radio" id="waterNO" ref={waterNo} required className="form-control" autoFocus />
                        </label>
                    </div>
                
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="plantcomplete">Completed?</label>

                    <div className="watering-buttons">
                        <label htmlFor="completedYes">
                            Yes
                    <input type="radio" id="completeYes" ref={completedYes} required className="form-control" autoFocus />
                        </label>
                        <label htmlFor="copmletedNo">No
                    <input type="radio" id="completNO" ref={completedNo} required className="form-control" autoFocus />
                        </label>
                    </div>

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

