import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"
import { TrefleProvider } from '../trefle/TrefleProvider'
import { PlantProvider } from '../plant/PlantProvider'
import { EventProvider } from '../event/EventProvider'


export const NavBar = (props) => {
    return (
        <ul className="navbar">
            <TrefleProvider>
                <EventProvider>
                    <PlantProvider>
                        <li className="navbar__item">
                            <Link className="navbar__link" to="/">Home Page</Link>
                        </li>
                        <li className="navbar__item">
                            <Link className="navbar__link" to="/plants">Plant List</Link>
                        </li>
                        <li className="navbar__item">
                            <Link className="navbar__link" to="/events">Appt. List</Link>
                        </li>
                        <li className="navbar__item">
                            <Link className="navbar__link" to="/addplant">Add Plant</Link>
                        </li>
                        <li className="navbar__item">
                            <Link className="navbar__link" to="/addevent">Make Appt.</Link>
                        </li>
                        <li className="navbar__item">
                            <Link className="navbar__link" to="/logout">Log Out</Link>
                        </li>
                    </PlantProvider>
                </EventProvider>
            </TrefleProvider>
            <span></span>
        </ul>
    )
}