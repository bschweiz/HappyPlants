import React, {useState} from 'react' 

export const EventContext = React.createContext()

export const EventProvider = (props) => {
    const [events, setEvents] = useState([])

    const getEvents = () => {
        return fetch("http://localhost:8088/events")
            .then(res => res.json())
            .then(setEvents)
    }

    // will add addEvent later

    return (
        <EventContext.Provider value = {{
            events, getEvents
        }}>
            {props.children}
        </EventContext.Provider>
    )
}