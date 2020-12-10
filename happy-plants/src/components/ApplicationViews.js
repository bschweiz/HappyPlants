import React from "react"
import { Route } from "react-router-dom"

import { TrefleProvider } from './trefle/TrefleProvider'
import { TrefleList } from './trefle/TrefleList'
import { TrefleForm } from "./trefle/TrefleForm"
import { PlantProvider } from "./plant/PlantProvider"
import { PlantForm } from "./plant/PlantForm"

export const ApplicationViews = (props) => {
    return (
        <>
            <PlantProvider>
                <Route path="/plants">
                    <PlantForm />
                </Route>
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