import React from 'react';


import { styled } from '@mui/material/styles';
import 'animate.css';
import Container from '../components/common/Container';

const MarkImg = styled('img')({
  // width: '20.8%',
  width: '285px',
  position: 'absolute',
  left: '40%',
  display: "flex",
  top: '11.88%',
  transform: 'translate(-50%)',
});

const DescriptionBox = styled('div')({
  width: '395px',
  fontSize: '1.5rem',
  fontWeight: '300',
  textAlign: 'center',
  color: '#fff',
  letterSpacing: '1px',
  lineHeight: '1.5',
  position: 'absolute',
  left: '37%',
  top: '54.55%',
  transform: 'translate(-50%)',
});

const YearText = styled('div')({
  fontSize: '4.5rem',
  fontWeight: 'normal',
});

const Landing = () => {
  return (

    <Container color='#c5202c' >
      <MarkImg className='animate__animated animate__backInDown' src={require('../assets/img/mark.png')} alt='mark' />
      <DescriptionBox className='animate__animated animate__backInUp'>
        <YearText >
          1973-2023
        </YearText>
        50 years of building the European trade union movement
      </DescriptionBox>
    </Container>


  );
};

export default Landing;
