import styles from './Step2.module.css'

function Step2() {
  return (
    <div className={styles.container}>
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
