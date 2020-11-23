import React from 'react'
import { TCollapseObject } from '~/types'
import { Box, Paragraph } from '~/components/Base'
import LocalCollapse from '~/components/Collapse'

export const defaultCollapser = (props:TCollapseObject):JSX.Element => (
  <LocalCollapse
    title={String(props.valueKey)}
  >
    { props.parseCollapse && props.parseCollapse(props) }
  </LocalCollapse>
)

export const defaultOnBoolean = ({
  value,
  valueKey,
  path
}:TCollapseObject):JSX.Element => (
  <Box
    ml={3}
    onClick={() => console.log([...(path || []), valueKey])}
  >
    <Paragraph>{valueKey}: {String(value)}</Paragraph>
  </Box>
)

export const defaultOnString = ({
  value,
  valueKey,
  path
}:TCollapseObject):JSX.Element => (
  <Box
    ml={3}
    onClick={() => console.log([...(path || []), valueKey])}
  >
    <Paragraph>{valueKey}: {String(value)}</Paragraph>
  </Box>
)

export const defaultOnNumber = ({
  value,
  valueKey,
  path
}:TCollapseObject):JSX.Element => (
  <Box
    ml={3}
    onClick={() => console.log([...(path || []), valueKey])}
  >
    <Paragraph>{valueKey}: {value}</Paragraph>
  </Box>
)

export const defaultOnUndefined = ({
  value,
  valueKey,
  path
}:TCollapseObject):JSX.Element => (
  <Box
    ml={3}
    onClick={() => console.log([...(path || []), valueKey])}
  >
    <Paragraph>{valueKey}: {String(value)}</Paragraph>
  </Box>
)