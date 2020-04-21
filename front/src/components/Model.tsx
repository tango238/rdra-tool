import React from 'react'
import styled from 'styled-components'
import Draggable from 'react-draggable'
import { Elevation } from '@rmwc/elevation'

interface ModelProps {
  children: React.ReactNode
  active: boolean

  onClick(event: React.MouseEvent<HTMLDivElement>): void
}

const avtiveColor = '#99CFBA'

const _Model = (props: ModelProps) => {
  const { children, active, onClick, ...rest } = props

  return (
    <Draggable handle=".handle" bounds="parent" positionOffset={{ x: '200px', y: '60px'}} >
      <div {...rest} onClick={props.onClick}>
        <Top active={active}/>
        <Left active={active}/>
        <Center className="handle">
          <Main active={active}></Main>
        </Center>
        <Right active={active}/>
        <Bottom active={active}/>
      </div>
    </Draggable>
  )
}

export const Model = styled(_Model)`
  width: 136px;
  height: 136px;
  display: grid;
  grid-template-rows: 8px 112px 8px;
  grid-template-columns: 8px 112px 8px;
`

const Top = styled.div`
  height: 6px;
  width: 6px;
  background: ${avtiveColor};
  border-radius: 50%;
  grid-row: 1 / 2;
  grid-column: 2 / 3;
  justify-self: center;
  cursor: pointer;
  display: ${props => props.active ? 'block' : 'none'};
`

const Left = styled.div`
  height: 6px;
  width: 6px;
  background: ${avtiveColor};
  border-radius: 50%;
  grid-row: 2 / 3;
  grid-column: 1 / 2;
  align-self: center;
  cursor: pointer;
  display: ${props => props.active ? 'block' : 'none'};
`

const Center = styled.div`
  grid-row: 2 / 3;
  grid-column: 2 / 3;
  cursor: move;
`

const Right = styled.div`
  height: 6px;
  width: 6px;
  background: ${avtiveColor};
  border-radius: 50%;
  grid-row: 2 / 3;
  grid-column: 3 / 4;
  align-self: center;
  cursor: pointer;
  display: ${props => props.active ? 'block' : 'none'};
`

const Bottom = styled.div`
  height: 6px;
  width: 6px;
  background: ${avtiveColor};
  border-radius: 50%;
  grid-row: 3 / 4;
  grid-column: 2 / 3;
  justify-self: center;
  cursor: pointer;
  display: ${props => props.active ? 'block' : 'none'};
`

const _Main = props => {
  const { children, active, ...rest } = props

  return (
    <Elevation z={4} {...rest}>

    </Elevation>
  )
}
const Main = styled(_Main)`
  width: 96px;
  height: 96px;
  padding: 12px;
  margin: 8px;
  background-color: #FAFAFA;
  border-radius: 32px;
  cursor: pointer;
  border: ${props => props.active ? `solid 1px ${avtiveColor}` : 'none'};
`
