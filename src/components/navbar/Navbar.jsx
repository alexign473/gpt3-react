import React, { useState } from 'react';
import { RiCloseLine, RiMenu3Line } from 'react-icons/ri';

// project imports
import styles from './navbar.module.scss';
import logo from '../../assets/images/logo.svg';

export const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className={styles.navbar}>
      <div className={styles.navWrapper}>
        <div className={styles.logo}>
          <img src={logo} alt='logo' />
        </div>
        <nav className={styles.nav}>
          <Menu />
        </nav>
      </div>
      <div className={styles.sign}>
        <span>Sign In</span>
        <button type='button'>Sign Up</button>
      </div>

      <div className={styles.menu}>
        {toggleMenu ? (
          <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} />
        ) : (
          <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <div className={`${styles.menuContainer} scale-up-center`}>
            <nav>
              <Menu />
            </nav>
            <div className={styles.menuSign}>
              <span>Sign In</span>
              <button type='button'>Sign Up</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const Menu = () => {
  return (
    <ul>
      <li>
        <a href='#home'>Home</a>
      </li>
      <li>
        <a href='#whatgpt3'>What is GPT3?</a>
      </li>
      <li>
        <a href='#possibility'>Open AI</a>
      </li>
      <li>
        <a href='#features'>Case Studies</a>
      </li>
      <li>
        <a href='#blog'>Library</a>
      </li>
    </ul>
  );
};
