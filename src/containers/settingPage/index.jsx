import React from 'react';
import ButtonSubmit from '../../components/buttons/buttonSubmit';
import InputField from '../../components/inputField';
import './style.css';

const SettingsPage = () => {
  return (
    <div className="settings_page">
      <h1>Настройки</h1>
      <form action="" className="settings-form">
        <div className="settings-page__grid">
          <div className="settings-page__left-part">
            <InputField label="Название заведения *" placeholder="Не заполнено" required/>
            <InputField label="Тип заведения *" placeholder="Не заполнено" required/>
            <InputField label="Сайт заведения" placeholder="Не заполнено"/>
            <InputField label="Адрес заведения" placeholder="Не заполнено"/>
            <InputField label="Телефон заведения" placeholder="+ 7"/>
            <InputField label="E-mail заведения" placeholder="Не заполнено"/>
          </div>
          <div className="settings-page__right-part">
            <div className="settings-page__images-grid">
              <div className="file-upload-wrap">
                <div className="file-upload-wrap__title">Изображение аккаунта</div>
                <div className="file-upload-wrap__current-image-wrap">
                  <img src="https://na-chai.ru/images/dist/profile-avatar-image-q.png" alt="Изображение аккаунта"/>
                </div>
                <label className="file-upload-input-wrap">
                  <input type="file" className="file-upload-wrap__file-input"/>
                  <div className="file-upload-input-image">
                    <img src="https://na-chai.ru/images/dist/file-upload-input-image.svg" alt="Загрузить" />
                  </div>
                </label>
              </div>
              <div className="file-upload-wrap">
                <div className="file-upload-wrap__title">Логотип заведения</div>
                <div className="file-upload-wrap__current-image-wrap">
                  <img src="https://na-chai.ru/images/dist/place-avatar-image.png" alt="Логотип заведения"/>
                </div>
                <label className="file-upload-input-wrap">
                  <input type="file" className="file-upload-wrap__file-input"/>
                  <div className="file-upload-input-image">
                    <img src="https://na-chai.ru/images/dist/file-upload-input-image.svg" alt="Загрузить" />
                  </div>
                </label>
              </div>
            </div>
            <InputField label="Имя *" placeholder="Не заполнено" required/>
            <InputField label="Фамилия *" placeholder="Не заполнено" required/>
            <InputField label="Телефон *" placeholder="+ 7" required/>
            <InputField label="E-mail *" placeholder="Не заполнено" required/>
          </div>
        </div>
        <ButtonSubmit />
      </form>
    </div>
  )
}

export default SettingsPage;