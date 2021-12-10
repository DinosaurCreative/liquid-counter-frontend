// import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer';
import Registration from '../Registration/Registration';
import Login from '../Login/Login';
import Main from '../Main/Main';

function App () {

  return (
    <div className='page'>
      <Header />
      <Main />
      <Footer />
      {/* <Registration /> */}
      {/* <Login /> */}

    </div>
  );
};

export default App;