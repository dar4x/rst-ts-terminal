import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from 'src/components/Navbar';
import background from 'src/assets/images/bg.png';

const MainLayout = () => {
  return (
    <div
    // style={{
    //   backgroundImage: `url(${background})`,
    //   backgroundSize: '100%',
    //   backgroundRepeat: 'no-repeat',
    //   backgroundPosition: 'center',
    //   width: '100vw',
    //   height: '100vh',
    //   zIndex: '-1',
    // }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', flex: '1' }}>
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
