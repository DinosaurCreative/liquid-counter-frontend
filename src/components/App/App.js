// import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer';
import Registration from '../Registration/Registration';
import Login from '../Login/Login';

function App () {

  return (
    <div className='page'>
      <Header />
      
      <Footer />
      {/* <Registration /> */}
      {/* <Login /> */}

    </div>
  );
};

export default App;