import React from 'react';
import { Link } from 'react-router-dom';

import NavLeft from './NavLeft';
import NavRight from './NavRight';

const NavBar = () => {
  let headerClass = ['navbar', 'pcoded-header', 'navbar-expand-lg', 'navbar-default'];

  let collapseClass = ['collapse navbar-collapse'];

  let navBar = (
    <React.Fragment>
      <div className="m-header">
        <Link to="#">
          <span />
        </Link>
        <Link to="#" className="b-brand">
          <div className="b-bg">
            <i className="feather icon-trending-up" />
          </div>
          <span className="b-title">Datta Able</span>
        </Link>
      </div>
      <div className={collapseClass.join(' ')}>
        <NavLeft />
        <NavRight />
      </div>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <header className={headerClass.join(' ')}>{navBar}</header>
    </React.Fragment>
  );
};

export default NavBar;
