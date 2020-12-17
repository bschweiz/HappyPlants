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
                        state: { chosenEvent: event, chosenPlant: matchingPlant }
                    }}>
                    <h4 className="event__date"> Date of Care Event: {event.date}</h4>
                </Link>
                    <h4 className="event__petName"> Checking on {matchingPlant.petName}</h4>
            </section>
        )
    }
}