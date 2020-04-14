import React from 'react'
import HomeView from './components/HomeView'
import { HomeState, handle } from './interface'

// --- Reducer ---
const initialState: HomeState = {
  foo: 'bar',
}

handle.reducer(initialState)

// --- Module ---
export default () => {
  handle()
  return <HomeView />
}
