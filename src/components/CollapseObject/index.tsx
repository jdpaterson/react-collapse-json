import React from 'react'
import uuid from 'react-uuid'
import { TCollapseObject } from '~/types'
import Collapse from '../Collapse'
import {
  defaultCollapser,
  defaultOnBoolean,
  defaultOnString,
  defaultOnNumber,
  defaultOnUndefined
} from './defaults'

const CollapseObject: React.FunctionComponent<TCollapseObject> = (props) => {
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
              path={[...(props.path || []), index]}
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
              path={[...(props.path || []), String(props.valueKey)]}
            />
          )
        )
      }
    </Collapse>
  )

  const parseCollapse = (props: TCollapseObject):JSX.Element | JSX.Element[] | undefined => {
    const {
      onBoolean,
      onNumber,
      onString,
      onUndefined,
      value,
    } = props
    switch (typeof(value)) {
      case 'boolean':
        return onBoolean && onBoolean(props)
      case 'object':
        if(Array.isArray(value)) {
          return collapseArray(props)
        } else {
          return collapseObject(props)
        }
      case 'string':
        return onString && onString(props)
      case 'number':
        return onNumber && onNumber(props)
      default:
        console.log("typeof not found: ", props)
        return onUndefined && onUndefined(props)
    }
  }

  return (
    <>
      {
        parseCollapse(props)
      }
    </>
  )
}

CollapseObject.defaultProps = {
  collapser: defaultCollapser,
  onBoolean: defaultOnBoolean,
  onNumber: defaultOnNumber,
  onString: defaultOnString,
  onUndefined: defaultOnUndefined,
  path: [],
  valueKey: 'Root'
}

export default CollapseObject
