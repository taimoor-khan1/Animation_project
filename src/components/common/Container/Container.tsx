import React from 'react';

import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledBox = styled(Box)(({ theme }) => ({
  margin: '0 25px',
  height: '90vh',
  position: 'relative',
  alignItems: 'center',
  justifyContent: 'center',
  display: 'flex',
}));

interface IContainerProps {
  color?: string;
  children?: React.ReactNode;
}

const Container: React.FC<IContainerProps> = ({ color, children }) => {
  return (
    <StyledBox sx={{ backgroundColor: color }}>
      {children}
    </StyledBox>
  );
};

export default Container;
