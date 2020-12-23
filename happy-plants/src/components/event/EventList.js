import React, { useContext, useEffect, useState } from 'react'
import { EventContext } from "./EventProvider"
import { PlantContext}  from "../plant/PlantProvider"
import { EventCard } from './EventCard'

const sortedAttempt = (events) => {
    let sorted = events.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    // console.log(sorted)
    return sorted.reverse()
}

export const EventList = (props) => {
    const { getEvents, events } = useContext(EventContext)
    const { getPlantData, plants } = useContext(PlantContext)
    const [ filteredEvents, setFilteredEvents ] = useState([])
    
    useEffect(() => {
        getEvents().then(getPlantData)
    }, [])
    
    useEffect (()=> {
        const userPlants = plants.filter(p => p.userId === parseInt(localStorage.getItem("app_user_id")))
        // debugger
        // console.log("user plants", userPlants)
        
        const subsetEvents = userPlants.map(p => {
            const matchingEventArray = events.filter(e => e.plantId === p.id)
            return matchingEventArray}
        )
        let userFilteredEvents = []
        const combineArrays = (subsetEvents) => {
            return subsetEvents.map(a => a.forEach(e => userFilteredEvents.push(e)))
        }
        combineArrays(subsetEvents)
        setFilteredEvents(userFilteredEvents)
        
    }, [plants, events])

    if (events.length && plants.length) {
        return (
            <div className="events"> <h3>Upcoming Care Events</h3>
            {/* <button
                onClick={evt => {
                    // console.log(evt)
                    // showCompleted({ plant })
                }}
            >View Completed Cares </button> */}
                {
                    sortedAttempt(filteredEvents).map(event => {
                        return <EventCard key={event.id} event={event} props={props}/>
                    })
                }
            </div>)
            } else {return <div></div>}
}