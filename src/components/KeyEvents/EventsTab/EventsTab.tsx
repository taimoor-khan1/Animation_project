import * as React from 'react';
import 'animate.css';
import { Box, Tabs, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import EventCard from '../EventCard';
import TabButton from '../TabButton';
import TabPanel from '../TabPanel';


interface getValue {
  getyear: (arg: number) => void
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`, 'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const StyledTabs = styled(Tabs)(({ theme }) => ({
  border: 'none !important',
  '& .MuiTabs-indicator': {
    display: 'none'
  }
}));

const TabTitle = styled(Typography)(({ theme }) => ({
  fontSize: '2rem',
  paddingLeft: theme.spacing(5),
  color: 'white',
  marginBottom: '50px',
}));

const MarkImg = styled('img')(({ theme }) => ({
  width: '86px',
  marginLeft: theme.spacing(5),
  position: 'absolute',
  bottom: 0,
}));


const eventsData = [
  {
    title: '1973',
    description: 'ETUC Constituent <br />Assembly and <br />Founding Congress <br />in Brussels'
  },
  {
    title: '1973',
    description: 'ETUC Constituent <br />Assembly and <br />Founding Congress <br />in Brussels'
  },
  {
    title: '1973',
    description: 'ETUC Constituent <br />Assembly and <br />Founding Congress <br />in Brussels'
  },
  {
    title: '1973',
    description: 'ETUC Constituent <br />Assembly and <br />Founding Congress <br />in Brussels'
  },
  {
    title: '1973',
    description: 'ETUC Constituent <br />Assembly and <br />Founding Congress <br />in Brussels'
  },
  {
    title: '1973',
    description: 'ETUC Constituent <br />Assembly and <br />Founding Congress <br />in Brussels'
  },
  {
    title: '1973',
    description: 'ETUC Constituent <br />Assembly and <br />Founding Congress <br />in Brussels'
  },
  {
    title: '1973',
    description: 'ETUC Constituent <br />Assembly and <br />Founding Congress <br />in Brussels'
  },
  {
    title: '1973',
    description: 'ETUC Constituent <br />Assembly and <br />Founding Congress <br />in Brussels'
  },
  {
    title: '1973',
    description: 'ETUC Constituent <br />Assembly and <br />Founding Congress <br />in Brussels'
  },
  {
    title: '1973',
    description: 'ETUC Constituent <br />Assembly and <br />Founding Congress <br />in Brussels'
  },
  {
    title: '1973',
    description: 'ETUC Constituent <br />Assembly and <br />Founding Congress <br />in Brussels'
  },
  {
    title: '1973',
    description: 'ETUC Constituent <br />Assembly and <br />Founding Congress <br />in Brussels'
  },
  {
    title: '1973',
    description: 'ETUC Constituent <br />Assembly and <br />Founding Congress <br />in Brussels'
  },
  {
    title: '1973',
    description: 'ETUC Constituent <br />Assembly and <br />Founding Congress <br />in Brussels'
  },
]

const EventsTab: React.FC<getValue> = ({ getyear }) => {
  const [value, setValue] = React.useState(0);
  const [showScreen, setShowScreen] = React.useState(true);

  const handleClick = () => {
    setShowScreen(!showScreen);
  };

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  React.useEffect(() => {
    getyear(value)
  }, [value])
  React.useEffect(() => {
    if (showScreen === false) {
      setTimeout(() => {
        setShowScreen(true)
      }, 100);
    }
  }, [showScreen])

  return (

    <Box
      sx={{
        flexGrow: 1, display: 'flex', padding: '40px 40px 40px 0'
      }}
    >
      <Box sx={{ position: 'relative' }} >
        <TabTitle>
          Key <br />Events
        </TabTitle>
        {showScreen &&

          <StyledTabs
            orientation='vertical'
            value={value}
            onChange={handleChange}
            aria-label='Vertical tabs example'
            sx={{ borderRight: 1, borderColor: 'divider' }}
            onClick={handleClick}
          >

            <TabButton label='1973-82' {...a11yProps(value)} className={value === 0 ? `bar animate__animated animate__slideInLeft` : ""} />
            <TabButton label='1983-92' {...a11yProps(value)} className={value === 1 ? `bar animate__animated animate__slideInLeft` : ""} />
            <TabButton label='1993-02' {...a11yProps(value)} className={value === 2 ? `bar animate__animated animate__slideInLeft` : ""} />
            <TabButton label='2003-12' {...a11yProps(value)} className={value === 3 ? `bar animate__animated animate__slideInLeft` : ""} />
            <TabButton label='2013-22' {...a11yProps(value)} className={value === 4 ? `bar animate__animated animate__slideInLeft` : ""} />
          </StyledTabs>
        }

        <MarkImg src={require('../../../assets/img/mark.png')} alt='mark' />
      </Box>
      <TabPanel value={value} index={value} >
        {eventsData.map((data, index) => (
          <EventCard key={index} title={data.title} description={data.description} />
        ))}
      </TabPanel>
    </Box >
  );
}
export default EventsTab;