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
                    <Route exact path="/addplant/list" render={
                        props => <TrefleList {...props} />
                    } />
                    <Route exact path="/addplant/list/:trefleId(\d+)" render={
                        props => {
                            console.log("props to PlantForm", props)
                            return <PlantForm {...props} />
                        }} />
                </PlantProvider>
            </TrefleProvider>

            <EventProvider>
                <PlantProvider>
                    <Route exact path="/plants" render={
                        props => <PlantList {...props} />
                    } />
                    <Route path="/plants/:plantId(\d+)" render={
                        props => {
                            console.log("props", props)
                            return <PlantDetail {...props} />
                        }
                    } />
                </PlantProvider>
            </EventProvider>

            <EventProvider>
                <PlantProvider>
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