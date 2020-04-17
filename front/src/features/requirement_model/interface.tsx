import React from 'react'
import { DefaultSuspense } from 'src/components/DefaultSuspense'
import { RouteConfig } from 'src/types'
import { createModule } from 'typeless'
import { RequirementModelSymbol } from './symbol'

// --- Actions ---
export const [handle] = createModule(RequirementModelSymbol).withState<RequirementModelState>()

// --- Routing ---
const ModuleLoader = React.lazy(() => import('./module'))

const RequirementModelRoute = () => (
  <DefaultSuspense>
    <ModuleLoader />
  </DefaultSuspense>
)

export const routeConfig: RouteConfig = {
  type: 'route',
  auth: true,
  path: '/requirement_model',
  component: <RequirementModelRoute />,
}

// --- Types ---
export interface RequirementModelState {
  foo: string
}
