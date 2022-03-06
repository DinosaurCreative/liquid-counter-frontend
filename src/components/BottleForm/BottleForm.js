import { useState } from 'react';
import { Form, Field, SubmitButton, errorStatusHandler, errorMessageHandler } from '../../utils/Forms';
import { validators } from '../../utils/validators';
import { errors, allowedItemsTypes } from '../../utils/constants';


function BottleForm({ props, setDataHandler, onSubmitHandler }) {

  const [ bottleTitle, setTitle ] = useState(false);
  const [ volume, setVolume ] = useState(false);
  const [ bottleCapWeight, setBottleCapWeight ] = useState(false);
  const [ madeIn, setMadeIn ] = useState(false);
  const [ fullWeight, setFullWeight ] = useState(false);
  const [ bottleModel, setBottleModel ] = useState(false);
  const [ bottleWeight, setBottleWeight ] = useState(false);
  const [ label, setLabel ] = useState(false);
  const [ barcode, setBarcode ] = useState(false);
  const [ alcoType, setAlcoType ] = useState(false);
  const [ value, setValue ] = useState({});  //   стейт нужно будет перенести в Арр, он буде нужен при отправке данных на сервер
  const [ isTylistOpen, setIsTypelistOpen ] = useState(false);
  const [ alcoTypeTitle, setAlcoTypeTitle ] = useState('');
  
  const inputErrorhandler = {
    'bottleTitle': e => setTitle(e),
    'volume': e => setVolume(e),
    'bottleCapWeight': e => setBottleCapWeight(e),
    'madeIn': e => setMadeIn(e),
    'fullWeight': e => setFullWeight(e),
    'bottleModel': e => setBottleModel(e),
    'bottleWeight': e => setBottleWeight(e),
    'label': e => setLabel(e),
    'barcode': e => setBarcode(e),
    'alcoType': e => setAlcoType(e),
    defineAction(e) {
      if (e.type ==='focus') {
        this[e.target.name](true);
      } else if(e.type === 'blur') {
        this[e.target.name](false);
      };
    },
  };
  function alcoTypeHandler(e) {
    setAlcoTypeTitle(e.currentTarget.innerHTML);
  }
  const errorHandler = e => inputErrorhandler.defineAction(e);
  const openTypelistHandler = () => setIsTypelistOpen(!isTylistOpen);
  
  return (
    <Form className='form form_place_bottle-form' 
          type='submit' 
          onSubmit={onSubmitHandler}
          validators={validators} >

      <Field onChange={setDataHandler} 
             name='volume' 
             placeholder='Объём'
             onFocus={errorHandler}
             onBlur={errorHandler} 
             type='text' >
        {(props) => <input {...props} className={`form__input form__input_place_bottle-form ${ errorStatusHandler(props) && 'form__input_type_error'}`} />}
      </Field>

      <Field name='volume'
             errorslist={{
               required: errors.required,
               volumeFormat: errors.volumeFormatError,
             }} >
          {(props) => <span {...props} className={`form__error-span form__error-span_place_bottle-form ${volume && 'form__error-span_type_visible'}`} >{errorMessageHandler(props)}</span>}
      </Field>

      <Field onChange={setDataHandler} 
             name='bottleCapWeight' 
             placeholder='Вес крышки'
             onFocus={errorHandler}
             onBlur={errorHandler}
             type='text' >
        {(props) => <input {...props} className={`form__input form__input_place_bottle-form ${ errorStatusHandler(props) && 'form__input_type_error'}`} />}
      </Field>

      <Field name='bottleCapWeight'
             errorslist={{
               required: errors.required,
               bottleCapWeightFormat: errors.capWeigthFormatError,             
             }} >
        {(props) => <span {...props} className={`form__error-span form__error-span_place_bottle-form ${bottleCapWeight && 'form__error-span_type_visible'}`} >{errorMessageHandler(props)}</span>}
      </Field>

      <Field onChange={setDataHandler} 
             name='fullWeight' 
             placeholder='Вес закрытой бутылки'
             onFocus={errorHandler}
             onBlur={errorHandler}
             type='text'  >
        {(props) => <input {...props} className={`form__input form__input_place_bottle-form ${ errorStatusHandler(props) &&'form__input_type_error'}`} />}
      </Field>

      <Field name='fullWeight'
             errorslist={{
               required: errors.required,
               fullWeightFormat: errors.fullWeigthFormatError,
             }} >
        {(props) => <span {...props} className={`form__error-span form__error-span_place_bottle-form ${fullWeight && 'form__error-span_type_visible'}`} >{errorMessageHandler(props)}</span>}
      </Field>

      <Field onChange={setDataHandler} 
             name='bottleWeight' 
             placeholder='Вес пустой бутылки'
             onFocus={errorHandler}
             onBlur={errorHandler}
             type='text'  >
        {(props) => <input {...props} className={`form__input form__input_place_bottle-form ${ errorStatusHandler(props) && 'form__input_type_error'}`} />}
      </Field>

      <Field name='bottleWeight'
             errorslist={{
               required: errors.required,
               bottleWeightFormat: errors.emptyWeigthFormatError,
             }} >
        {(props) => <span {...props} className={`form__error-span form__error-span_place_bottle-form ${bottleWeight && 'form__error-span_type_visible'}`} >{errorMessageHandler(props)}</span>}
      </Field>

      <Field onChange={setDataHandler} 
             name='bottleTitle' 
             placeholder='Наименование позиции'
             onFocus={errorHandler}
             onBlur={errorHandler}
             type='text'  >
        {(props) => <input {...props} className={`form__input form__input_place_bottle-form ${ errorStatusHandler(props) && 'form__input_type_error'}`} />}
      </Field>

      <Field name='bottleTitle'
             errorslist={{
               required: errors.required,
               minLength: errors.minLength,
               maxLength: errors.maxLength,
             }}  >
        {(props) => <span {...props} className={`form__error-span form__error-span_place_bottle-form ${bottleTitle  && 'form__error-span_type_visible'}`}>{errorMessageHandler(props)}</span>}
      </Field>

      <Field onChange={setDataHandler} 
             name='madeIn' 
             placeholder='Страна производства'
             onFocus={errorHandler}
             onBlur={errorHandler}
             type='text' >
        {(props) => <input {...props} className={`form__input form__input_place_bottle-form ${ errorStatusHandler(props) && 'form__input_type_error'}`} />}
      </Field>

      <Field name='madeIn'
             errorslist={{
               titleFormat: errors.titleError,
             }} >
        {(props) => <span {...props} className={`form__error-span form__error-span_place_bottle-form ${madeIn && 'form__error-span_type_visible'}`} >{errorMessageHandler(props)}</span>}
      </Field>

      <Field onChange={setDataHandler} 
             name='bottleModel' 
             placeholder='Модель бутылки'
             onFocus={errorHandler}
             onBlur={errorHandler}
             type='text'  >
        {(props) => <input {...props} className={`form__input form__input_place_bottle-form ${ errorStatusHandler(props) && 'form__input_type_error'}`} />}
      </Field>

      <Field name='bottleModel'
             errorslist={{
              titleFormat: errors.titleError,
             }} >
        {(props) => <span {...props} className={`form__error-span form__error-span_place_bottle-form ${bottleModel && 'form__error-span_type_visible'}`} >{errorMessageHandler(props)}</span>}
      </Field>

      <Field onChange={setDataHandler} 
             name='label' 
             placeholder='Этикетка'
             onFocus={errorHandler}
             onBlur={errorHandler}
             type='text' >
        {(props) => <input {...props} className={`form__input form__input_place_bottle-form ${ errorStatusHandler(props) && 'form__input_type_error'}`} />}
      </Field>

      <Field name='label'
             errorslist={{
               required: errors.required,
               urlFormatError: errors.urlFormatError,
              }} >
        {(props) => <span {...props} className={`form__error-span form__error-span_place_bottle-form ${label && 'form__error-span_type_visible'}`} >{errorMessageHandler(props)}</span>}
      </Field>

      <Field onChange={setDataHandler} 
             name='barcode' 
             placeholder='Штрих-код'
             onFocus={errorHandler}
             onBlur={errorHandler}
             type='text'  >
        {(props) => <input {...props} className={`form__input form__input_place_bottle-form ${ errorStatusHandler(props) && 'form__input_type_error'}`} />}
      </Field>

  
      <Field name='barcode'
             errorslist={{
               required: errors.required,
               barcodeFormat: errors.barcodeFormat,
               barcodeLength: errors.barcodeLength,
             }} >
        {(props) => <span {...props} className={`form__error-span form__error-span_place_bottle-form ${barcode && 'form__error-span_type_visible'}`} >{errorMessageHandler(props)}</span>}
      </Field>
      
      <Field>
       {() => <ul className={`form__radio-btn-list ${isTylistOpen && 'form__radio-btn-list_type_open'}`}>
                <li className='form__checkbox-container'>
                  <button className='form__checkbox-button' type='button' onClick={openTypelistHandler}>Укажите тип алкоголя. Раскрыть список <span className='form__checkbox-button_span'> &#10149;</span></button>
                </li>
                {allowedItemsTypes.map((item, index) => {
                  return (
                    <li className='form__radio-btn-container' key={index}>
                      <input className='form__radio-btn' id={index} type='radio' name='alcoType' />
                      <label className='form__radio-btn-title' htmlFor={index} onClick={alcoTypeHandler}>{item.replace(item[0], item[0].toUpperCase())}</label>
                    </li>
                  )
                }) }
              </ul>}
     </Field>


  
  
      <SubmitButton text='добавить'
                    className='form__submit-button form__submit-button_place_bottle-form'
                    />
    </Form>
  )
}

export default BottleForm;
