// import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';

import './App.css';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer';
import Registration from '../Registration/Registration';
import Login from '../Login/Login';
import Main from '../Main/Main';
import AddItem from '../AddItem/AddItem';
import UpdateItem from '../UpdateItem/UpdateItem';
import PreviousInventa from '../PreviousInventa/PreviousInventa';
import ItemDataBase from '../ItemDataBase/ItemDataBase';
import ItemList from '../ItemList/ItemList';
import { bottles, inventas } from '../../utils/constants';


function App () {
  const [ inventarizations, setInventarizations ] = useState(inventas);
  return (
    <div className='page'>
      <Header />
      <ItemList component={PreviousInventa}
                inventarizations={inventarizations}
                setInventarizations={setInventarizations}
      />
      {/* <ItemDataBase /> */}
      {/* <PreviousInventa /> */}
      {/* <AddItem /> */}
      {/* <UpdateItem /> */}
      {/* <Main /> */}
      <Footer />
      {/* <Registration /> */}
      {/* <Login /> */}

    </div>
  );
};

export default App;