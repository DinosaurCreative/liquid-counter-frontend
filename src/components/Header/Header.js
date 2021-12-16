import './Header.css';
import { Link } from 'react-router-dom'


function Header(props) {

  function menuCloseHandler(e){
    if (e.target.className.includes('header__navigation-menu') || e.key === 'Escape' || e.target.className === 'header__navigation-close-btn'){
      document.removeEventListener('click', menuCloseHandler);
      document.removeEventListener('keydown', menuCloseHandler);
      props.setIsMenuOpened(false)
    }
  }

  function menuOpenHandler() {
    document.addEventListener('click', menuCloseHandler);
    document.addEventListener('keydown', menuCloseHandler);
    props.setIsMenuOpened(true)
  }
  
  return (
    <div className="header">
      <div className='header__container'>
        <Link to='/' href='#' className="logo logo_place_header" />
        <nav className={`header__navigation-menu ${!props.isMenuOpened ? 'header__navigation-menu_closed' : ''}` }>
          <div className={`header__navigation-container ${!props.isMenuOpened ? ' header__navigation-container_closed' : ''}`}>
            <button className={'header__navigation-close-btn'} type='button'></button>
            <h2 className='header__navigation-title'>Меню</h2>
            <div className='header__navigation-link-container'>
              <Link className='header__navigation-link' to='#'>Список инвентаризаций</Link>
              <Link className='header__navigation-link' to='#'>База данных</Link>
              <Link className='header__navigation-link' to='#'>Добавить позицию</Link>
              <Link className='header__navigation-link' to='#'>Начать инвентаризацию</Link>
            </div>
          </div>
        </nav>
        <div className="header__link-container">
          {/* <Link to='signin' href='#' className='link link_place_header-signup' >{'РЕГИСТРАЦИЯ'}</ Link>
          <Link to='signup' href='#' className='link link_place_header-signin' >{'ВОЙТИ'}</ Link> */}
        </div>
        <button className='header__menu-btn' onClick={menuOpenHandler} type='button' />

      </div>
    </div>
  );
};

export default Header;