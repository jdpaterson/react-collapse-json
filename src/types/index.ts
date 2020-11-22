export type TParseCollapse = (objKey: string, objValue: unknown) => JSX.Element | JSX.Element[]
export type TFinalValue = (key: string, value: string | number | boolean) => JSX.Element
export interface ICollapseObject {
  collapser?: TParseCollapse,
  object: Record<string, unknown>,
  onBoolean?: TFinalValue,
  onNumber?: TFinalValue,
  onString?: TFinalValue,
  onUndefined?: TFinalValue,
  rootKey?: string
}