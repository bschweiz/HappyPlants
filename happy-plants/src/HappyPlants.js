import React from "react"
import { Route, Redirect } from "react-router-dom"
import { ApplicationViews } from "./components/ApplicationViews"
import { NavBar } from "./components/nav/NavBar"
import { Login } from "./components/auth/Login"
import { Register } from "./components/auth/Register"

export const HappyPlants = () => (
  <>
    <Route render={() => {
      if (localStorage.getItem("app_user_id")) {
        return (
          <>
            <Route render={props => <NavBar {...props} />} />
            <Route render={props => <ApplicationViews {...props} />} />
          </>
        )
      } else {
        return <Redirect to="/login" />
      }

    }} />

    <Route exact path="/login" render={props => <Login {...props} />} />
    <Route exact path="/register" render={props => <Register {...props} />} />
  </>
)


