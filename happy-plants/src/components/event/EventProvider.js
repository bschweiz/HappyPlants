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

    const releaseEvent = id => {
        return fetch(`http://localhost:8088/events/${id}`, {
            method: "DELETE"
        })
            .then(getEvents)
    }

    const updateEvent = event => {
        return fetch(`http://localhost:8088/events/${event.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(event)
        })
            .then(getEvents)
    }

    const updateCompleted = (eventId, eventObj) => {
        return fetch(`http://localhost:8088/events/${eventId}`, {
            method: "PATCH",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(eventObj)
        })
        .then(getEvents)
    }

    return (
        <EventContext.Provider value={{
            events, getEvents, addEvent, releaseEvent, updateEvent, updateCompleted
        }}>
            {props.children}
        </EventContext.Provider>
    )
}