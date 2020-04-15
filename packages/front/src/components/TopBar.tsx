import React from 'react'
import styled from 'styled-components'
import { Elevation } from '@rmwc/elevation'
import { Ripple } from '@rmwc/ripple'
import { IconButton } from '@rmwc/icon-button'
import { Menu } from 'src/components/icons/Menu'

interface TopBarProps {
  children: React.ReactNode
  onMenuClick: () => void
}

const _TopBar = (props: TopBarProps) => {
  const { children, onMenuClick, ...rest } = props

  return (
    <Elevation z={1} wrap {...rest}>
      <div>
        <IconButton icon='menu' onClick={onMenuClick}/>
      </div>
    </Elevation>
  )
}

export const TopBar = styled(_TopBar)`
  height: 56px;
  width: 100%;
  padding: 4px;
`
