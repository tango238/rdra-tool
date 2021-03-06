import 'rmwc/dist/styles'
import React from 'react'
import ReactDOM from 'react-dom'
import { Hmr, startHmr, DefaultTypelessProvider } from 'typeless'
import { RMWCProvider } from '@rmwc/provider'


const MOUNT_NODE = document.getElementById('app')

if (!MOUNT_NODE) {
  throw new Error('<div id="app" /> not found')
}

const render = () => {
  const App = require('./components/App').App
  ReactDOM.unmountComponentAtNode(MOUNT_NODE)
  ReactDOM.render(
    <Hmr>
      <DefaultTypelessProvider>
        <RMWCProvider>
          <App/>
        </RMWCProvider>
      </DefaultTypelessProvider>
    </Hmr>,
    MOUNT_NODE
  )
}

if (module.hot) {
  module.hot.accept('./components/App', () => {
    startHmr()
    render()
  })
}
render()
