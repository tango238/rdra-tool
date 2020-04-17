import React from 'react'
import SystemContextView from './components/SystemContextView'
import { SystemContextState, handle } from './interface'

// --- Reducer ---
const initialState: SystemContextState = {
  foo: 'bar',
}

handle.reducer(initialState)

// --- Module ---
export default () => {
  handle()
  return <SystemContextView />
}
