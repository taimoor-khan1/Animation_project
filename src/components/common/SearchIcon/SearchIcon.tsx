import React from 'react';

import { SvgIcon } from '@mui/material';

import { ReactComponent as Search } from '../../../assets/icon/search.svg';

const SearchIcon = () => {
  return (
    <SvgIcon component={Search} />
  );
};

export default SearchIcon;
