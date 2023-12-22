import dotSmallIcon from '../assets/dot-small.svg'
import styles from './Step1.module.css'

function Step1() {
  return (
    <div className={styles.container}>
      <div className={styles.stepper}>
        <div className={styles.stepperLine}></div>
        <div className={styles.steps}>
          <div className={`${styles.step} ${styles.left}`}>
            <div className={`${styles.dot} ${styles.active}`}>
              <img src={dotSmallIcon} alt="active" />
            </div>
            <p>1</p>
          </div>
          <div className={styles.step}>
            <div className={styles.dot}></div>
            <p>2</p>
          </div>
          <div className={`${styles.step} ${styles.right}`}>
            <div className={styles.dot}></div>
            <p>3</p>
          </div>
        </div>
      </div>
      <div className={styles.form}>
        <div className={styles['input-field']}>
          <label htmlFor="field-nickname" className="label">Nickname</label>
          <input type="text" name="field-nickname" id="field-nickname" placeholder="Placeholder" />
          <p className="tip">Tip</p>
        </div>
        <div className={styles['input-field']}>
          <label htmlFor="field-name" className="label">Name</label>
          <input type="text" name="field-name" id="field-name" placeholder="Placeholder" />
          <p className="tip">Tip</p>
        </div>
        <div className={styles['input-field']}>
          <label htmlFor="field-sername" className="label">Sername</label>
          <input type="text" name="field-sername" id="field-sername" placeholder="Placeholder" />
          <p className="tip">Tip</p>
        </div>
        <div className={styles['input-field']}>
          <label htmlFor="field-sex" className="label">Sex</label>
        <select className={styles['form-select']} name="field-sex" id="field-sex" title="field-sex">
            <option selected disabled>Не выбрано</option>
            <option id="field-sex-option-man">Мужской</option>
            <option id="field-sex-option-woman">Женский</option>
          </select>
          <p className="tip">Tip</p>
        </div>
      </div>
      <div className={styles.buttons}>
        <button id="button-back" className={`${styles.button} ${styles.secondary}`} type="button">Назад</button>
        <button id="button-next" className={`${styles.button} ${styles.primary}`} type="button">Далее</button>
      </div>
    </div>
  )
}

export default Step1
