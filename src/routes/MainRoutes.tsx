import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from 'src/layouts/MainLayout';
import PinPage from 'src/pages/PinPage';
import StartPage from 'src/pages/StartPage';

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<StartPage />} />
      </Route>
      <Route path="/terminal/pin" element={<PinPage />} />
    </Routes>
  );
};

export default MainRoutes;
