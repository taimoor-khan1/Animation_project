import React from 'react';

import {
  Box,
  Dialog,
  Divider,
  IconButton,
  InputAdornment,
  List,
  ListItem,
  ListItemText,
  TextField,
} from '@mui/material';
import { styled } from '@mui/material/styles';

import SearchIcon from '../SearchIcon';
import { useModal } from '../../../contexts/modal';
import { Close } from '@mui/icons-material';

const StyledDialog = styled(Dialog)(({ theme }) => ({
  opacity: '0.9',
}));

const SearchInput = styled(TextField)(({ theme }) => ({
  '& .MuiInputBase-root': {
    paddingBottom: theme.spacing(1.25),
  },
}));

const DialogContainer = styled(Box)(({ theme }) => ({
  width: '500px',
  margin: 'auto',
}));

const CloseButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  right: '0',
  margin: '12px 17px',
  color: 'black',
}));

const SearchDialog = () => {
  const { isOpen, hideModal } = useModal();

  return (
    <StyledDialog fullScreen open={isOpen} onClose={hideModal}>
      <CloseButton onClick={hideModal}>
        <Close />
      </CloseButton>
      <DialogContainer>
        <SearchInput
          fullWidth
          variant="standard"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <List>
          <ListItem button>
            <ListItemText primary="Phone ringtone" secondary="Titania" />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText
              primary="Default notification ringtone"
              secondary="Tethys"
            />
          </ListItem>
        </List>
      </DialogContainer>
    </StyledDialog>
  );
};

export default SearchDialog;
