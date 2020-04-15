import React from 'react'
import styled from 'styled-components'
import { Elevation } from '@rmwc/elevation'


interface NavigationProps {
  show: boolean
  children: React.ReactNode
  onBlur: () => void
}

export const Navigation = (props: NavigationProps) => {
  const { children, onBlur, ...rest } = props

  return (
    <>
      <Elevation z={16} wrap>
        <NavigationDiv tabIndex={-1} {...rest}>
          {children}
        </NavigationDiv>
      </Elevation>
      <Overlay show={props.show} onClick={onBlur}/>
    </>
  )
}

export const NavigationDiv = styled.div`
  position: fixed;
  top: 0;
  height: 100%;
  width: 335px;
  background-color: #436F6E;
  z-index: 16;
  display: ${props => props.show ? 'block' : 'none'};
  &:focus {
    outline: none;
  }
`

const Overlay = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,.24);
  z-index: 15;
  display: ${props => props.show ? 'block' : 'none'};
`
