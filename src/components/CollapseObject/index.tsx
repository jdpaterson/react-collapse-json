import React from 'react'
import uuid from 'react-uuid'
import { ICollapseObject } from '~/types'
import { Box } from '~/components/Base'
import {
  defaultCollapser,
  defaultOnBoolean,
  defaultOnString,
  defaultOnNumber,
  defaultOnUndefined
} from './defaults'

const CollapseObject: React.FunctionComponent<ICollapseObject> = ({
  collapser = defaultCollapser,
  object,
  onBoolean = defaultOnBoolean,
  onNumber = defaultOnNumber,
  onString = defaultOnString,
  onUndefined = defaultOnUndefined,
  rootKey = 'Root'
}):JSX.Element => {

  const collapseArray = (key:string, arr: Array<unknown>):JSX.Element[] =>
    arr.map(
      (arrItem, index) => (
        <React.Fragment key={uuid()}>
          { collapser(`${key}[${index}]`, arrItem, parseVal) }
        </React.Fragment>
      )
    )

  const collapseObject = (_key:string, obj: Record<string, unknown>):JSX.Element[] =>
    Object.entries(obj).map(
      ([key, value]) => (
        <React.Fragment key={uuid()}>
          { collapser(key, value, parseVal) }
        </React.Fragment>
      )
    )

  const parseVal = (key: string, value: any):JSX.Element | JSX.Element[] => {
    switch (typeof(value)) {
      case 'boolean':
        return onBoolean(key, value)
      case 'object':
        if(Array.isArray(value)) {
          return collapseArray(key, value)
        } else {
          return collapseObject(key, value)
        }
      case 'string':
        return onString(key, value)
      case 'number':
        return onNumber(key, value)
      default:
        console.log("typeof not found: ", typeof(value), key, value)
        return onUndefined(key, value)
    }
  }

  return (
    <Box display="flex" flexDirection="column">
      {
        collapseObject(rootKey, object)
      }
    </Box>
  )
}

export default CollapseObject
