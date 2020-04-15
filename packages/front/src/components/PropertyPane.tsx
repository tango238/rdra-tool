import React from 'react'
import styled from 'styled-components'

interface PropertyPaneProps {
  children: React.ReactNode
}

const _PropertyPane = (props: PropertyPaneProps) => {
  const { children, ...rest } = props
  return (
    <div {...rest}>PropertyPane</div>
  )
}

export const PropertyPane = styled(_PropertyPane)`
  border-left: 1px solid;
  border-color: rgba(0,0,0,.12);
`
