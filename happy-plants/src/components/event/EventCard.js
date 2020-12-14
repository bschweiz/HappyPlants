import React from "react"

export const EventCard = ({ event }) => (
    <section className="event">
        <h3 className="event__date"> Date of Care Event: {event.date}</h3>
        <div className="event__water">Is this a watering?</div>
        <div>
            {event.water ? "Yes, check to make sure soil is dry" : "No, should not need watering, but check in-case"}
        </div>
        <button>Edit Event</button>
        <button>Delete Event</button>
    </section>
)