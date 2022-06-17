import { Component } from 'react'

import styles from './styles.module.scss'

import mmLogo from './assets/mmLogo.svg'

export default class Footer extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.headerContainer}>
          <img src={mmLogo} alt='Logo' width={180} />
          <div>Products</div>
          <div>Projects</div>
          <div>Company</div>
        </div>
        <div className={styles.footerInfo}>
          <p>Termos de Serviço - Política de Privacidade</p> 
          <p>© 2022 MetaMath, All Rights Reserved.</p>
        </div>
      </div>
    )
  }
}