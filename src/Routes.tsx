import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import AppLayout from './components/common/AppLayout';
import KeyEvents from './pages/KeyEvents';
import KeyEventDetail from './pages/KeyEventDetail';
import Landing from './pages/Landing';

const Router = () => {
  return (
    <BrowserRouter >
      <Suspense fallback={null}>

        <Routes >
          <Route path="/" element={<AppLayout />}>
            <Route path="/" element={<Landing />} />
            <Route path="/keyevents/" element={<KeyEvents />} />
            <Route path="/keyevents/:event" element={<KeyEventDetail />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
