import React, { useState } from 'react'
import { ChevronDownIcon, ChevronRightIcon } from '@primer/styled-octicons'
import { Box, Paragraph } from '../Base'

interface ICollapse {
  title: string
}
const Collapse: React.FunctionComponent<ICollapse> = ({
  children,
  title
}):JSX.Element => {
  const [collapsed, setCollapsed] = useState(false)
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
          setCollapsed(!collapsed)
        }}
      >
        <Box>
          {
            collapsed ? (
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
        collapsed && children
      }
    </Box>
  )
}

export default Collapse