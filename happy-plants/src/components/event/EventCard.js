import React, { useContext, useEffect } from "react"
import {EventContext} from "./EventProvider"



export const EventCard = ( {event, props} ) => {

    const { releaseEvent, events, getEvents } = useContext(EventContext)
// debugger
    useEffect(() => {
        getEvents()
    }, [])

    return (

    <section className="event">
        <h3 className="event__date"> Date of Care Event: {event.date}</h3>
        <div className="event__water">Is this a watering?</div>
        <div>
            {event.water ? "Yes, check to make sure soil is dry" : "No, should not need watering, but check in-case"}
        </div>
        <div className="event_notes">{event.notes}</div>
        <button>Edit Event</button>
        <button className="btn--delete--Event"
                    onClick={
                        () => {
                            releaseEvent(event.id)
                                .then(() => {
                                    props.history.push("/events")
                                })
                        }
                    }>Delete Event</button>
    </section>
    )
}