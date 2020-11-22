import React from 'react'
import { Meta } from '@storybook/react/types-6-0';
import RecursiveCollapse from '~/components/CollapseObject'

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
export const Primary = () => <RecursiveCollapse object={object} />

export default {
  title: 'Components/Button',
  component: Primary,
} as Meta;