import React from 'react'
import { RouterActions } from 'typeless-router'
import * as Rx from 'src/rx'
import { login } from 'src/services/API'
import { setAccessToken } from 'src/services/Storage'
import { GlobalActions } from '../global/interface'
import SignupView from './components/IndexView'
import { SignupActions, SignupState, handle } from './interface'
import {
  SignupFormActions,
  useSignupForm,
  getSignupFormState
} from './signup-form'

// --- Epic ---


// --- Reducer ---
const initialState: SignupState = {
  isLoading: false,
  error: ''
}
handle.reducer(initialState)

// --- Module ---
export default () => {
  handle()
  useSignupForm()
  return <SignupView/>
}
