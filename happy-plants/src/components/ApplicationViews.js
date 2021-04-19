import React from "react"
import { Route } from "react-router-dom"



import { TrefleProvider } from './trefle/TrefleProvider'
import { TrefleForm } from "./trefle/TrefleForm"
import { TrefleList } from './trefle/TrefleList'
import { PlantProvider } from "./plant/PlantProvider"
import { PlantForm } from "./plant/PlantForm"
import { PlantList } from "./plant/PlantList"
import { PlantDetail } from "./plant/PlantDetail"
import { EventProvider } from "./event/EventProvider"
import { EventForm } from "./event/EventForm"
import { EditEventNote } from "./event/EditEventNote"
import { EventDetail } from "./event/EventDetail"
import { WeatherProvider } from "./weather/WeatherProvider"
import { EventList } from "./event/EventList"
import { WeatherList } from "./weather/WeatherList"
import { UserProvider } from "./user/UserProvider"
import { Logout } from "./auth/LogOut"
import { EditPlantName } from "./plant/EditPlantName"
import "./ApplicationViews.css"

import { useDrawer } from './drawer/DrawerContext';

import { AppBar, Toolbar, Button, IconButton, Typography, makeStyles } from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    toolbar: {
        justifyContent: 'flex-end',
    },
    menuButton: {
        // Push other menu elements to the right
        marginRight: 'auto',
        [theme.breakpoints.up('lg')]: {
            display: 'none',
        },
    },
}));



export const ApplicationViews = (props) => {
    const classes = useStyles();


    return (
        <>
            (
            <>
                <AppBar position="sticky" style={{
                    backgroundColor: "green",
                    color: "lightgreen"
                }}>
                    <Toolbar>
                        <IconButton aria-label="app"
                            style={{ backgroundColor: "green", color: "lightgreen" }}
                            edge="start"
                            onClick={console.log('hello')}
                            className={classes.menuButton}
                            >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h5">Happy Plants</Typography>
                    </Toolbar>
                </AppBar>
                {/* <Route render={props => <NavBar {...props} />} /> */}
                <Route render={props => <ApplicationViews {...props} />} />
            </>
        )
            <UserProvider>
                <EventProvider>
                    <PlantProvider>
                        <WeatherProvider>
                            <Route exact path="/">
                                <WeatherList />
                                <EventList />
                            </Route>
                            <Route exact path="/login" render={props => <Logout {...props} />} />
                        </WeatherProvider>
                    </PlantProvider>
                </EventProvider>
            </UserProvider>

            <TrefleProvider>
                <PlantProvider>
                    <Route exact path="/addplant" render={
                        props => <TrefleForm {...props} />
                    } />
                    <Route exact path="/addplant/list" render={
                        props => <TrefleList {...props} />
                    } />
                    <Route exact path="/addplant/list/:trefleId(\d+)" render={
                        props => <PlantForm {...props} />
                    } />
                </PlantProvider>
            </TrefleProvider>

            <TrefleProvider>
                <EventProvider>
                    <PlantProvider>
                        <Route exact path="/plants" render={
                            props => <PlantList {...props} />
                        } />
                        <Route path="/plants/:plantId(\d+)" render={
                            props => <PlantDetail {...props} />
                        } />
                        <Route path="/plants/edit/:plantId(\d+)" render={
                            props => <EditPlantName {...props} />
                        } />
                    </PlantProvider>
                </EventProvider>
            </TrefleProvider>

            <EventProvider>
                <PlantProvider>
                    <Route exact path="/addevent" render={
                        props => <EventForm {...props} />
                    } />
                    <Route path="/events/:eventId(\d+)" render={
                        props => <EventDetail {...props} />
                    } />
                    <Route exact path="/events" render={
                        props => <EventList {...props} />
                    } />
                    <Route path="/events/edit/:eventId(\d+)" render={
                        props => <EditEventNote {...props} />
                    } />
                </PlantProvider>
            </EventProvider>


            <Route exact path="/logout" render={props => <Logout {...props} />} />
        </>
    )
}