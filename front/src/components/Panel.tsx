import React from 'react'
import styled from 'styled-components'


interface PanelProps {
  children: React.ReactNode
}

const _Panel = (props: PanelProps) => {
  const { children, ...rest } = props
  return (
    <div {...rest}>
      {children}
    </div>
  )
}

export const Panel = styled(_Panel)`
    margin: 0px;
    padding: 0px;
    overflow: hidden;
    background-image: url('/assets/tile.png');
    background-repeat: repeat;
    background-size: 30px 30px;
`
