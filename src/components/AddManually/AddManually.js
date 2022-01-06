import { addManuallyMessage } from '../../utils/constants';

function AddManually({ data, setData, emptyData }) {
  function setDataHandler(e) {
    setData({ ...data, [e.target.name]: e.target.value})
  }
  
  function submitHandler(e) {
    e.preventDefault();
    setData(emptyData);
  };

  return (
    <div className='addManually'>
      <form className='form form_place_addManually' onSubmit={submitHandler}>
        <input className='form__input form__input_place_addManually' onChange={setDataHandler} value={data.title} name='title' placeholder='Наименование'/>
        <input className='form__input form__input_place_addManually' onChange={setDataHandler} value={data.volume} name='volume' placeholder='Объём'/>
        <input className='form__input form__input_place_addManually' onChange={setDataHandler} value={data.rest} name='rest' placeholder='Остаток'/>
        <button className='form__submit-button form__submit-button_place_addManually' innerHtml='Внести'>Внести</button>
      </form>
      <h2 className='addManually__info-message'>{addManuallyMessage}</h2>
      <div className='addManually__background-img'/>
    </div>
  )
}

export default AddManually;