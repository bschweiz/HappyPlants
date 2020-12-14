import React from "react"
import { Route } from "react-router-dom"

import { TrefleProvider } from './trefle/TrefleProvider'
import { TrefleForm } from "./trefle/TrefleForm"
import { TrefleList } from './trefle/TrefleList'
import { PlantProvider } from "./plant/PlantProvider"
import { PlantForm } from "./plant/PlantForm"
import { PlantList } from "./plant/PlantList"
import { EventProvider } from "./event/EventProvider"
import { EventForm } from "./event/EventForm"
import { EventList } from "./event/EventList"
import { WeatherProvider } from "./weather/WeatherProvider"
import { WeatherList } from "./weather/WeatherList"

export const ApplicationViews = (props) => {
    return (
        <>
            <WeatherProvider>
                <Route exact path="/">
                    <WeatherList />
                </Route>
            </WeatherProvider>
            <PlantProvider>
                <TrefleProvider>
                    <Route exact path="/plants">
                        <PlantList />
                    </Route>
                </TrefleProvider>
            </PlantProvider>
            <EventProvider>
                <PlantProvider>
                    <Route exact path="/events">
                        <EventList />
                    </Route>
                    <Route exact path="/addevent" render={
                        props => <EventForm {...props}/>
                        }/>
                </PlantProvider>
            </EventProvider>
            <TrefleProvider>
                <PlantProvider>
                    <Route exact path="/addplant">
                        <PlantForm />
                        <TrefleForm />
                        <TrefleList />
                    </Route>
                </PlantProvider>
            </TrefleProvider>
        </>
    )
}