import React from 'react'
import { DefaultSuspense } from 'src/components/DefaultSuspense'
import { RouteConfig } from 'src/types'
import { createModule } from 'typeless'
import { HomeSymbol } from './symbol'

// --- Actions ---
export const [handle] = createModule(HomeSymbol).withState<Sample1State>()

// --- Routing ---
const ModuleLoader = React.lazy(() => import('./module'))

const HomeRoute = () => (
  <DefaultSuspense>
    <ModuleLoader />
  </DefaultSuspense>
)

export const routeConfig: RouteConfig = {
  type: 'route',
  auth: true,
  path: '/',
  component: <HomeRoute />,
}

// --- Types ---
export interface HomeState {
  foo: string
}
