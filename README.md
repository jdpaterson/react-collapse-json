# React Collapse Object

## Description

A simple collapsible react component to explore and select fields from a javascript object

## Installation

`npm install react-collapse-object`

## Use

![ADextension_2FA_Configure_Step4](./docs/Components-Button-Primary-Storyb.gif)

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
  <CollapseObject
    object={someRandomObject}
    onSubmit={(val) => console.log(val)}
  />
)

```

## Props

`object`: A Javascript object.
`onSubmit`: A function provided with the selected state as its argument.