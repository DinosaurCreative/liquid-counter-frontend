import { Route, Switch } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';

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
import BottlesData from '../BottlesData/BottlesData';
import ItemList from '../ItemList/ItemList';
import Inventa from '../Inventa/Inventa';
import AddManually from '../AddManually/AddManually';
import BottleForm from '../BottleForm/BottleForm';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { 
  bottles,
  inventas,
  prevInventaTitle,
  bottlesDBTitle,
  inventaTitle,
  inventa,
  emptyRegistration,
  emptyLogin,
  emptyManualBottle,
  emptyBottle
} from '../../utils/constants';



function App () {
  const [ isLogged, setIsLogged ] = useState(true);
  const [ bottlesDB, setBottlesDB ] = useState(bottles);
  const [ isMenuOpened, setIsMenuOpened ] = useState(false);
  const [ sortedInventa, setSortedInventa ] = useState({});
  const [ manualBottleData, setManualBottleData ] = useState(emptyManualBottle);
  const [ bottleData, setBottleData ] = useState(emptyBottle);
  const [ loginData, setLoginData ] = useState(emptyLogin);
  const [ registerData, setRegisterData ] = useState(emptyRegistration);
  const [ scaleData, setScaleData ] = useState('');

  // Внутренности компонента previousInventa
  const [ inventarizations, setInventarizations ] = useState(inventas);
  const [ sortedBy, setSortedBy] = useState('');
  function changeDateOrderHandler(date) {
    return date.split('.').map((num, ind) => {
      if (ind === 1) {
        return date.split(".")[0];
      } else if (ind === 0) {
        return date.split(".")[1];
      }
      return num;
    }).join('.');
  }
  function sortByField(id) {
    if(sortedBy === id) {
      setInventarizations([ ...inventarizations].reverse());
      return;
    }
    const sorted = inventarizations.sort((a, b) => {
      if(id === 'date') {
        return new Date(changeDateOrderHandler(a.date)) > new Date(changeDateOrderHandler(b.date)) ? 1 : -1;
      } else if (id === 'barName') {
        return a.barName >= b.barName ? 1 : -1;
      } else {
        return a.nameInCharge >= b.nameInCharge ? 1 : -1;
      }
    })
      setInventarizations([ ...sorted]);
      setSortedBy(id);
    }
    // Внутренности компонента previousInventa
  
  function countAlcoTypesInInventaHandler(prop) {
    const types = prop.inventaData.map(e => e.alcoType);
    const result = types.filter((item, pos) => types.indexOf(item) === pos);

    return result;
  };


  function prepareInventaDataForDisplayingHandler(prop) {
    const alcoTypes = countAlcoTypesInInventaHandler(prop);
    const result = [];
    alcoTypes.forEach((item, index) => {
      result[index] = { type: item, values: [] };
    })
    
    for (let i = 0; i < prop.inventaData.length; i++) {
      for(let k = 0; k < result.length; k++) {
        if(result[k].type === prop.inventaData[i].alcoType){
          result[k].values.push(prop.inventaData[i]);
          break;
        }
      }
    }
    return result;
  }

  return (
    <div className='page'>
      <Header  isMenuOpened = {isMenuOpened}
               setIsMenuOpened = {setIsMenuOpened}
               />
      <Switch>
        <ProtectedRoute path = '/bottles'
                        component = {AddItem}
                        setData = {setBottleData}
                        emptyData = {emptyBottle}
                        BottleForm = {BottleForm}
                        isLogged = {isLogged}
                        data = {bottleData}
                        />
        <ProtectedRoute path = '/inventa'
                        component = {ItemList}
                        Inventa = {Inventa}
                        data = {prepareInventaDataForDisplayingHandler(inventa)}
                        title = {inventa.nameInCharge + ' // ' +  inventa.barName + ' // ' + inventa.date}        
                        isLogged = {isLogged}
                        />
      </Switch>

      {/* <ItemList component = {Inventa}
                data = {prepareInventaDataForDisplayingHandler(inventa)}
                title = {inventa.nameInCharge + ' // ' +  inventa.barName + ' // ' + inventa.date}                
                /> */}

      {/* <UpdateItem data = {bottleData}
                  setData = {setBottleData}
                  emptyData = {emptyBottle}
                  BottleForm = {BottleForm}
                  /> */}
      
      {/* <AddItem data = {bottleData}
               setData = {setBottleData}
               emptyData = {emptyBottle}
               BottleForm = {BottleForm}
               /> */}

      {/* <Login data = {loginData}
             setData = {setLoginData}
             />  */}
             
      {/* <Registration data = {registerData}
                    setData = {setRegisterData}
                    /> */}

      {/* <AddManually data={manualBottleData}
                   setData={setManualBottleData}
                   emptyData = {emptyManualBottle}/> */}


      {/* <Main data = {scaleData}
            setData = {setScaleData}
            /> */}
      {/* <ItemList component={PreviousInventa}
                data={inventarizations}
                title = {prevInventaTitle}
                sortByField = {sortByField}
              /> */}
      {/* <ItemList component = {BottlesData} 
                data = {bottlesDB}
                title = {bottlesDBTitle}
                /> */}
      <Footer />
    </div>
  );
};

export default App;