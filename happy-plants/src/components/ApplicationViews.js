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

            <TrefleProvider>
                <PlantProvider>
                    <Route path="/addplant" render={
                        props => <TrefleForm {...props} />
                    } />
                    <Route path="/addplant/list" render={
                        props => <TrefleList {...props} />
                    } />
                    <Route path="/addplant/create" render={
                        props => <PlantForm {...props} />
                    } />
                </PlantProvider>
            </TrefleProvider>

            <EventProvider>
                <PlantProvider>
                    <Route exact path="/plants" render={
                        props => <PlantList {...props} />
                    } />
                    <Route exact path="/events" render={
                        props => <EventList {...props} />
                    } />
                    <Route exact path="/addevent" render={
                        props => <EventForm {...props} />
                    } />
                </PlantProvider>
            </EventProvider>
        </>
    )
}