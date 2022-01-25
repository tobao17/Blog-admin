import React from 'react';
import { Link } from 'react-router-dom';

const NavLogo = () => {
  return (
    <React.Fragment>
      <div className="navbar-brand header-logo">
        <Link to="#" className="b-brand">
          <div className="b-bg">
            <i className="feather icon-trending-up" />
          </div>
          <span className="b-title">Admin Blog</span>
        </Link>
        <Link to="#">
          <span />
        </Link>
      </div>
    </React.Fragment>
  );
};

export default NavLogo;
