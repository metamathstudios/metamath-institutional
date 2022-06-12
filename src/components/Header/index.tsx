import { Component } from 'react'

import styles from './styles.module.scss';

export default class Header extends Component {
  render() {
    return (
      <nav className={styles.header}>
        <div className={styles.logoContainer}>
          <div className={styles.logoBox}>
            <img src="/assets/metamath_m_logo.png" alt="MetaMath Logo" />
          </div>
        </div>

        <div className={styles.menuContainer}>
          <div className={styles.menu}>
            <ul>
              <li>Products</li>
              <li>Projects</li>
              <li>About Us</li>
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
