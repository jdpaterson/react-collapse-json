import React from 'react'
import uuid from 'react-uuid'
import { TCollapseObject, TCollapseObjectProps } from '~/types'
import Collapse from '../Collapse'
import {
  defaultOnBoolean,
  defaultOnString,
  defaultOnNumber,
  defaultOnUndefined
} from './defaults'

const CollapseObject: React.FunctionComponent<TCollapseObjectProps> = (props) => {
  const collapseArray = (props: TCollapseObject):JSX.Element => (
    <Collapse title={String(props.valueKey)} >
      {
        props.value.map(
          (arrItem:unknown, index:number) => (
            <CollapseObject
              key={uuid()}
              { ...props }
              value={arrItem}
              valueKey={index}
              path={[...props.path, index]}
            />
          )
        )
      }
    </Collapse>
  )

  const collapseObject = (props: TCollapseObject):JSX.Element => (
    <Collapse title={`${props.valueKey}: {${Object.keys(props.value).join(', ')}}`} >
      {
        Object.entries(props.value).map(
          ([key, value]) => (
            <CollapseObject
              key={uuid()}
              { ...props }
              value={value}
              valueKey={key}
              path={[...props.path, String(props.valueKey)]}
            />
          )
        )
      }
    </Collapse>
  )

  const defaultParseCollapse = (props: TCollapseObject):JSX.Element | JSX.Element[] => {
    const {
      onBoolean,
      onNumber,
      onString,
      onUndefined,
      value,
    } = props
    switch (typeof(value)) {
      case 'boolean':
        return onBoolean(props)
      case 'object':
        if(Array.isArray(value)) {
          return collapseArray(props)
        } else {
          return collapseObject(props)
        }
      case 'string':
        return onString(props)
      case 'number':
        return onNumber(props)
      default:
        console.log("typeof not found: ", props)
        return onUndefined(props)
    }
  }

  const {
    onBoolean = defaultOnBoolean,
    onNumber = defaultOnNumber,
    onString = defaultOnString,
    onUndefined = defaultOnUndefined,
    parseCollapse = defaultParseCollapse,
    path = [],
    value,
    valueKey = 'Root'
  } = props

  return (
    <>
      {
        parseCollapse({
          onBoolean: onBoolean,
          onNumber: onNumber,
          onString: onString,
          onUndefined: onUndefined,
          parseCollapse: parseCollapse,
          path: path,
          value: value,
          valueKey: valueKey
        })
      }
    </>
  )
}

export default CollapseObject
