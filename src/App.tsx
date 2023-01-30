import React from 'react';
import 'animate.css';
import SearchDialog from './components/common/SearchDialog';
import { ModalProvider } from './contexts/modal';

import Router from './Routes';

function App() {
  return (
    <ModalProvider>
      <Router />
      <SearchDialog />
    </ModalProvider>
  );
}

export default App;
