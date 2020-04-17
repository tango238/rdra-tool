import React from 'react'
import RequirementModelView from './components/IndexView'
import { RequirementModelState, handle } from './interface'

// --- Reducer ---
const initialState: RequirementModelState = {
  foo: 'bar',
}

handle.reducer(initialState)

// --- Module ---
export default () => {
  handle()
  return <RequirementModelView />
}
