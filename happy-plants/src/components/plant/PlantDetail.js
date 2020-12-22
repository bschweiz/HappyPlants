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

    const { plant, releasePlant, getPlantDataById } = useContext(PlantContext)
    const { singlePlant, getPlantById } = useContext(TrefleContext)
    const { events, getEvents } = useContext(EventContext)

    const [relatedEvents, setEvents] = useState([])

    useEffect(() => {
        getPlantDataById(props.match.params.plantId)
    }, [])

    useEffect(() => {
        if (plant.trefleId) {
        getPlantById(plant.trefleId)}
        getEvents()
    }, [plant])

    useEffect(() => {
        if (events.length == 0) return
        const matching = (events.filter(e => e.plantId === plant.id)).sort((a, b) => b.date - a.date)
        setEvents(matching)
    }, [events])

    return (
        <>
            <section className="plant">
                <h2 className="plant__name">{plant.petName}</h2>
                <img src={plant.imageURL} alt={plant.petName}/>
                <h3 className="trefleId">Trefle ID: {plant.trefleId}</h3>
                <h3>{singlePlant.slug}</h3>
                <h3>{singlePlant.common_name}</h3>
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
                    props.history.push(`/plants/edit/${plant.id}`)
                }}
            >Edit Plant's "Pet" Name
            </button>
            <button className="btn--delete--Plant"
                onClick={
                    () => {
                        releasePlant(plant.id)
                            .then(() => {
                                props.history.push("/plants")
                            })
                    }
                }>Delete Plant</button>
        </>
    )

}