import { Component } from 'react'

import trust from './assets/trust.svg'
import stability from './assets/stability.svg'
import performance from './assets/performance.svg'
import design from './assets/design.svg'
import footerWaves from './assets/footerWaves.svg'

import styles from './styles.module.scss';

export default class Presentation extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.presentationHeader}>
          <p>What MetaMath offers?</p>
        </div>
        <div className={styles.skillsContainer}>
          <div className={styles.skillsImg}>
            <img src={trust} alt='Trust'/>
            <img src={stability} alt='Trust'/>
            <img src={performance} alt='Trust'/>
            <img src={design} alt='Trust'/>
          </div>
        </div>
        <div className={styles.presentationInfoContainer}>
          <div className={styles.presentationInfo}>
            <div className={styles.headerTitle}>
              <p>What we do?</p>
            </div>
            <br />
            <div className={styles.pInfo}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br /> 
                Eos, molestiae? Dicta similique earum, impedit, eveniet <br />
                necessitatibus et dolor magnam nesciunt expedita excepturi <br />
                eum beatae? Et cumque at consequuntur debitis quam!
              </p>
            </div>
            <br />
            <div className={styles.pInfo}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br /> 
                Eos, molestiae? Dicta similique earum, impedit, eveniet <br />
                necessitatibus et dolor magnam nesciunt expedita excepturi <br />
              </p>
            </div>
            <br />
            <div className={styles.pInfo}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br /> 
                Eos, molestiae? Dicta similique earum, impedit, eveniet <br />
              </p>
            </div>
            <br />
            <br />
            <br />
            <br />
            <div className={styles.headerTitle}>
              <p>Why the MetaMath?</p>
            </div>
            <div className={styles.pInfo}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br /> 
                Eos, molestiae? Dicta similique earum, impedit, eveniet <br />
                necessitatibus et dolor magnam nesciunt expedita excepturi
              </p>
            </div>
          </div>
        </div>

        <div className={styles.buttonContainer}>
          <div className={styles.button}>
            Request our Services
          </div>
        </div>

        <div className={styles.socialContainer}>
          <div className={styles.secondaryButton}>
            Connect with us
          </div>
          <div className={styles.secondaryButton}>
            Join our community
          </div>
        </div>
        <div className={styles.footerWavesContainer}>
          <img src={footerWaves} alt='Footer Waves' width={0} />
        </div>
      </div>
    )
  }
}