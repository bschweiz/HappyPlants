import React, { useContext } from "react"
import { EventContext } from "../event/EventProvider"

export const EventDetail = (props) => {
    // debugger
    const { releaseEvent, getEvents, events } = useContext(EventContext)
    return (<section className="event">
        <h3 className="event__date"> Date of Care Event: {props.location.state.chosenEvent.date}</h3>
        <h4 className="event__petName"> Checking On: {props.location.state.chosenPlant.petName}</h4>
        <h5 className="event__water">Is this a watering?</h5>
        <div>
            {props.location.state.chosenEvent.water ? "Yes, check to make sure soil is dry" : "No, should not need watering, but check in-case"}
        </div>
        <h5 className="event__complete">Completed?</h5>
        <div>
            {props.location.state.chosenEvent.complete ? "Yep" : "Nope"}
        </div>
        <h5 className="event_notes">Notes:</h5>
        <p>{props.location.state.chosenEvent.notes}</p>
        <button>Edit Event</button>
        <button className="btn--delete--Event"
            onClick={
                () => {
                    releaseEvent(props.location.state.chosenEvent.id)
                        .then(() => {
                            props.history.push("/events")
                        })
                }
            }>Delete Event</button>

    </section>
    )
}