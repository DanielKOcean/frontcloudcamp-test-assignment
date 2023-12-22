import './Main.css'
import folderIcon from '../assets/folder.svg'

function Main() {
  return (
    <div className="container">
      <div className="user-info">
        {/* TODO: Maybe it is better to avoid <p> tag? */}
        <div className="avatar"><p>АИ</p></div>
        <div className="main-info">
          <div className="full-name">Иван Иванов</div>
          <div className="contacts">
            <a href="#" title="Telegram"><img src={folderIcon} alt="Telegram" />Telegram</a>
            <a href="#" title="GitHub"><img src={folderIcon} alt="GitHub" />GitHub</a>
            <a href="#" title="Resume"><img src={folderIcon} alt="Resume" />Resume</a>
          </div>
        </div>
      </div>
      <div className="form">
        <div className="input-field">
          <p className="label">Номер телефона</p>
          <input type="tel" name="field-phone" id="field-phone" placeholder="+7 999 999-99-99" />
          <p className="tip">Tip</p>
        </div>
        <div className="input-field">
          <p className="label">Email</p>
          <input type="email" name="field-email" id="field-email" placeholder="tim.jennings@example.com" />
          <p className="tip">Tip</p>
        </div>
      </div>
      <div className="buttons">
        <button id="button-start" type="button" className="button primary">Начать</button>
      </div>      
    </div>
  )
}

export default Main
