import React from "react"
import { Route, Redirect } from "react-router-dom"
import { ApplicationViews } from "./components/ApplicationViews"
import { NavBar } from "./components/nav/NavBar"
import { Login } from "./components/auth/Login"
import { Register } from "./components/auth/Register"

import {AppBar, Toolbar, Button} from '@material-ui/core';

export const HappyPlants = () => (
  <>
    <Route render={() => {
      if (localStorage.getItem("app_user_id")) {
        return (
          <>
            <AppBar position="sticky">
              <Toolbar>
                <Button>Home</Button>
                <Button>Plants</Button>
                <Button>Check-Ins</Button>
                <Button>New Plant</Button>
                <Button>New Check-In</Button>
              </Toolbar>
            </AppBar>
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


