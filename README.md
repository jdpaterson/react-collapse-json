# React Collapse Object

## Installation

`npm install react-collapse-json`

## Use

```javascript
import { CollapseJson } from 'react-collapse-json'

const someRandomJson = {
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
  <CollapseJson json={someRandomJson} />
)

```
