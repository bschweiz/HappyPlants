import React, { useContext, useEffect, useState } from 'react'
import { EventContext } from "./EventProvider"
import { PlantContext}  from "../plant/PlantProvider"
import { EventCard } from './EventCard'

export const EventList = (props) => {
    const { getPlantData, plants } = useContext(PlantContext)
    const { getEvents, events } = useContext(EventContext)
    const [ filteredEvents, setFilteredEvents ] = useState([])
    
    useEffect(() => {
        getEvents().then(getPlantData)
    }, [])
    
    useEffect (()=> {
        const userPlants = plants.filter(p => p.userId === parseInt(localStorage.getItem("app_user_id")))
        // debugger
        console.log("user plants", userPlants)
        
        const subsetEvents = userPlants.map(p => {
            const matchingEventArray = events.filter(e => e.plantId === p.id)
            return matchingEventArray}
        )
        let userFilteredEvents = []
        const combineArrays = (subsetEvents) => {
            return subsetEvents.map(a => a.forEach(e => userFilteredEvents.push(e)))
        }
        combineArrays(subsetEvents)
        console.log("subset Events, should be 3 of them: Fred, Snake, Mary", subsetEvents, userFilteredEvents)
        
        setFilteredEvents(userFilteredEvents)
    }, [plants, events])

    if (events.length && plants.length) {console.log(filteredEvents)
        return (
            <div className="events">
                {
                    filteredEvents.map(event => {
                        return <EventCard key={event.id} event={event} props={props}/>
                    })
                }
            </div>)} else {return <div></div>}
}