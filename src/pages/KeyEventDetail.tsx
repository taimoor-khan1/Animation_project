import React from 'react';

import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

import Container from '../components/common/Container';

const MarkContainer = styled(Box)(({ theme }) => ({
  position: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
}));

const MarkImg = styled('img')({
  width: '285px'
});

const EventTitle = styled(Typography)(({ theme }) => ({
  fontSize: '7.5rem',
  color: 'white',
}));

const BackgroundImg = styled(Box)(({ theme }) => ({
  backgroundColor: 'black',
  height: '90vh',
}));

const KeyEventDetail = () => {
  return (
    <Container color='red'>
      <Box>
        <BackgroundImg />
        <MarkContainer>
          <MarkImg src={require('../assets/img/mark.png')} alt='mark' />
          <EventTitle>1973</EventTitle>
        </MarkContainer>
      </Box>
    </Container>
  );
};

export default KeyEventDetail;
