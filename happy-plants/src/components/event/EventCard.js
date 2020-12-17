import React, { useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import { EventContext } from "./EventProvider"
import { PlantContext } from "../plant/PlantProvider"



export const EventCard = ({ event, props }) => {

    const { plants, getPlants } = useContext(PlantContext)
    const { releaseEvent, getEvents } = useContext(EventContext)
    // debugger
    useEffect(() => {
        getEvents().then(getPlants)
    }, [])

    const matchingPlant = plants.find(p => p.id === event.plantId)
    if (matchingPlant == null) { return <div></div> } else {
        return (

            <section className="event_info">
                <Link className="card-link"
                    to={{
                        pathname: `/events/${event.id}`,
                        state: { chosenEvent: event }
                    }}>
                    <h2>{event.date}</h2>
                </Link>
                <h3 className="event__date"> Date of Care Event: {event.date}</h3>
                <h4 className="event__petName"> Checking on {matchingPlant.petName}</h4>
                <h5 className="event__water">Is this a watering?</h5>
                <div>
                    {event.water ? "Yes, check to make sure soil is dry" : "No, should not need watering, but check in-case"}
                </div>
                <h5 className="event_notes">Notes:</h5>
                <p>{event.notes}</p>
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
}