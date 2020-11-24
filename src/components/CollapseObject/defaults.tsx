import React from 'react'
import { TCollapseObjectParser } from '~/types'
import { Box, Paragraph } from '~/components/Base'
import { CheckIcon, SquareIcon } from '@primer/styled-octicons'

export const defaultAsString = ({
  value,
  valueKey,
  path,
  selectionState,
  setSelectionState
}:TCollapseObjectParser):JSX.Element => {
  const newPath = [...path, valueKey]
  const isSelected = selectionState[newPath.join('.')]
  return (
    <Box
      display="flex"
      ml={3}
      onClick={() => {
        setSelectionState({
          ...selectionState,
          [newPath.join('.')]: !isSelected
        })
        return selectionState
      }}
    >
      {
        isSelected ? (
          <CheckIcon />
        ) : (
          <SquareIcon />
        )
      }
      <Paragraph>{valueKey}: {String(value)}</Paragraph>
    </Box>
  )
}

export const defaultAsIs = ({
  value,
  valueKey,
  path,
  selectionState,
  setSelectionState
}:TCollapseObjectParser):JSX.Element => {
  const newPath = [...path, valueKey]
  const isSelected = selectionState[newPath.join('.')]
  return (
    <Box
      display="flex"
      ml={3}
      onClick={() => {
        setSelectionState({
          ...selectionState,
          [newPath.join('.')]: !isSelected
        })
        return selectionState
      }}
    >
      {
        isSelected ? (
          <CheckIcon />
        ) : (
          <SquareIcon />
        )
      }
      <Paragraph>{valueKey}: {value}</Paragraph>
    </Box>
  )
}

export const defaultOnNumber = defaultAsIs
export const defaultOnBoolean = defaultAsString
export const defaultOnString = defaultAsString
export const defaultOnUndefined = defaultAsString