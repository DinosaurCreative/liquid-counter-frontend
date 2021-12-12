import { Link } from "react-router-dom";

function Registration() {
  return (
    <div className='registration'>
      <div className='form__container'>
        <h1 className='form__title'>{'Регистрация'}</h1>
        <form className='form' type='submit'>
          <input className='form__input' type='text' placeholder='Имя'/>
          <span className='form__error-span'>Чета не то</span>
          <input className='form__input' type='email' placeholder='E-mail'/>
          <span className='form__error-span'></span>
          <input className='form__input' type='Password' placeholder='Пароль'/>
          <span className='form__error-span'></span>
          <input className='form__input' type='text' placeholder='Секретный ключ'/>
          <span className='form__error-span'></span>
          <button className='form__submit-button form__submit-button_place_register' type='submit'>{'Зарегистрироваться'}</ button>
        </form>
        <p className='registration__question'>Уже зарегистрированы? {<Link className='link link_place_registration' to='/signin'>{'Войти'}</Link>}</p>
      </div>
    </div>
  )
}

export default Registration;