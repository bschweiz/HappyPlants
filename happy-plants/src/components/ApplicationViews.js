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

export const ApplicationViews = (props) => {
    return (
        <>
            <PlantProvider>
                <Route path="/plants">
                    <PlantList />
                    <PlantForm />
                </Route>
            </PlantProvider>
            <PlantProvider>
                <EventProvider>
                    <Route path="/events">
                        <EventList />
                    </Route>
                </EventProvider>
            </PlantProvider>
            <TrefleProvider>
                <Route path="/search">
                    <TrefleForm />
                    <TrefleList />
                </Route>
            </TrefleProvider>
        </>
    )
}