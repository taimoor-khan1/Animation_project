import React from 'react';

import { IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';

import SearchIcon from '../SearchIcon';

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  color: 'black',
  margin: '12px 17px'
}));

interface ISearchButtonProps {
  onClick: () => void,
}

const SearchButton : React.FC<ISearchButtonProps> = ({ onClick }) => {
  return (
    <StyledIconButton onClick={onClick}>
      <SearchIcon />
    </StyledIconButton>
  );
};

export default SearchButton;
