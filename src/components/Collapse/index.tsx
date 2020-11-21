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
    <Box display="flex" flexDirection="column" ml={5}>
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
        <Paragraph>{title}</Paragraph>
      </Box>
      <Box>
        {
          collapsed ? (
            <ChevronDownIcon />
          ) : (
            <ChevronRightIcon />
          )
        }
      </Box>
    </Box>
      {
        collapsed && children
      }
    </Box>
  )
}

export default Collapse