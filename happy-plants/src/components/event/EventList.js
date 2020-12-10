import React, { useContext, useEffect } from 'react'
import {EventContext} from "./EventProvider"
import {PlantContext} from "../plant/PlantProvider"
import {EventCard} from './EventCard'

export const EventList = ({history}) => {
    const { getPlants, plants } = useContext(PlantContext)
    const { getEvents, events } = useContext(EventContext)
    // const [ filteredEvents, setFiltered ] = useState([])
    
    useEffect(() => {
        getEvents().then(getPlants)
    }, [])

    if (events.length && plants.length) {
        return (
            <div className="events">
                {
                    events.map(event => {
                        event.plantId = plants.filter(p => p.id === event.plantId)

                        return <section className="card-body">
                            <EventCard key={event.id} event={event}/>
                        </section>
                    })
                }
            </div>)} else {return <div></div>}

    // useEffect (()=> {
    //     console.log(events, plants)
    //     const subset = events.filter(e => e.plantId === parseInt(localStorage.getItem("app_user_id")))
    //     setFiltered(subset)
    //     console.log(subset)
    // }, [events])
}