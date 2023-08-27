import { useState, useEffect } from 'react';
import Navigation from '../../molecules/Navigation/Navigation';
import './Header.scss';
import CloseIcon from '../../atoms/Icons/CloseIcon';
import MenuIcon from '../../atoms/Icons/MenuIcon';
import classNames from 'classnames';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [shadowClass, setShadowClass] = useState('');

  const hasShadow = (setShadowClass) => {
    window.onscroll = () => {
      setShadowClass(document.documentElement.scrollTop > 0 && 'shadow');
    };
  };

  const disableScroll = () =>
    isNavOpen
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'unset');

  useEffect(() => {
    disableScroll();
    hasShadow(setShadowClass);
  }, [isNavOpen]);

  return (
    <div className={classNames('header-container', shadowClass)}>
      <header className="header">
        <div className="logo">
          <a href="/">Aesthetic</a>
        </div>
        <button onClick={() => setIsNavOpen(!isNavOpen)} className="nav-btn">
          {isNavOpen ? <CloseIcon size="25px" /> : <MenuIcon />}
        </button>
        <Navigation navOpen={isNavOpen} handleNavOpen={() => setIsNavOpen(false)} />
      </header>
    </div>
  );
};

export default Header;
