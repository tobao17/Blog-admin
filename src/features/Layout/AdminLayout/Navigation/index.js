import React from 'react';
import useWindowSize from '../../../../hooks/useWindowSize';

import NavLogo from './NavLogo';
import NavContent from './NavContent';

const menuItems = {
  items: [
    {
      id: 'navigation',
      title: 'Navigation',
      type: 'group',
      icon: 'icon-navigation',
      children: [
        {
          id: 'dashboard',
          title: 'Dashboard',
          type: 'item',
          url: '/app/dashboard/default',
          icon: 'feather icon-home',
        },
      ],
    },
    {
      id: 'ui-forms',
      title: 'Thống Kê',
      type: 'group',
      icon: 'icon-group',
      children: [
        {
          id: 'forms',
          title: 'Forms',
          type: 'item',
          url: '/forms/form-basic',
          icon: 'feather icon-file-text',
        },
        {
          id: 'bootstrap',
          title: 'Bootstrap Table',
          type: 'item',
          url: '/tables/bootstrap',
          icon: 'feather icon-server',
        },
      ],
    },
    {
      id: 'chart-maps',
      title: 'Chart & Maps',
      type: 'group',
      icon: 'icon-charts',
      children: [
        {
          id: 'charts',
          title: 'Charts',
          type: 'item',
          url: '/charts/nvd3',
          icon: 'feather icon-pie-chart',
        },
        {
          id: 'maps',
          title: 'Maps',
          type: 'item',
          url: '/maps/google-map',
          icon: 'feather icon-map',
        },
      ],
    },
    {
      id: 'pages',
      title: 'Pages',
      type: 'group',
      icon: 'icon-pages',
      children: [
        {
          id: 'auth',
          title: 'Authentication',
          type: 'collapse',
          icon: 'feather icon-lock',
          children: [
            {
              id: 'signup-2',
              title: 'Sign UP (template)',
              type: 'item',
              url: '/auth/signup-2',
              target: true,
              breadcrumbs: false,
            },
            {
              id: 'signin-2',
              title: 'Sign IN (template)',
              type: 'item',
              url: '/auth/signin-2',
              target: true,
              breadcrumbs: false,
            },
          ],
        },
        {
          id: 'sample-page',
          title: 'Sample Page',
          type: 'item',
          url: '/sample-page',
          classes: 'nav-item',
          icon: 'feather icon-sidebar',
        },
      ],
    },
    {
      id: 'resources',
      title: 'Resources',
      type: 'group',
      icon: 'icon-pages',
      children: [
        {
          id: 'product-page',
          title: 'Download Product',
          type: 'item',
          url: 'https://appseed.us/product/react-node-js-datta-able',
          classes: 'nav-item',
          icon: 'feather icon-download',
          target: true,
          external: true,
        },
        {
          id: 'support',
          title: 'Get Support',
          type: 'item',
          icon: 'feather icon-help-circle',
          classes: 'nav-item',
          url: 'https://appseed.us',
          target: true,
          external: true,
        },
      ],
    },
  ],
};

const Navigation = () => {
  // const configContext = useContext(ConfigContext);
  //const { collapseMenu } = configContext.state;
  const windowSize = useWindowSize();

  let navClass = [
    'pcoded-navbar',
    'menupos-static',
    'menu-dark',
    'navbar-default',
    'brand-default',
    'drp-icon-style1',
    'menu-item-icon-style1',
    'active-default',
    'title-default',
  ];

  let navStyle;

  let navBarClass = ['navbar-wrapper'];

  let navContent = (
    <div className={navBarClass.join(' ')}>
      <NavLogo />
      <NavContent navigation={menuItems.items} />
    </div>
  );
  if (windowSize.width < 992) {
    navContent = (
      <div className="navbar-wrapper">
        <NavLogo />
        {/* <NavContent navigation={navigation.items} /> */}
        {/* <NavContent navigation={menuItems.items} /> */}
      </div>
    );
  }
  return (
    <React.Fragment>
      <nav className={navClass.join(' ')} style={navStyle}>
        {navContent}
      </nav>
    </React.Fragment>
  );
};

export default Navigation;
