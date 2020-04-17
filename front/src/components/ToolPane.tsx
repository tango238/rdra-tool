import React from 'react'
import styled from 'styled-components'

interface ToolPaneProps {
  children: React.ReactNode
}

const _ToolPane = (props: ToolPaneProps) => {
  const { children, ...rest } = props
  return (<div {...rest}>ToolPane</div>)
}

export const ToolPane = styled(_ToolPane)`
  border-right: 1px solid;
  border-color: rgba(0,0,0,.12);
`
