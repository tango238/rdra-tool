import React from 'react'
import styled from 'styled-components'
import { Elevation } from '@rmwc/elevation'
import { Ripple } from '@rmwc/ripple'
import { IconButton } from '@rmwc/icon-button'
import { Menu } from 'src/components/icons/Menu'
import { Typography } from '@rmwc/typography'

interface TopBarProps {
  children: React.ReactNode
  onMenuClick: () => void
}

const _TopBar = (props: TopBarProps) => {
  const { title, children, onMenuClick, ...rest } = props

  return (
    <Elevation z={1} wrap {...rest}>
      <div>
        <IconButton icon='menu' onClick={onMenuClick}/>
        <Title>{title}</Title>
      </div>
    </Elevation>
  )
}

export const TopBar = styled(_TopBar)`
  height: 56px;
  width: 100%;
  padding: 4px;
`

const _Title = (props:React.ReactElement) => {
  const {children, ...rest } = props
  return (
    <div {...rest}>
      <Typography use='subtitle1'>{children}</Typography>
    </div>
  )
}

const Title = styled(_Title)`
  display: inline-block;
  position: absolute;
  top: 15px;
  user-select: none;
`
