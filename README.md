# React Collapse Object

## Installation

`npm install react-collapse-object`

## Use

```javascript
import { CollapseObject } from 'react-collapse-object'

const someRandomObject = {
  value: "VALUE",
  sys: {
    id: 123,
    type: "post"
  },
  fields: [
    {
      sys: {
        id: 234,
        type: "string"
      },
      value: "I'm a string",
      isNotBoolean: true
    }
  ]
}

const Component = () => (
  <CollapseObject object={someRandomObject} />
)

```
