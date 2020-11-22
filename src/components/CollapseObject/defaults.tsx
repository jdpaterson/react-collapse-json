import React from 'react'
import { TParseCollapse } from '~/types'
import { Box, Paragraph } from '~/components/Base'
import LocalCollapse from '~/components/Collapse'

export const defaultCollapser = (objKey: string, objVal: any, parseCollapse: TParseCollapse) => (
  <LocalCollapse
    title={objKey}
  >
    { parseCollapse(objKey, objVal) }
  </LocalCollapse>
)

export const defaultOnBoolean = (_key:string, value:boolean):JSX.Element => (
  <Box ml={5}>
    <Paragraph>{String(value)}</Paragraph>
  </Box>
)

export const defaultOnString = (_key:string, value:string):JSX.Element => (
  <Box ml={5}>
    <Paragraph>{String(value)}</Paragraph>
  </Box>
)

export const defaultOnNumber = (_key:string, value:number):JSX.Element => (
  <Box ml={5}>
    <Paragraph>{value}</Paragraph>
  </Box>
)

export const defaultOnUndefined = (_key:string, value:number):JSX.Element => (
  <Box ml={5}>
    <Paragraph>{String(value)}</Paragraph>
  </Box>
)