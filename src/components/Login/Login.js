import { Link } from "react-router-dom";

function Login({ data, setData }) {
  function onChangeHandler(e) {
    setData({...data, [e.target.name]: e.target.value})
  }


  return (
    <div className='login'>
      <div className='form__container'>
        <h1 className='form__title'>{'Вход'}</h1>
        <form className='form' type='submit'>
          <input className='form__input' type='email' id='email' value={data.email} onChange={onChangeHandler} placeholder='E-mail'/>
          <span className='form__error-span' name='email'></span>
          <input className='form__input' type='password' id='password' value={data.password} onChange={onChangeHandler} placeholder='Пароль'/>
          <span className='form__error-span' name='password'></span>
          <button className='form__submit-button form__submit-button_place_login' type='submit'>{'Войти'}</ button>
        </form>
        <p className='login__question'>Еще не зарегистрированы?{<Link className='link link_place_registration' to='/signup'>{' Регистрация'}</Link>}</p>
      </div>
    </div>
  )
}

export default Login;