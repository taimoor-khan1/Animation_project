import React from 'react';

import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import { reveal as Menu } from 'react-burger-menu'
import './Sidebar.css';
const StyledIconButton = styled(IconButton)(({ theme }) => ({
  color: 'black',
  margin: '12px 17px',
  alignItems: 'center'

}));
const MarkImg = styled('img')({
  width: '100px',
  position: 'absolute',
  bottom: "50px",
  left: "40%",
  transform: 'translate(-50%)',
});
const MenuButton = () => {
  return (
    <StyledIconButton id="outer-container">
      {/* <MenuIcon /> */}

      < Menu  >
        <h1>Menu</h1>
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="keyEvent" className="menu-item" href="/keyevents">key Events</a>
        <a id="about" className="menu-item" href="/">About</a>
        <a id="Video Interview" className="menu-item" href="/">Video Interview</a>
        <MarkImg src={require('../../../assets/img/logo-1-red.png')} alt='logo' />
      </Menu >
    </StyledIconButton>
  )
}

export default MenuButton;
