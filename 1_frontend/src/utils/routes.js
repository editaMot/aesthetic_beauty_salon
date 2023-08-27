const routes = {
  home: {
    path: '',
    title: 'About us',
    getElement: () => import('../pages/Home'),
    nav: true,
    isPrivate: false,
  },
  registration: {
    path: 'registration',
    title: 'Registration',
    getElement: () => import('../pages/Registration'),
    nav: true,
    isPrivate: false,
  },
  list: {
    path: 'clients-list',
    title: 'Clients list',
    getElement: () => import('../pages/List'),
    nav: true,
    isPrivate: true,
  },
  login: {
    path: 'login',
    title: 'Log In',
    getElement: () => import('../pages/Login'),
    nav: false,
    isPrivate: false,
  },
  pageNotFound: {
    path: '*',
    title: 'Page not found',
    getElement: () => import('../pages/PageNotFound'),
    nav: false,
    isPrivate: false,
  },
};

export default routes;
