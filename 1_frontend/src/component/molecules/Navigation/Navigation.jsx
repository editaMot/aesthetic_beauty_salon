import { useMemo } from 'react';
import routes from '../../../utils/routes';
import { Link } from 'react-router-dom';
import './Navigation.scss';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useAuth } from '../../../context/AuthContext';

const Navigation = ({ navOpen, handleNavOpen }) => {
  const { currentUser, logout } = useAuth();

  const filteredRoutes = useMemo(() => {
    return Object.values(routes).filter(({ nav, isPrivate }) => {
      return (!isPrivate && nav) || (currentUser.isAuthenticated && nav);
    });
  }, [currentUser]);

  const handleLogout = () => {
    logout();
  };

  const renderNavItems = () => {
    return filteredRoutes.map(({ path, title }) => (
      <li key={path} className="nav__list--item">
        <Link to={path}>{title}</Link>
      </li>
    ));
  };

  return (
    <nav className={classNames('nav', !navOpen && 'toggleNav')} onClick={handleNavOpen}>
      <ul className="nav__list">
        {renderNavItems()}
        <li
          key={currentUser.isAuthenticated ? 'logout' : 'login'}
          className="nav__list--item"
        >
          {currentUser.isAuthenticated ? (
            <Link to="/login" onClick={handleLogout}>
              Log Out
            </Link>
          ) : (
            <Link to="/login">Log in</Link>
          )}
        </li>
      </ul>
    </nav>
  );
};

Navigation.propTypes = {
  navOpen: PropTypes.bool,
  handleNavOpen: PropTypes.func,
};

export default Navigation;
