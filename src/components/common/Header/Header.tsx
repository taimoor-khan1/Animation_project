import React from 'react';

import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

import { useModal } from '../../../contexts/modal';
import MenuButton from '../MenuButton';
import Logo from '../Logo';
import SearchButton from '../SearchButton';


const HeaderContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
}));

const Header = () => {
  const { showModal } = useModal();
  return (
    <HeaderContainer id="outer-container">
      <MenuButton />
      <Logo src={require('../../../assets/img/logo.png')} alt="logo" />
      <SearchButton onClick={showModal} />
    </HeaderContainer>
  )
};

export default Header;
