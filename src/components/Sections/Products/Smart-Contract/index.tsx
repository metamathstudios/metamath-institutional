import { Component } from 'react'

import styles from './styles.module.scss'

import cube from './assets/cube.svg'
import papers from './assets/papers.svg'

export default class SmartContract extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.leftInfoContainer}>
          <div className={styles.titleContainer}>
            <div className={styles.cube}>
              <img src={cube} alt='cube' />
            </div>
            <div className={styles.title}>
              Smart Contract
            </div>
          </div>
          <div className={styles.infoContainer}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit <br />
            Ab suscipit quo voluptatum repellendus tempora quod provident. <br />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit <br />
            Ab suscipit quo voluptatum repellendus tempora quod provident. <br />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit <br />
            Ab suscipit quo voluptatum repellendus tempora quod provident.     
          </div>
          <div className={styles.buttonContainer}>
            <div className={styles.button}>
              Learn more
            </div>
          </div>
        </div>
        <div className={styles.rightInfoContainer}>
          <div className={styles.papersContainer}>
            <div className={styles.papers}>
              <img src={papers} alt='Papers' />
            </div>
          </div>
        </div>
      </div>
    )
  }
}