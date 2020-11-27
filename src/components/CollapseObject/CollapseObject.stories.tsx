import React, { useState } from 'react'
import { Meta } from '@storybook/react/types-6-0';
import { Box } from '~/components'
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
export const Primary = () => {
  const [finalState, setFinalState] = useState(JSON.stringify({}))
  return (
    <Box display="flex" flexDirection="column">
      <CollapseObject
        onSubmit={(val) => setFinalState(JSON.stringify(val))}
        value={object}
      />
      <code>
        {finalState}
      </code>
    </Box>
)}

export default {
  title: 'Components/Button',
  component: Primary,
} as Meta;