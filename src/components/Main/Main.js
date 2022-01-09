import { Route, Switch, useLocation, useHistory } from 'react-router-dom';
function Main ({ data, setData, isLogged }) {
  const history = useHistory();
  const location = useLocation();
  function setDataHandler(e) {
    setData({ ...data, [e.target.name]: e.target.value})
  }


  return (
    <div className='main'>
        <div className='main__calculator'>
          <div className='main__quantity-container'>
            <p className='main__quantity-board'>Остаток закрытых бутылок: </p>
            <p className='main__quantity'>0</p> 
            </div>
          <div className='main__quantity-container'>
            <p className='main__quantity-board'>Количество бутылок на весах: </p>
            <p className='main__quantity'>1</p> 
            </div>
          <div className='main__quantity-container'>
            <p className='main__quantity-board'>Гейзер? </p>
            </div>
          <button className='main__quantity-btn' >+</button>
          <button className='main__quantity-btn' >-</button>
          <button className='main__quantity-btn' >+</button>
          <button className='main__quantity-btn' >-</button>
          
          <label className='main__label' htmlFor='type_one' >
            <input className='main__pouring-spout' type='radio' name='choice' id='type_one' value='' />
            <span className='main__pourin-spout-pic' />
          </label>
          <label className='main__label' htmlFor='type_two' >
            <input className='main__pouring-spout' type='radio' name='choice' id='type_two' value='' />
            <span className='main__pourin-spout-pic' />
          </label>
          <label className='main__label' htmlFor='type_three' >
            <input className='main__pouring-spout' type='radio' name='choice' id='type_three' value='' />
            <span className='main__pourin-spout-pic' />
          </label>
          <label className='main__label' htmlFor='type_four' >
            <input className='main__pouring-spout' type='radio' name='choice' id='type_four' value='' />
            <span className='main__pourin-spout-pic' />
          </label>
          <label className='main__label' htmlFor='type_five' >
            <input className='main__pouring-spout' type='radio' name='choice' id='type_five' value='' />
            <span className='main__pourin-spout-pic' />
          </label>
          <label className='main__label' htmlFor='type_six' >
            <input className='main__pouring-spout' type='radio' name='choice' id='type_six' value='' />
            <span className='main__pourin-spout-pic' />
          </label>
          <label className='main__label' htmlFor='type_seven' >
            <input className='main__pouring-spout' type='radio' name='choice' id='type_seven' value='0' />          
            <span className='main__pourin-spout-pic' />
          </label>
          <label className='main__label' htmlFor='type_eight' >
            <input className='main__pouring-spout' type='radio' name='choice' id='type_eight' value='0' />          
            <span className='main__pourin-spout-pic' />
          </label>
          <form className='main__calculator-form' >
            <button className='main__form-btn'>Рассчитать</button>
            <input className='main__form-input' type='text' value={data.scaleData} name='scaleData' onChange={setDataHandler} placeholder='Введите показания весов' />
            <p className='main__form-result'>{`Результат: 1,56`}</p>
          </form>
        </div>
        <div className='main__item-card'>
          <img className='main__item-label' src='https://logosarchive.com/wp-content/uploads/2021/06/Jack-Daniels-bottle-label-logo.png' alt='Jack Daniels'></img>
          <p className='main__item-title'>{'Jack Daniels N7'}</p>
          <p className='main__item-volume'>Объем: 0.7</p>
          <p className='main__item-barcode'>Код: 1234567890123</p>
          <button className='main__send-result'>Отправить</button>
        </div>
    </div>
  )
}


export default Main;