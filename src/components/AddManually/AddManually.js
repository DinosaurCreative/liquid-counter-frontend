import { addManuallyMessage } from '../../utils/constants';

function AddManually() {
  return (
    <div className='addManually'>
      <form className='form form_place_addManually'>
        <input className='form__input form__input_place_addManually'/>
        <input className='form__input form__input_place_addManually'/>
        <input className='form__input form__input_place_addManually'/>
        <button className='form__submit-button form__button_place_addManually'/>
      </form>
      <h2 className='addManually__info-message'>{addManuallyMessage}</h2>
    </div>
  )
}

export default AddManually;