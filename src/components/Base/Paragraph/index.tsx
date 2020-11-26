import React from 'react'
import styled from 'styled-components'
import {
  layout,
  position,
  space,
  typography,
  LayoutProps,
  PositionProps,
  SpaceProps,
  TypographyProps
} from 'styled-system'

type TParagraph = LayoutProps & PositionProps & SpaceProps & TypographyProps
const Paragraph: React.FunctionComponent<TParagraph> = styled.p<TParagraph>`
  ${layout}
  ${position}
  ${space}
  ${typography}
  margin: 0;
`

export default Paragraph
