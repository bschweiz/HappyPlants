import React from "react"
import { TrefleProvider } from './components/plant/TrefleProvider'
import { TrefleList } from './components/plant/TrefleList'

// TrefleProvider()

export const HappyPlants = () => (
  <>
  <TrefleProvider>
      <TrefleList />
  </TrefleProvider>
  <h2>Test</h2>
  </>
)

