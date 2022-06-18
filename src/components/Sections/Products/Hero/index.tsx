import { Component } from 'react'

import styles from './styles.module.scss'

export default class Hero extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.headerContainer}>
          <div className={styles.headerTitle}>
            MetaMath Services 
          </div>
          <div className={styles.headerInfo}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
            Eum consequatur, magni sint doloribus rem, vel consequuntur
          </div>
          <div className={styles.buttonContainer}>
            <div className={styles.button}>
              Request our services
            </div>
          </div>
        </div>
      </div>
    )
  }
}