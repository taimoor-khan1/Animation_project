import React, { useEffect } from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import EventsTab from '../components/KeyEvents/EventsTab';


const Container = styled(Box)(({ theme }) => ({
  margin: '0 25px 25px 25px',
  position: 'relative',
  // backgroundImage: `linear-gradient(302deg, rgb(37, 196, 239, 0.6), rgb(112, 83, 255, 0.8));`,
  backgroundPosition: '0 0',
  backgroundRepeat: 'no-repeat',
  overflow: 'hidden',
}));

const CircularShape = styled('img')({
  position: 'absolute',
  right: 0,
  top: 0,

  zIndex: -1,
  minWidth: '126%',
});



const KeyEvents = () => {
  const [year, setyear] = React.useState<number>(0)
  useEffect(() => {

  }, [year])

  const getValue = (getyear: number): void => {
    setyear(getyear)
  }

  return (
    <Container >

      {year === 0 && <CircularShape src={require('../assets/img/bg-colour-1.png')} className={year === 0 ? `animate__animated animate__fadeInRight` : ""} alt="circular-shape" />}
      {year === 1 && <CircularShape src={require('../assets/img/bg-colour-2.png')} className={year === 1 ? `animate__animated animate__fadeInTopLeft` : ""} alt="circular-shape" />}
      {year === 2 && <CircularShape src={require('../assets/img/bg-colour-3.png')} className={year === 2 ? `animate__animated animate__fadeInTopLeft` : ""} alt="circular-shape" />}
      {year === 3 && <CircularShape src={require('../assets/img/bg-colour-4.png')} className={year === 3 ? `animate__animated animate__fadeInTopLeft` : ""} alt="circular-shape" />}
      {year === 4 && <CircularShape src={require('../assets/img/bg-colour-0.png')} className={year === 4 ? `animate__animated animate__fadeInTopLeft` : ""} alt="circular-shape" />}


      {/* <CircularShape src={require('../assets/img/circular-shape.png')} alt="circular-shape" /> */}
      <EventsTab getyear={getValue} />
    </Container>
  );
};

export default KeyEvents;
