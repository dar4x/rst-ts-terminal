import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from 'src/layouts/MainLayout';
import ChangePin from 'src/pages/ChangePin';
import DocumentationPage from 'src/pages/DocumentationPage';
import PinPage from 'src/pages/PinPage';
import PrivilegesPage from 'src/pages/PrivilegesPage';
import RequirementPage from 'src/pages/RequirementPage';
import ServicesPage from 'src/pages/ServicesPage';
import StartPage from 'src/pages/StartPage';
import UnlockPage from 'src/pages/UnlockPage';
import VerificationPage from 'src/pages/VerificationPage';

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<StartPage />} />
        <Route path="/terminal/services" element={<ServicesPage />} />
        <Route path="/terminal/requirement" element={<RequirementPage />} />
        <Route path="/terminal/documentation" element={<DocumentationPage />} />
        <Route path="/terminal/privileges" element={<PrivilegesPage />} />
        <Route path="/terminal/verification" element={<VerificationPage />} />
        <Route path="/terminal/changepin" element={<ChangePin />} />
      </Route>
      <Route path="/terminal/pin" element={<PinPage />} />
      <Route path="/terminal/unLock" element={<UnlockPage />} />
    </Routes>
  );
};

export default MainRoutes;
