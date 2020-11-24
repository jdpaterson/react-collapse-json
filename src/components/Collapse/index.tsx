import React from 'react'
import { ChevronDownIcon, ChevronRightIcon } from '@primer/styled-octicons'
import { Box, Paragraph } from '../Base'

interface ICollapse {
  isCollapsed: boolean,
  onCollapse: () => void,
  title: string
}
const Collapse: React.FunctionComponent<ICollapse> = ({
  children,
  isCollapsed,
  onCollapse,
  title
}):JSX.Element => {
  return (
    <Box
      data-test-id="collapseContainer"
      display="flex"
      flexDirection="column"
      justifyContent="flex-start"
      ml={3}
    >
      <Box
        alignItems="center"
        display="flex"
        justifyContent="flex-start"
        onClick={(e) => {
          e.preventDefault()
          onCollapse()
        }}
      >
        <Box>
          {
            isCollapsed ? (
              <ChevronDownIcon />
            ) : (
              <ChevronRightIcon />
            )
          }
        </Box>
        <Box ml={2}>
          <Paragraph>{title}</Paragraph>
        </Box>
      </Box>
      {
        isCollapsed && children
      }
    </Box>
  )
}

export default Collapse