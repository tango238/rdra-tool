import React, { useState } from 'react'
import styled from 'styled-components'
import { Typography } from '@rmwc/typography'
import { Button } from '@rmwc/button'
import { Navigation } from 'src/components/Navigation'
import { TopBar } from 'src/components/TopBar'
import { ToolPane } from 'src/components/ToolPane'
import { Panel } from 'src/components/Panel'
import { PropertyPane } from 'src/components/PropertyPane'
import { Model } from 'src/components/Model'

const Layout = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr 200px;
  grid-template-rows: 1fr;
  height: 100%;
`

type ViewProps = {}

export default (props => {

  const [showNavigation, toggleNavigation] = useState<boolean>(false)

  const [active, activeModel] = useState<boolean>(false)
  return (
    <>
      <Navigation show={showNavigation} onBlur={() => toggleNavigation(false)}/>
      <TopBar title={'システムコンテキスト図'} onMenuClick={() => toggleNavigation(true)}/>
      <Layout>
        <ToolPane>
          <ul>
            <li>アクター</li>
            <li>システム</li>
            <li>外部システム</li>
          </ul>
        </ToolPane>
        <Panel>
          <Model active={active} onClick={e => activeModel(!active)}></Model>
        </Panel>
        <PropertyPane></PropertyPane>
      </Layout>
    </>
  )
}) as React.FC<ViewProps>
