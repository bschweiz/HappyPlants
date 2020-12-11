import React from "react"
import { Route } from "react-router-dom"

import { TrefleProvider } from './trefle/TrefleProvider'
import { TrefleList } from './trefle/TrefleList'
import { TrefleForm } from "./trefle/TrefleForm"
import { PlantProvider } from "./plant/PlantProvider"
import { PlantForm } from "./plant/PlantForm"
import { PlantList } from "./plant/PlantList"
import { EventProvider } from "./event/EventProvider"
import { EventList } from "./event/EventList"
import { WeatherProvider } from "./weather/WeatherProvider"
import { WeatherList } from "./weather/WeatherList"
import { PlantCard } from "./plant/PlantCard"

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
                    <Route path="/plants">
                        <PlantList />
                    </Route>
                </TrefleProvider>
            </PlantProvider>
            <EventProvider>
                <PlantProvider>
                    <Route path="/events">
                        <EventList />
                    </Route>
                </PlantProvider>
            </EventProvider>
            <TrefleProvider>
                <PlantProvider>
                    <Route path="/addplant">
                        <PlantForm />
                        <TrefleForm />
                        <TrefleList />
                    </Route>
                </PlantProvider>
            </TrefleProvider>
        </>
    )
}