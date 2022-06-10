import React from 'react';
import styles from './footer.module.scss';
import logo from '../../assets/images/logo.svg';

export const Footer = () => {
  return (
    <div className={`${styles.footer} section__padding`}>
      <div className={styles.heading}>
        <h1 className='gradient__text'>Do you want to step in to the future before others</h1>
      </div>
      <div className={styles.btn}>
        <p>Request Early Access</p>
      </div>
      <div className={styles.links}>
        <div className={styles.logo}>
          <img src={logo} alt='logo' />
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>
        <div className={styles.wrapper}>
          <h4>Links</h4>
          <a href='#footer'>Overons</a>
          <a href='#footer'>Social Media</a>
          <a href='#footer'>Counters</a>
          <a href='#footer'>Contact</a>
        </div>
        <div className={styles.wrapper}>
          <h4>Company</h4>
          <a href='#footer'>Terms & Conditions</a>
          <a href='#footer'>Privacy Policy</a>
          <a href='#footer'>Contact</a>
        </div>
        <div className={styles.wrapper}>
          <h4>Get in touch</h4>
          <a href='#footer'>Crechterwoord K12 182 DK Alknjkcb</a>
          <a href='#footer'>085-132567</a>
          <a href='#footer'>info@payme.net</a>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>© 2021 GPT-3. All rights reserved.</p>
      </div>
    </div>
  );
};
