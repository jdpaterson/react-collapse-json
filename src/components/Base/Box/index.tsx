import React, { HTMLProps } from 'react'
import styled from 'styled-components'
import {
  layout,
  flexbox,
  position,
  space,
  LayoutProps,
  FlexboxProps,
  PositionProps,
  SpaceProps
} from 'styled-system'

type TBox = HTMLProps<'div'> & LayoutProps & FlexboxProps & PositionProps & SpaceProps
const Box: React.FunctionComponent<TBox> = styled.div<TBox>`
  ${layout}
  ${flexbox}
  ${position}
  ${space}
`

export default Box
