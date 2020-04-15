import React from 'react'
import { useGlobalModule } from 'src/features/global/module'
import { createGlobalStyle } from 'styled-components'
import { RouteResolver } from './RouteResolver'
import { useRouterModule } from 'src/features/router'
import { getGlobalState } from 'src/features/global/interface'

const GlobalStyle = createGlobalStyle`
  :root {
    --mdc-theme-primary: #00A3FF;
    --mdc-theme-secondary: #262D34;
    --mdc-theme-on-primary: #00A3FF;
    --mdc-theme-on-secondary: #262D34;
  }
  *, ::after, ::before {
      box-sizing: border-box;
  }
  html, body, #app {
    height: 100%;
    margin: 0;
  }
`

export const App = () => {
  useRouterModule()
  useGlobalModule()
  const { isLoaded } = getGlobalState.useState()

  return (
    <>
      {isLoaded && <RouteResolver/>}
      <GlobalStyle/>
    </>
  )
}
