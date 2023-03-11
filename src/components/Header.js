import React from 'react';
import { Typography } from '@mui/material'
import { Box } from '@mui/system'


const Header = () => {
  return (
    <div>
      <Box sx={{display:'flex', justifyContent:'space-between',alignItems:'center', padding:'2rem 0'}}>
          <Typography variant="h4">Most Starred Repos</Typography>
      </Box>
    </div>
  )
}

export default Header;
