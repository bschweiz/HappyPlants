import React from "react"
import {Link} from "react-router-dom"

export const Logout = () => {

    return <Link to="/Login" className="btn" onClick={sessionStorage.removeItem('app_user_id')}>Log Out</Link>
}
