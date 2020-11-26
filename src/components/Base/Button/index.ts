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

type TButton = HTMLProps<'button'> & LayoutProps & FlexboxProps & PositionProps & SpaceProps
const Box: React.FunctionComponent<TButton> = styled.button<TButton>`
  ${layout}
  ${flexbox}
  ${position}
  ${space}
`

export default Box
