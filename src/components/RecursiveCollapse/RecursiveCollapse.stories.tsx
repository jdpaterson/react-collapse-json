import React from 'react'
import { Meta } from '@storybook/react/types-6-0';
import RecursiveCollapse from './index'

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
export const Primary = () => <RecursiveCollapse contentType={json} />

export default {
  title: 'Components/Button',
  component: Primary,
} as Meta;