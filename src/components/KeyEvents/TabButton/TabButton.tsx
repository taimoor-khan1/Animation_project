import Tab from '@mui/material/Tab';
import { styled } from '@mui/material/styles';

const TabButton = styled(Tab)(({ theme }) => ({
  color: 'white',
  fontSize: '1rem',
  paddingLeft: '40px',
  alignItems: 'flex-start',
  '&.Mui-selected': {
    color: theme.palette.primary,
    backgroundColor: 'white',
    fontSize: '1.5rem',
    paddingLeft: '40px',
  }
}));

export default TabButton;
