import { Box, Typography } from '@mui/material'
import React from 'react'
import { theme } from '../theme'

const Footer = () => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center',justifyContent:'center', gap: 2,bgcolor:'#1976d2',height:100 }}>
      <Typography variant='h6' fontWeight={700} color='white'>ORDA</Typography>
    </Box>
  )
}

export default Footer
