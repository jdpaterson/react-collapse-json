import React from 'react'
import { ReactText } from 'react'

export type TCollapseObjectParser = {
  collapseState: Record<string, Array<string>>,
  setCollapseState: React.Dispatch<React.SetStateAction<{}>>,
  onBoolean: React.FunctionComponent<TCollapseObjectParser>,
  onNumber: React.FunctionComponent<TCollapseObjectParser>,
  onString: React.FunctionComponent<TCollapseObjectParser>,
  onUndefined: React.FunctionComponent<TCollapseObjectParser>,
  path: Array<ReactText>,
  selectionState: Record<string, Array<string>>,
  setSelectionState: React.Dispatch<React.SetStateAction<{}>>,
  value: any,
  valueKey: ReactText
}
export type TCollapseObject = {
  onBoolean?: React.FunctionComponent<TCollapseObjectParser>,
  onNumber?: React.FunctionComponent<TCollapseObjectParser>,
  onString?: React.FunctionComponent<TCollapseObjectParser>,
  onUndefined?: React.FunctionComponent<TCollapseObjectParser>,
  value: any,
  valueKey?: ReactText
}