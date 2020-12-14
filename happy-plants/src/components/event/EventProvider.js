import React, { useState } from 'react'

export const EventContext = React.createContext()

export const EventProvider = (props) => {
    const [events, setEvents] = useState([])

    const getEvents = () => {
        return fetch("http://localhost:8088/events")
            .then(res => res.json())
            .then(setEvents)
    }

    const addEvent= plant => {
        return fetch("http://localhost:8088/events", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(plant)
        })
            .then(getEvents)
    }

    // will add addEvent later

    return (
        <EventContext.Provider value={{
            events, getEvents, addEvent
        }}>
            {props.children}
        </EventContext.Provider>
    )
}