import React from 'react';
import { Typography, Box, Button } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

function UnderConstruction() {
  return (
    <Box
      className="fixed inset-0 flex flex-col justify-center items-center text-center p-8 z-50"
      sx={{
        backgroundColor: '#1E1E1F',
        color: 'white',
      }}
    >
      <Typography variant="h4" className="text-amber-500 mb-4">
        Sorry, this website is not yet hosted.
      </Typography>
      <Typography variant="body1" sx={{ color: 'gray', maxWidth: '600px', mb: 4 }}>
        This portfolio is currently under development and not yet deployed.
        However, you can check out all the code and project files on GitHub.
      </Typography>
      
      <Button
        variant="contained"
        startIcon={<GitHubIcon />}
        href="https://github.com/satya955699/" 
        target="_blank"
        sx={{ 
          backgroundColor: '#3C3C3D',
          color: 'white',
          '&:hover': {
            backgroundColor: '#4C4C4D',
          },
        }}
      >
        View Code on GitHub
      </Button>
    </Box>
  );
}

export default UnderConstruction;