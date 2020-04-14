import React from 'react'
import { Typography } from '@rmwc/typography'

type HomeProps = {
}

export default (props => {

  return (
    <>
      <Typography use="headline1">headline1</Typography><br />
      <Typography use="headline2">headline2</Typography><br />
      <Typography use="headline3">headline3</Typography><br />
      <Typography use="headline4">headline4</Typography><br />
      <Typography use="headline5">headline5</Typography><br />
      <Typography use="headline6">headline6</Typography><br />
      <Typography use="subtitle1">subtitle1</Typography><br />
      <Typography use="subtitle2">subtitle2</Typography><br />
      <Typography use="body1">body1</Typography><br />
      <Typography use="body2">body2</Typography><br />
      <Typography use="caption">caption</Typography><br />
      <Typography use="button">button</Typography><br />
      <Typography use="overline">overline</Typography><br />
    </>
  )
}) as React.FC<HomeProps>
