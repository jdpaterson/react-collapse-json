import React from 'react'
import { CollapseJson } from '../components'

const json = {
  testStr: "str",
  testArray: [
    {
      id: 123,

    }
  ],
  testObject: {
    id: 123,
    strChildren: [
      "str1",
      "str2"
    ]
  }
}
export const Primary = () => <CollapseJson json={json} />