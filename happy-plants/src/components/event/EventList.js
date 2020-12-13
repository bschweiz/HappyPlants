import React, { useContext, useEffect, useState } from 'react'
import { EventContext } from "./EventProvider"
import { PlantContext}  from "../plant/PlantProvider"
import { EventCard } from './EventCard'

export const EventList = () => {
    const { getPlantData, plants } = useContext(PlantContext)
    const { getEvents, events } = useContext(EventContext)
    const [ filteredEvents, setFilteredEvents ] = useState([])
    
    useEffect(() => {
        getEvents().then(getPlantData)
    }, [])
    
    useEffect (()=> {
        const userPlants = plants.filter(p => p.userId === parseInt(localStorage.getItem("app_user_id")))
        console.log("user plants", userPlants)
        const subsetEvents = events.map(e => {userPlants.find(p => p.id === e.plantId)})
        // const subsetEvents = events.filter(e => { e.plantId === p.id})
        //     const matchEvent = userPlants.find(p => p.id === e.plantId)
        //     return matchEvent
        console.log("subset Events, should be 1 ovf them", subsetEvents)
        setFilteredEvents(subsetEvents)
    }, [plants])

    if (events.length && plants.length) { console.log(filteredEvents)
        return (
            <div className="events">
                {
                    filteredEvents.map(event => {
                        return <section className="card-body">
                            <EventCard key={event.id} event={event}/>
                        </section>
                    })
                }
            </div>)} else {return <div></div>}
}