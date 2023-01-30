import React from 'react';
import { useNavigate } from 'react-router-dom'
import { Box, Card, CardContent, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledCardContent = styled(CardContent)(({ theme }) => ({
  padding: '20px',
  position: 'relative',
  zIndex: 1,

}));

const EventTitle = styled(Typography)(({ theme }) => ({
  fontSize: '3rem'
}));

const EventDescription = styled(Typography)(({ theme }) => ({
  fontSize: '1rem',
  textAlign: 'right',
}));

const Badge = styled(Box)(({ theme }) => ({
  position: 'absolute',
  right: '0',
  top: '0',
  width: '30px',
  height: '30px',
  zIndex: 2,
  transform: 'translate(50%, -50%) rotate(45deg)',
  backgroundColor: '#ec008c',
}));
const RedBox = styled(Box)(({ theme }) => ({
  position: 'absolute',
  right: '0',
  top: '0',
  width: '100%',
  height: '100%',
  borderRadius: "10px",
  zIndex: 1

}));

interface IEventCardProp {
  title: string;
  description: string;
};

const EventCard: React.FC<IEventCardProp> = ({ title, description }) => {
  const history = useNavigate()
  const [bgColor, setbgColor] = React.useState<string>("")
  const [active, setActive] = React.useState<boolean>(false)
  const [textColor, setTextColor] = React.useState<string>("")

  return (
    <Card variant="outlined" onClick={() => {
      const data = { title, description }
      history("/keyevents/:event")
    }}
      onMouseEnter={() => {
        setbgColor("red")
        setTextColor("white")
        setActive(true)
      }}
      onMouseLeave={() => {
        setbgColor("white")
        setActive(false)
        setTextColor("black")
      }}
    >
      <StyledCardContent className={active ? "animate__animated animate__fadeInTopRight" : ""} style={{ backgroundColor: bgColor }}>
        <RedBox />
        <EventTitle style={{ color: textColor, zIndex: 2 }} >{title}</EventTitle>
        <EventDescription style={{ color: textColor }} dangerouslySetInnerHTML={{ __html: description }} />
        <Badge />
      </StyledCardContent>
    </Card>

  );
};

export default EventCard;
