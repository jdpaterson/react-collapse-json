import React from 'react'
import { Meta } from '@storybook/react/types-6-0';
import CollapseObject from '~/components/CollapseObject'

const object = {
  testStr: "str",
  testNum: 123,
  testBool: true,
  testUndefined: undefined,
  testObject: {
    id: 123,
    testArray: [
      "str",
      123,
      true,
      undefined,
      {
        testObject: {
          id: 123,
          testArray: [
            "str",
            123,
            true,
            undefined
          ]
        }
      },
    ]
  },
  testArray: [
    "str",
    123,
    undefined
  ],
}
export const Primary = () => (
  <CollapseObject
    value={object}
  />
)

export default {
  title: 'Components/Button',
  component: Primary,
} as Meta;