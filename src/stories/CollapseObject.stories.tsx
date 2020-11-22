import React from 'react'
import CollapseObject from '~/components/CollapseObject'

const object = {
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
export const Primary = () => <CollapseObject object={object} />