import React from 'react'
import { DefaultSuspense } from 'src/components/DefaultSuspense'
import { RouteConfig } from 'src/types'
import { createModule } from 'typeless'
import { SignupSymbol } from './symbol'

// --- Actions ---
export const [handle, SignupActions, getSignupState] = createModule(SignupSymbol)
  .withActions({
    $mounted: null,
  })
  .withState<SignupState>()

// --- Routing ---
const ModuleLoader = React.lazy(() => import('./module'))

const SignupRoute = () => (
  <DefaultSuspense>
    <ModuleLoader/>
  </DefaultSuspense>
)

export const routeConfig: RouteConfig = {
  type: 'route',
  auth: false,
  path: '/signup',
  component: <SignupRoute/>
}

// --- Types ---

export interface SignupState {
  isLoading: boolean
  error: string
}
