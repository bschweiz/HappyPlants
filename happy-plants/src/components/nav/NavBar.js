import React from "react"
import { Link } from "react-router-dom"
import { AddModal } from "./AddModal"
import { TrefleProvider } from '../trefle/TrefleProvider'
import { PlantProvider } from '../plant/PlantProvider'
import { EventProvider } from '../event/EventProvider'


export const NavBar = (props) => {
    return (
        <ul className="navbar">
            <TrefleProvider>
                <EventProvider>
                    <PlantProvider>
                        <li className="navbar__item active">
                            <Link className="navbar__link" to="/">Home</Link>
                        </li>
                        <li className="navbar__item">
                            <Link className="navbar__link" to="/plants">Plants</Link>
                        </li>
                        <li className="navbar__item">
                            <Link className="navbar__link" to="/events">Events</Link>
                        </li>
                        <li className="navbar__item">
                            <Link className="navbar__link" to="/addplant">Add Plant</Link>
                        </li>
                        <li className="navbar__item">
                            <Link className="navbar__link" to="/addevent">Add Event</Link>
                        </li>
                        <li className="navbar__item">
                            <Link className="navbar__link" to="/logout">Log Out</Link>
                        </li>
                        <li>
                            <AddModal {...props} />
                        </li>
                    </PlantProvider>
                </EventProvider>
            </TrefleProvider>
        </ul>
    )
}