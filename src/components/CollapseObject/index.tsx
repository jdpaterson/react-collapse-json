import React, { useState } from 'react'
import uuid from 'react-uuid'
import { TCollapseObject, TCollapseObjectParser } from '~/types'
import Collapse from '../Collapse'
import {
  defaultOnBoolean,
  defaultOnString,
  defaultOnNumber,
  defaultOnUndefined
} from './defaults'

const CollapseObject: React.FunctionComponent<TCollapseObject> = (props) => {
  const [collapseState, setCollapseState] = useState({})
  const [selectionState, setSelectionState] = useState({})
  return (
    <CollapseObjectParser
      collapseState={collapseState}
      setCollapseState={setCollapseState}
      onBoolean={props.onBoolean || defaultOnBoolean}
      onNumber={props.onNumber || defaultOnNumber}
      onString={props.onString || defaultOnString}
      onUndefined={props.onUndefined || defaultOnUndefined}
      path={[]}
      selectionState={selectionState}
      setSelectionState={setSelectionState}
      value={props.value}
      valueKey={props.valueKey || "Root"}
    />
  )
}

const CollapseObjectParser: React.FunctionComponent<TCollapseObjectParser> = (props) => {
  const { collapseState, setCollapseState } = props
  const isCollapsed = !!collapseState[props.path.join('.')]
  const {
    onBoolean,
    onNumber,
    onString,
    onUndefined,
    value,
  } = props

   switch (typeof(value)) {
    case 'object':
      if(Array.isArray(value)) {
        return (
          <Collapse
            isCollapsed={isCollapsed}
            onCollapse={() => {
              setCollapseState({
              ...collapseState,
              [props.path.join('.')]: !isCollapsed
              })
            }}
            title={String(props.valueKey)}
          >
            {
              props.value.map(
                (arrItem:unknown, index:number) => (
                  <CollapseObjectParser
                    key={uuid()}
                    { ...props }
                    value={arrItem}
                    valueKey={index}
                    path={[...props.path, String(props.valueKey)]}
                  />
                )
              )
            }
          </Collapse>
        )
      } else {
        return (
          <Collapse
            isCollapsed={isCollapsed}
            onCollapse={() => {
              setCollapseState({
                ...collapseState,
                [props.path.join('.')]: !isCollapsed
              })
            }}
            title={`${props.valueKey}: {${Object.keys(props.value).join(', ')}}`}
          >
            {
              Object.entries(props.value).map(
                ([key, value]) => (
                  <CollapseObjectParser
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
      }
    case 'string':
      return onString(props)
    case 'number':
      return onNumber(props)
    case 'boolean':
      return onBoolean(props)
    default:
      return onUndefined(props)
  }
}

export default CollapseObject
