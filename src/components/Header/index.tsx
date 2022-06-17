import { Component } from 'react'

import styles from './styles.module.scss';

export default class Header extends Component {
  render() {
    return (
      <nav className={styles.header}>
        <div className={styles.logoContainer}>
          <div className={styles.logoBox}>
            <a href='/'><img src="/assets/metamath_m_logo.png" alt="MetaMath Logo" /></a>
          </div>
        </div>

        <div className={styles.menuContainer}>
          <div className={styles.menu}>
            <ul>
              <li><a href='/products'>Products</a></li>
              <li><a href='/projects'>Projects</a></li>
              <li><a href='/about'>About Us</a></li>
            </ul>
          </div>
        </div>

        <div className={styles.serviceButtonContainer}>
          <div className={styles.serviceButton}>
            Request our services
          </div>
        </div>
      </nav>
    )
  }
}
