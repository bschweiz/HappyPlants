import React, { useContext } from "react"
import { EventContext } from "../event/EventProvider"

export const EventDetail = (props) => {
    // debugger
    const { releaseEvent, getEvents, events } = useContext(EventContext)
    return ( <section className="event">


    </section>
    )
}