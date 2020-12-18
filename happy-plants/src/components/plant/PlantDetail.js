import React, { useContext, useEffect, useState } from "react"
import { PlantContext } from "../plant/PlantProvider"
import { TrefleContext } from "../trefle/TrefleProvider"
import { EventContext } from "../event/EventProvider"
import { EventCard } from "../event/EventCard"


export const PlantDetail = (props) => {
    // debugger
    const { releasePlant } = useContext(PlantContext)
    const { singlePlant, getPlantById } = useContext(TrefleContext)
    const { events, getEvents } = useContext(EventContext)

    const [relatedEvents, setEvents] = useState([])

    const id = props.location.state.chosenPlant.trefleId

    useEffect(() => {
        getPlantById(id)
        .then(getEvents)
    }, [])
// debugger
useEffect(() => {
    if (events.length == 0) return 
    console.log(" events", events)
    const matching = events.filter(e => e.plantId === props.location.state.chosenPlant.id)
    setEvents(matching)
    console.log("related events", matching)
    }, [events])

    // if (relatedEvents.length) {
        return (
            <>
            <section className="plant">
                <h2 className="plant__name">{props.location.state.chosenPlant.petName}</h2>
                <img src={props.location.state.chosenPlant.imageURL} alt={props.location.state.chosenPlant.petName} />
                <h3 className="trefleId">Trefle ID: {props.location.state.chosenPlant.trefleId}</h3>
                {/* <button className="btn--edit--Plant">Edit Plant</button> */}
                <button className="btn--delete--Plant"
                    onClick={
                        () => {
                            releasePlant(props.location.state.chosenPlant.id)
                                .then(() => {
                                    props.history.push("/plants")
                                })
                        }
                    }>Delete Plant</button>
                <h3>{singlePlant.slug}</h3>
            </section>
            <section className="events">
                {
                    relatedEvents.map(event => {
                        return <EventCard key={event.id} event={event} props={props} />
                    })
                }
            </section>
        </>
    )
// } else {return <div></div>}
}