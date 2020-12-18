import React, { useContext, useRef, useState, useEffect } from "react"
import { PlantContext } from "../plant/PlantProvider"
import { EventContext } from "./EventProvider"


export const EditEventForm = (props) => {
    const { addEvent, events, getEvents, updateEvent } = useContext(EventContext)
    const { plants, getPlantData } = useContext(PlantContext)

    const [filteredPlants, setFiltered] = useState([])
    const [event, setEvent] = useState({})

    // check for URL parameter
    const editMode = props.match.params.hasOwnProperty("eventId")

    const handleControlledInputChange = evt => {
        console.log(evt.target)
        console.log("current state variable event", event)
        const newEvent = Object.assign({}, event)
        console.log("current state variable ", newEvent);
        newEvent[evt.target.name] = evt.target.value;
        console.log("newEvent after modification", newEvent);

        setEvent(newEvent)
    }

    const getEventInEditMode = () => {
        if (editMode) {
            const eventId = parseInt(props.match.params.eventId)
            const selectedEvent = events.find(e => e.id === eventId) || {}
            setEvent(selectedEvent)
        }
    }

    useEffect(() => {
        getPlantData()
        getEvents()
    }, [])

    useEffect(() => {
        const subset = plants.filter(p => p.userId === parseInt(localStorage.getItem("app_user_id")))
        setFiltered(subset)
    }, [plants])

    useEffect(() => {
        getEventInEditMode()
    }, [events])

    const date = useRef(null)
    const careNote = useRef(null)
    const plant = useRef(null)
    let waterStatus = false
    let completeStatus = false

    const constructNewEvent = () => {
        const eventId = parseInt(event.eventId)

        if (eventId === 0) {
            window.alert("please choose a plant")
        } else {
            if (editMode) {
                updateEvent({
                    id: event.id,
                    plantId: event.plantId,
                    date: event.date,
                    water: waterStatus,
                    complete: completeStatus,
                    notes: event.notes
                })
                    .then(() => props.history.push("/events"))
            } else {
                addEvent({
                    plantId: event.plantId,
                    date: event.date,
                    water: waterStatus,
                    complete: completeStatus,
                    notes: event.notes
                })
                    .then(() => props.history.push("/events"))
            }
        }
    }
    const waterControl = (evt) => {
        return waterStatus = evt.target.checked
    }
    const completedControl = (evt) => {
        return completeStatus = evt.target.checked
    }

    return (
        <form className="plantForm">
            <h2 className="plantForm__title">{editMode ? "Update Care Event" : "Create New Care Event"}</h2>
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

