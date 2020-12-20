import React, { useContext, useRef, useState, useEffect } from "react"
// import { PlantContext } from "../plant/PlantProvider"
import { EventContext } from "./EventProvider"


export const EditEventForm = (props) => {
    const { addEvent, events, getEvents, updateEvent, updateCompleted } = useContext(EventContext)
    // const { plants, getPlantData } = useContext(PlantContext)

    // const [filteredPlants, setFiltered] = useState([])
    const [event, setEvent] = useState({})

    // check for URL parameter
    const editMode = props.match.params.hasOwnProperty("eventId")

    const handleControlledInputChange = evt => {
        console.log(evt.target)
        console.log("current state variable event", evt)
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
            console.log("just read THIS event:", event)
        }
    }

    useEffect(() => {
        // getPlantData()
        getEvents()
    }, [])

    // useEffect(() => {
    //     const subset = plants.filter(p => p.userId === parseInt(localStorage.getItem("app_user_id")))
    //     setFiltered(subset)
    // }, [plants])

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

    
            if (editMode) {
                updateEvent({
                    id: event.id,
                    plantId: event.plantId,
                    date: event.date,
                    water: event.water,
                    complete: event.complete,
                    notes: event.notes
                })
                    .then(() => props.history.push("/events"))
            } else {return}
    }
    const waterControl = (evt) => {
        if (evt.target.checked === true) {
            updateCompleted(parseInt(props.match.params.eventId), { water: false })
        } else {
            updateCompleted(parseInt(props.match.params.eventId), { water: true })
        }
    }
    const completedControl = (evt) => {
        if (evt.target.checked === true) {
            updateCompleted(parseInt(props.match.params.eventId), { complete: true })
        } else {
            updateCompleted(parseInt(props.match.params.eventId), { complete: false })
        }
    }

    // const checkboxControl = (evt) => {
    //     if(evt.target.checked === true){
    //         updateCompleted(parseInt(event.id), {complete: true})
    //     } else {
    //         updateCompleted(parseInt(event.id), {complete: false})
    //     }
    // }

    return (
        <form className="plantForm">
            <h2 className="plantForm__title">{editMode ? "Update Care Event for " : "Create New Care Event"}</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="plantCommonName">Date for the event:</label>
                    <input type="date" id="plantCommonName" ref={date} required autoFocus className="form-control"
                        onChange={handleControlledInputChange}
                        value={event.date}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="watering-checkbox">
                    <label htmlFor="waterQuery">Watering?  </label>
                    <input type="checkbox" id="waterSelect" autoFocus className="form-control"
                        onChange={evt=> waterControl(evt)}
                        // checked={event.water ? "checked" : ""}
                        value={event.water}
                        />
                </div>

            </fieldset>
            <fieldset>
                <div className="watering-checkbox">
                    <label htmlFor="completedQuery">Completed? </label>
                    <input type="checkbox" id="completeSelect" autoFocus className="form-control"
                        // checked={event.complete ? "checked" : ""}
                        onChange={handleControlledInputChange}
                        defaultValue={event.complete}/>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="plantcareNote">Notes:</label>
                    <input type="text" id="plantcareNote" ref={careNote} required autoFocus className="form-control" placeholder="some notes..."
                        onChange={handleControlledInputChange}
                        defaultValue={event.notes}
                    />
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

