import { Component } from 'react'

import styles from './styles.module.scss';

export default class HeroSection extends Component {
  render() {
    return (
      <section className={styles.section}>
        <div className={styles.columnsContainer}>
          <div className={styles.firstColumn}>
            <h1>Advanced Loremipsum. we keep all 
            your web analytics in one place</h1>
            <div className={styles.getStarted}>
              Get Started <img src="/assets/icons/arrow.png" alt="Arrow" />
            </div>
          </div>
          <div className={styles.secondColumn}>
            <img src="/assets/code_view.png" alt="Code View" />
          </div>
          <div className={styles.wavesContainer} />
        </div>
      </section>
    )
  }
}
