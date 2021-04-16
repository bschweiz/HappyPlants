import React from "react"
import { Route, Redirect } from "react-router-dom"
import { ApplicationViews } from "./components/ApplicationViews"
import { NavBar } from "./components/nav/NavBar"
import { Login } from "./components/auth/Login"
import { Register } from "./components/auth/Register"

import {AppBar, Toolbar, Button, IconButton, Typography} from '@material-ui/core';
import Menu from "@material-ui/icons/Menu";

export const HappyPlants = () => (
  <>
    <Route render={() => {
      if (localStorage.getItem("app_user_id")) {
        return (
          <>
            <AppBar position="sticky">
              <Toolbar>
                <IconButton aria-label="app" style={{backgroundColor: "green",
                color:"yellow"}}>
                  <Menu />
                </IconButton>
                <Typography variant="h5">Happy Plants</Typography>
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


