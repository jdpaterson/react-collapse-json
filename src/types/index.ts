export type TParseCollapse = (props: TCollapseObjectProps) => JSX.Element | JSX.Element[]
export type TCollapseObject = {
  collapser: TParseCollapse,
  onBoolean: TParseCollapse,
  onNumber: TParseCollapse,
  onString: TParseCollapse,
  onUndefined: TParseCollapse,
  parseCollapse: TParseCollapse
  path: Array<string | number>,
  value: any,
  valueKey?: string
}
export type TCollapseObjectProps = {
  collapser?: TParseCollapse,
  onBoolean?: TParseCollapse,
  onNumber?: TParseCollapse,
  onString?: TParseCollapse,
  onUndefined?: TParseCollapse,
  parseCollapse?: TParseCollapse
  path?: Array<string | number>,
  value: any,
  valueKey?: string | number
}