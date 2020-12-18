import React from "react"
import {Link} from "react-router-dom"

export const Logout = () => {

    return <Link to="/login" className="btn" onClick={localStorage.removeItem("app_user_id")}>Your are now logged out, click here to log back in</Link>
}
