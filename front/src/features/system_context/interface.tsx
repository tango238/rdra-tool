import React from 'react'
import { DefaultSuspense } from 'src/components/DefaultSuspense'
import { RouteConfig } from 'src/types'
import { createModule } from 'typeless'
import { HomeSymbol } from './symbol'

// --- Actions ---
export const [handle] = createModule(HomeSymbol).withState<SystemContextState>()

// --- Routing ---
const ModuleLoader = React.lazy(() => import('./module'))

const SystemContextRoute = () => (
  <DefaultSuspense>
    <ModuleLoader />
  </DefaultSuspense>
)

export const routeConfig: RouteConfig = {
  type: 'route',
  auth: true,
  path: '/',
  component: <SystemContextRoute />,
}

// --- Types ---
export interface SystemContextState {
  foo: string
}
