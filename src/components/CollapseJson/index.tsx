import React from 'react'
import uuid from 'react-uuid'
import { Box, Paragraph } from '../Base'
import Collapse from '../Collapse'

interface ICollapseJson {
  json: Record<string, unknown>
}
const CollapseJson: React.FunctionComponent<ICollapseJson> = ({
  json,
}):JSX.Element => {
  const collapseArray = (key:string, arr: Array<unknown>) =>
    arr.map(
      (arrItem, index) => (
        <Collapse
          key={uuid()}
          title={`${key}[${index}]`}
        >
          { parseVal(`${key}[${index}]`, arrItem) }
        </Collapse>
      )
    )

  const collapseObject = (_key:string, obj: Record<string, unknown>) =>
    Object.entries(obj).map(
      ([key, value]) => (
        <Collapse
          key={uuid()}
          title={key}
        >
          { parseVal(key, value) }
        </Collapse>
      )
    )

  const parseVal = (key: string, val: any) => {
    switch (typeof(val)) {
      case 'object':
        if(Array.isArray(val)) {
          return collapseArray(key, val)
        } else {
          return collapseObject(key, val)
        }
      case 'string':
      case 'number':
        return (
          <Box ml={5}>
            <Paragraph>{val}</Paragraph>
          </Box>
        )
      default:
        console.log("typeof not found: ", typeof(val), key, val)
        return (
          <Box ml={5}>
            <Paragraph>{val.toString()}</Paragraph>
          </Box>
        )
    }
  }

  return (
    <Box display="flex" flexDirection="column">
      {
        Object.entries(json).map(([key, value]) => {
          return (
            <Collapse
              key={uuid()}
              title={key}
            >
              { parseVal(key, value) }
            </Collapse>
          )
        })
      }
    </Box>
  )
}

export default CollapseJson
