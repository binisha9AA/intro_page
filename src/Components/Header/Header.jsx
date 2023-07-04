import React from 'react';
import Navigation from '../Navigation/Navigation';
import Navi from '../Navigation/Navi';

const Header = () => {
  return (
    <header className="site_header">
      <div className="h-group py-14">
        {/* <Navigation /> */}
        <Navi />
      </div>
    </header>
  );
};

export default Header;
