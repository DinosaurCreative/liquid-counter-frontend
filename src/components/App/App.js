import { Route, Switch, useLocation, useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';

import './App.css';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer';
import Registration from '../Registration/Registration';
import Login from '../Login/Login';
import Main from '../Main/Main';
import AddItem from '../AddItem/AddItem';
import UpdateItem from '../UpdateItem/UpdateItem';
import PreviousInventa from '../PreviousInventa/PreviousInventa';
import InventaStart from '../InventaStart/InventaStart';
import BottlesData from '../BottlesData/BottlesData';
import ItemList from '../ItemList/ItemList';
import Inventa from '../Inventa/Inventa';
import AddManually from '../AddManually/AddManually';
import BottleForm from '../BottleForm/BottleForm';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import WrongPath from '../WrongPath/WrongPath';
import { 
  bottles,
  inventas,
  prevInventaTitle,
  bottlesDBTitle,
  inventa,
  emptyRegistration,
  emptyLogin,
  emptyManualBottle,
  emptyBottle,
  testBottle,
} from '../../utils/constants';



function App () {
  const history = useHistory();
  const location = useLocation();

  const [ isLogged, setIsLogged ] = useState(true);
  const [ bottlesDB, setBottlesDB ] = useState(bottles);
  const [ isMenuOpened, setIsMenuOpened ] = useState(false);
  const [ manualBottleData, setManualBottleData ] = useState(emptyManualBottle);  
  const [ bottleData, setBottleData ] = useState(emptyBottle);
  const [ loginData, setLoginData ] = useState(emptyLogin);
  const [ registerData, setRegisterData ] = useState(emptyRegistration);
  const [ scaleData, setScaleData ] = useState('');
  const [ isMainMessageShown, setIsMainMessageShown ] = useState(true);
  const [ newInventaData, setNewInventaData ] = useState({ nameInCharge: '', date: '', barName: 'Some Bar' });
  // const [ sortedInventa, setSortedInventa ] = useState({});  // непонятно кому пренадлежит этот стейт. Пока не удалять. Но вероятно все таки придется...
 
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


  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // Внутренности компонента Inventa и ItenList. применена композиция. Работает норм. ДО того как начнешь получать инфу о инвентах 
  // с апи, лучше сюда не соваться. Потом надо будет подправить для работы с данными с сервера
  const compose = (...fns) => arg => fns.reduce((composed, f) => f(composed), arg);

  const getAlcoTypes = prop => prop.inventaData.map(e => e.alcoType);

  const filterOriginalAlcotypes = prop => prop.filter((item, pos) => prop.indexOf(item) === pos);  

  const createInstanceListOfAlcotype = prop => {
    const obj = {}
    prop.forEach(item => obj[item] = []);
    return obj;
  }

  const runOverArrayGetBalances = inventa => prop => {
    inventa.forEach((item) => {
      prop[item.alcoType].push(item)
    })
    return prop
  }
  const convertPrevINventaDataToObject = prop => Object.entries(prop)
  
  function prepareInventaDataForDisplayingHandler(prop) {
    return compose (
      getAlcoTypes,
      filterOriginalAlcotypes,
      createInstanceListOfAlcotype,
      runOverArrayGetBalances(inventa.inventaData),
      convertPrevINventaDataToObject,
      )(prop);
  }
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  return (
    <div className='page'>
      <Header  isMenuOpened = {isMenuOpened}
               setIsMenuOpened = {setIsMenuOpened}
               isLogged = {isLogged}
               location = {location}
               />
               {/* {location.pathname === '/' && isLogged && <h2 className='page__message'>Отсканируйте штрих-код</h2>}
               {location.pathname === '/' && !isLogged && <p className='page__entrance-message'>Обучаемая программа для барной инвентаризации. Войдите или зарегистрируйтесь.</p>} */}
      <Switch>
        {!isLogged && <Route path = '/signin'>
          <Login data = {loginData}
                 setData = {setLoginData}
                 /> 
        </Route>}
        {!isLogged && <Route path = '/signup'>
          <Registration data = {registerData}
                        setData = {setRegisterData}
                        />
        </Route>}
 
        <ProtectedRoute path = '/add-bottle'
                        component = {AddItem}
                        setData = {setBottleData}
                        emptyData = {emptyBottle}
                        BottleForm = {BottleForm}
                        isLogged = {isLogged}
                        data = {bottleData}
                        />

        <ProtectedRoute path = '/new-inventa'
                        component={InventaStart}
                        isLogged = {isLogged}
                        setData = {setNewInventaData}
                        data = {newInventaData}
                        />
        
        <ProtectedRoute path = '/fix-bottle'
                        component = {UpdateItem}
                        setData = {setBottleData}
                        emptyData = {emptyBottle}
                        BottleForm = {BottleForm}
                        isLogged = {isLogged}
                        data = {bottleData}
                        testBottle = {testBottle}
                        history = {history}
                        />

        <ProtectedRoute path = '/inventa'
                        component = {ItemList}
                        innerComponent = {Inventa}
                        data = {prepareInventaDataForDisplayingHandler(inventa)}
                        setData = {prepareInventaDataForDisplayingHandler}
                        title = {inventa.nameInCharge + ' // ' +  inventa.barName + ' // ' + inventa.date}        
                        isLogged = {isLogged}
                        />


        <ProtectedRoute path = '/create_manually'
                        component = {AddManually}
                        data = {manualBottleData}
                        setData = {setManualBottleData}
                        emptyData = {emptyManualBottle}
                        isLogged = {isLogged}
                        />
        
        <ProtectedRoute path = '/main'
                        component = {Main}
                        data = {scaleData}
                        setData = {setScaleData}
                        isLogged = {isLogged}
                        />

        <ProtectedRoute path = '/bottles-data'
                        component = {ItemList}
                        innerComponent = {BottlesData}
                        data = {bottlesDB}
                        title = {bottlesDBTitle}
                        isLogged = {isLogged}
                        setData = {setBottleData}
                        />

        <ProtectedRoute path = '/previos-inventa'
                        component = {ItemList}
                        innerComponent = {PreviousInventa}
                        data = {inventarizations}
                        title = {prevInventaTitle}
                        sortByField = {sortByField}
                        isLogged = {isLogged}
                        />

        <Route component = {WrongPath} 
               path="*"
               history = {history}/>                        
        {/* <ProtectedRoute path = '/bottles-data'
                        component = {ItemList}
                        innerComponent = {BottlesData}
                        data = {bottlesDB}
                        title = {bottlesDBTitle}
                        isLogged = {isLogged}
                        /> */}

      </Switch>
      <Footer />
    </div>
  );
};

export default App; 