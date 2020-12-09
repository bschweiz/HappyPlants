import React from "react"
import { TrefleProvider } from './components/plant/TrefleProvider'
import { TrefleList } from './components/plant/TrefleList'
import { TrefleForm } from "./components/plant/TrefleForm"

// TrefleProvider()

export const HappyPlants = () => (
  <>
  <TrefleProvider>
      <TrefleForm />
      <TrefleList />
  </TrefleProvider>
  </>
)

