import React from "react"
import { Route } from "react-router-dom"

import { TrefleProvider } from './plant/TrefleProvider'
import { TrefleList } from './plant/TrefleList'
import { TrefleForm } from "./plant/TrefleForm"

export const ApplicationViews = (props) => {
    return (
        <>
            <TrefleProvider>
                <Route path="/">
                    <TrefleForm />
                </Route>
                <Route path="/">
                    <TrefleList />
                </Route>
            </TrefleProvider>
        </>
    )
}