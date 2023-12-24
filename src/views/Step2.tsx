import styles from './Step2.module.css'
import deleteIcon from '../assets/delete.svg'
import plusIcon from '../assets/plus.svg'

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
      <form className={styles.form}>
        <fieldset className={styles.fieldset}>
          <legend className={styles.legend}>Advantages</legend>
          <div className={styles.inputGroup}>
            <input type="text" className={styles.formControl} name="field-advantage-1" id="field-advantage-1" placeholder="Placeholder" />
            <button type="button" className={styles.formButton} id="button-remove-1"><img src={deleteIcon} alt="delete-icon" /></button>
          </div>
          <div className={styles.inputGroup}>
            <input type="text" className={styles.formControl} name="field-advantage-2" id="field-advantage-2" placeholder="Placeholder" />
            <button type="button" className={styles.formButton} id="button-remove-2"><img src={deleteIcon} alt="delete-icon" /></button>
          </div>
          <div className={styles.inputGroup}>
            <input type="text" className={styles.formControl} name="field-advantage-3" id="field-advantage-3" placeholder="Placeholder" />
            <button type="button" className={styles.formButton} id="button-remove-3"><img src={deleteIcon} alt="delete-icon" /></button>
          </div>
          <button id="button-add" className={styles.addButton} type="button"><img src={plusIcon} alt="plus-icon" width={20} height={20} /></button>
        </fieldset>
        <fieldset className={`${styles.fieldset} ${styles.gap0}`}>
          <legend className={styles.legend}>Checkbox group</legend>
          <div className={styles.formCheck}>
            <input className={styles.formCheckInput} type="checkbox" id="field-checkbox-group-option-1" name="1" />
            <label className={styles.formCheckLabel} htmlFor="field-checkbox-group-option-1">1</label>
          </div>
          <div className={styles.formCheck}>
            <input className={styles.formCheckInput} type="checkbox" id="field-checkbox-group-option-2" name="2" />
            <label className={styles.formCheckLabel} htmlFor="field-checkbox-group-option-2">2</label>
          </div>
          <div className={styles.formCheck}>
            <input className={styles.formCheckInput} type="checkbox" id="field-checkbox-group-option-3" name="3" />
            <label className={styles.formCheckLabel} htmlFor="field-checkbox-group-option-3">3</label>
          </div>
        </fieldset>
        <fieldset className={`${styles.fieldset} ${styles.gap0}`}>
          <legend className={styles.legend}>Radio group</legend>
          <div className={styles.formCheck}>
            <input className={styles.formCheckInput} type="radio" id="field-radio-group-option-1" name="1" checked />
            <label className={styles.formCheckLabel} htmlFor="field-radio-group-option-1">1</label>
          </div>
          <div className={styles.formCheck}>
            <input className={styles.formCheckInput} type="radio" id="field-radio-group-option-2" name="2" disabled />
            <label className={styles.formCheckLabel} htmlFor="field-radio-group-option-2">2</label>
          </div>
          <div className={styles.formCheck}>
            <input className={styles.formCheckInput} type="radio" id="field-radio-group-option-3" name="3" />
            <label className={styles.formCheckLabel} htmlFor="field-radio-group-option-3">3</label>
          </div>
        </fieldset>
      </form>
      <div className={styles.buttons}>
        <button id="button-back" className={`${styles.button} ${styles.secondary}`} type="button">Назад</button>
        <button id="button-next" className={`${styles.button} ${styles.primary}`} type="button">Далее</button>
      </div>
    </div>
  )
}

export default Step2
