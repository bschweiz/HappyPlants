import React from "react"

export const EventCard = ({ event }) => (
    <section className="event">
        <h3 className="event__date"> Date of Care Event: { event.date }</h3>
        <div className="event__water">Is this a watering? { event.water }</div>
    </section>
)