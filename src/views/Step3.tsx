import styles from './Step3.module.css'

function Step3() {
  return (
    <div className={styles.container}>
      <div>
        <ol className={styles.stepper}>
          <li className={`${styles.stepperItem} ${styles.done}`}>
            <p className={styles.stepperText}>1</p>
          </li>
          <li className={`${styles.stepperItem} ${styles.done}`}>
            <p className={styles.stepperText}>2</p>
          </li>
          <li className={`${styles.stepperItem} ${styles.active}`}>
            <p className={styles.stepperText}>3</p>
          </li>
        </ol>
      </div>
      <form className={styles.form}>
        <div className={styles.formInputBlock}>
          <label className={styles.formLabel} htmlFor="field-about">About</label>
          <textarea className={styles.formControl} name="field-about" id="field-about" placeholder="Placeholder"></textarea>
          <span className={styles.formTip}>Tip</span>
        </div>
      </form>
      <div className={styles.buttons}>
        <button id="button-back" className={`${styles.button} ${styles.secondary}`} type="button">Назад</button>
        <button id="button-send" className={`${styles.button} ${styles.primary}`} type="button">Отправить</button>
      </div>
    </div>
  )
}

export default Step3
