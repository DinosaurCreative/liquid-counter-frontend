import { Link } from "react-router-dom";

function Registration({ data, setData }) {
  function onChangeHandler(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div className='registration'>
      <div className='form__container'>
        <h1 className='form__title'>{'Регистрация'}</h1>
        <form className='form' type='submit'>
          <input className='form__input' value={data.text} id='name' onChange={onChangeHandler} type='text' placeholder='Имя'/>
          <span className='form__error-span' name='name'>Чета не то</span>
          <input className='form__input' value={data.email} id='email' onChange={onChangeHandler} type='email' placeholder='E-mail'/>
          <span className='form__error-span' name='email'></span>
          <input className='form__input' value={data.password} id='password' onChange={onChangeHandler} type='password' placeholder='Пароль'/>
          <span className='form__error-span' name='password'></span>
          <input className='form__input' value={data.text} id='secreteKey' onChange={onChangeHandler} type='text' placeholder='Секретный ключ'/>
          <span className='form__error-span' name='secreteKey'></span>
          <button className='form__submit-button form__submit-button_place_register' type='submit'>{'Зарегистрироваться'}</ button>
        </form>
        <p className='registration__question'>Уже зарегистрированы? {<Link className='link link_place_registration' to='/signin'>{'Войти'}</Link>}</p>
      </div>
    </div>
  )
}

export default Registration;