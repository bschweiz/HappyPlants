import React from "react"
import {Link} from "react-router-dom"

export const NavBar = (props) => {
    return (
        <ul className="navbar">
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
    </ul>
    )
}