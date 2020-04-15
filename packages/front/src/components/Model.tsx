import React from 'react'
import styled from 'styled-components'
import { Elevation } from '@rmwc/elevation'

interface ModelProps {
  children: React.ReactNode;
}


const _Model = (props: ModelProps) => {
  const { children, ...rest } = props
  return (
      <Elevation z={4} {...rest}>
        
      </Elevation>
  )
}

export const Model = styled(_Model)`
  width: 96px;
  height: 96px;
  padding: 12px;
  margin: 16px;
  border-radius: 32px;
`
