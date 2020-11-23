import { ReactText } from 'react'

export type TParseCollapse = (props: TCollapseObject) => JSX.Element | JSX.Element[]
// export type TCollapseObject = {
//   // collapser: TParseCollapse,
//   onBoolean: TParseCollapse,
//   onNumber: TParseCollapse,
//   onString: TParseCollapse,
//   onUndefined: TParseCollapse,
//   parseCollapse: TParseCollapse
//   path: Array<ReactText>,
//   value: any,
//   valueKey?: ReactText
// }
export type TCollapseObject = {
  collapser?: TParseCollapse,
  onBoolean?: TParseCollapse,
  onNumber?: TParseCollapse,
  onString?: TParseCollapse,
  onUndefined?: TParseCollapse,
  parseCollapse?: TParseCollapse
  path?: Array<ReactText> | undefined,
  value: any,
  valueKey?: ReactText
}