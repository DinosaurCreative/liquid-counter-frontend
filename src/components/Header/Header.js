import './Header.css';
import { Link } from 'react-router-dom'


function Header(props) {
  function menuCloseHandler(e){
    if (e.target.className.includes('header__navigation-menu') ||
    e.key === 'Escape' ||
    e.target.className === 'header__navigation-close-btn' ||
    e.target.className === 'header__navigation-link'
    ){
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
       {props.isLogged && <nav className={`header__navigation-menu ${!props.isMenuOpened ? 'header__navigation-menu_closed' : ''}` }>
          <div className={`header__navigation-container ${!props.isMenuOpened ? ' header__navigation-container_closed' : ''}`}>
            <button className={'header__navigation-close-btn'} type='button'></button>
            <h2 className='header__navigation-title'>Меню</h2>
            <div className='header__navigation-link-container'>
              <Link className='header__navigation-link' to='/previos-inventa'>Список инвентаризаций</Link>
              <Link className='header__navigation-link' to='/bottles-data'>База данных</Link>
              <Link className='header__navigation-link' to='/add-bottle'>Добавить позицию</Link>
              <Link className='header__navigation-link' to='/new-inventa'>Начать инвентаризацию</Link>
            </div>
          </div>
        </nav>}
        
        {!props.isLogged && <div className="header__link-container">
          {props.location.pathname !== '/signup' && <Link className='link link_place_header-signup' to='signup' href='#'  >{'РЕГИСТРАЦИЯ'}</ Link>}
          {props.location.pathname !== '/signin' && <Link className='link link_place_header-signin' to='signin' href='#' >{'ВОЙТИ'}</ Link>}
        </div>}
        {props.isLogged && <button className='header__menu-btn' onClick={menuOpenHandler} type='button' />}

      </div>
    </div>
  );
};

export default Header;