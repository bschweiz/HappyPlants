import React, { useContext, useEffect, useState } from "react"
import { PlantContext } from "../plant/PlantProvider"
import { TrefleContext } from "../trefle/TrefleProvider"
import { EventContext } from "../event/EventProvider"
import { EventCard } from "../event/EventCard"

const sortedAttempt = (events) => {
    let sorted = events.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    return sorted
}

export const PlantDetail = (props) => {
    // debugger
    const { releasePlant } = useContext(PlantContext)
    const { singlePlant, getPlantById } = useContext(TrefleContext)
    const { events, getEvents } = useContext(EventContext)

    const [relatedEvents, setEvents] = useState([])
// debugger
//     if (props.location.state.chosenPlant.trefleId) {
//         const trefleId = props.location.state.chosenPlant.trefleId
//         // this is trying to handle navigating to this page via editPlantName module
//     } else {const trefleId = props.match.params.plantId}

    useEffect(() => {
        getPlantById(props.location.state.chosenPlant.trefleId)
            .then(getEvents)
    }, [])
    // debugger
    useEffect(() => {
        if (events.length == 0) return
        console.log(" events", events)
        const matching = (events.filter(e => e.plantId === props.location.state.chosenPlant.id)).sort((a, b) => b.date - a.date)
        setEvents(matching)
        console.log("related events", matching)
    }, [events])

    return (
        <>
            <section className="plant">
                <h2 className="plant__name">{props.location.state.chosenPlant.petName}</h2>
                <img src={props.location.state.chosenPlant.imageURL} alt={props.location.state.chosenPlant.petName} />
                <h3 className="trefleId">Trefle ID: {props.location.state.chosenPlant.trefleId}</h3>
                <h3>{singlePlant.slug}</h3>
            </section>
            <section className="events">
                {
                    sortedAttempt(relatedEvents).map(event => {
                        return <EventCard key={event.id} event={event} props={props} />
                    })
                }
            </section>
            <button className="btn--edit--Plant"
            onClick={() => {
                props.history.push(`/plants/edit/${props.location.state.chosenPlant.id}`)}}
            >Edit Plant's "Pet" Name
            </button>
            <button className="btn--delete--Plant"
                onClick={
                    () => {
                        releasePlant(props.location.state.chosenPlant.id)
                            .then(() => {
                                props.history.push("/plants")
                            })
                    }
                }>Delete Plant</button>
        </>
    )

}