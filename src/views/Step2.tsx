import styles from './Step2.module.css'
import checkSmallIcon from '../assets/check-small.svg'
import dotSmallIcon from '../assets/dot-small.svg'

function Step2() {
  return (
    <div className={styles.container}>
      {/* <div className={styles.stepper}>
        <div className={styles.stepperLine}></div>
        <div className={styles.steps}>
          <div className={`${styles.step} ${styles.left}`}>
            <div className={`${styles.dot} ${styles.active}  ${styles.done}`}>
              <img src={checkSmallIcon} alt="active" />
            </div>
            <p>1</p>
          </div>
          <div className={styles.step}>
            <div className={`${styles.dot} ${styles.active}`}>
              <img src={dotSmallIcon} alt="active" />
            </div>
            <p>2</p>
          </div>
          <div className={`${styles.step} ${styles.right}`}>
            <div className={styles.dot}></div>
            <p>3</p>
          </div>
        </div>
      </div> */}

      <div>
        <ol className={styles.stepper}>
          <li className={`${styles.stepperItem} ${styles.done}`}>
            <p className={styles.stepperText}>1</p>
          </li>
          <li className={`${styles.stepperItem} ${styles.active}`}>
            <p className={styles.stepperText}>2</p>
          </li>
          <li className={styles.stepperItem}>
            <p className={styles.stepperText}>3</p>
          </li>
        </ol>
      </div>
      <div className={styles.buttons}>
        <button id="button-back" className={`${styles.button} ${styles.secondary}`} type="button">Назад</button>
        <button id="button-next" className={`${styles.button} ${styles.primary}`} type="button">Далее</button>
      </div>
    </div>
  )
}

export default Step2
