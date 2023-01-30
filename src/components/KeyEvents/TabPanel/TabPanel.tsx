import React from 'react';

import { styled } from '@mui/material/styles';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const PanelContainer = styled('div')(({ theme }) => ({
  flexGrow: 1,
  paddingLeft: theme.spacing(5.5),
  display: 'grid',
  gridGap: theme.spacing(2),

  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: 'repeat(1, 1fr)'
  },
  [theme.breakpoints.between('sm', 'md')]: {
    gridTemplateColumns: 'repeat(2, 1fr)'
  },
  [theme.breakpoints.between('md', 'lg')]: {
    gridTemplateColumns: 'repeat(4, 1fr)'
  },
  [theme.breakpoints.between('lg', 'xl')]: {
    gridTemplateColumns: 'repeat(5, 1fr)'
  },
  [theme.breakpoints.up('xl')]: {
    gridTemplateColumns: 'repeat(6, 1fr)'
  },
}));

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <PanelContainer
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && children}
    </PanelContainer>
  );
}

export default TabPanel;