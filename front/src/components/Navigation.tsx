import React from 'react'
import styled from 'styled-components'
import { Elevation } from '@rmwc/elevation'
import { Typography } from '@rmwc/typography'
import { Link } from 'typeless-router'


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
          <ListItems>
            <ListItem href={'/'}>システムコンテキスト図</ListItem>
            <ListItem href={'/requirement_model'}>要求モデル図</ListItem>
          </ListItems>
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

const ListItems = styled.ul`
`

type ListItemProps = {
  children: React.ReactNode,
  href: string
}
const _ListItem = (props: ListItemProps) => {
  const { children, href, ...rest } = props
  return (
    <li {...rest}>
      <LinkItem href={href}>{children}</LinkItem>
    </li>
  )
}
const ListItem = styled(_ListItem)`
  list-style-type: none;
`

const _LinkItem = (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
  const { children, href, ...rest } = props

  return (
    <Link href={href} {...rest}>
      <Typography use='subtitle1'>{children}</Typography>
    </Link>
  )
}
const LinkItem = styled(_LinkItem)`
  color: rgba(235, 245, 246, 0.4);
  text-decoration: none;
  
  &:hover {
    color: rgba(235, 245, 246, 1.0); 
  }
`
