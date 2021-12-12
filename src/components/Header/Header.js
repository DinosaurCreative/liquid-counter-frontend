import './Header.css';
import { Link } from 'react-router-dom'


function Header() {

  return (
    <div className="header">
      <div className='header__container'>
        <Link to='/' href='#' className="logo logo_place_header" />

        <div className="header__link-container">
          {/* <Link to='signin' href='#' className='link link_place_header-signup' >{'РЕГИСТРАЦИЯ'}</ Link>
          <Link to='signup' href='#' className='link link_place_header-signin' >{'ВОЙТИ'}</ Link> */}
        </div>
        <button className='header__menu-btn' type='button' />

      </div>
    </div>
  );
};

export default Header;