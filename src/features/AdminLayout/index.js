import React, { useRef } from 'react';

import Navigation from './Navigation';
import NavBar from './NavBar';
import SidebarActions from '../Common/SidebarActions';
import SignIn from '../Authentication/SignIn/index';
import Loading from '../Common/Loading';
import useWindowSize from '../../hooks/useWindowSize';
import BlogPosts from '../BlogPosts/BlogPosts';

const AdminLayout = ({ children }) => {
  const windowSize = useWindowSize();
  const ref = useRef();

  let mainClass = ['pcoded-wrapper'];

  let common = (
    <React.Fragment>
      <Navigation />
    </React.Fragment>
  );

  let mainContainer = (
    <React.Fragment>
      <NavBar />
      <div className="pcoded-main-container">
        <div className={mainClass.join(' ')}>
          <div className="pcoded-content">
            <div className="pcoded-inner-content">
              {
                <>
                  <Loading></Loading>
                  <BlogPosts></BlogPosts>
                  {/* <SidebarActions></SidebarActions> */}
                </>
              }
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );

  if (windowSize.width < 992) {
    let outSideClass = ['nav-outside'];
    if (1) {
      outSideClass = [...outSideClass, 'mob-backdrop'];
    }

    common = (
      <div className={outSideClass.join(' ')} ref={ref}>
        {common}
      </div>
    );

    mainContainer = <div className="pcoded-outside">{mainContainer}</div>;
  }

  return (
    <React.Fragment>
      {common}
      {mainContainer}
    </React.Fragment>
  );
};

export default AdminLayout;
