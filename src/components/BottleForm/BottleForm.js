// function BottleForm({ data, onSubmitHandler, setDataHandler }) {

//   return (
//     <form className='form form_place_bottle-form' type='submit' onSubmit={onSubmitHandler}>
//         <input className='form__input form__input_place_bottle-form' onChange={setDataHandler} value={data.title} name='title' placeholder='Наименование позиции'/>
//         <span className='form__error-span form__error-span_place_bottle-form'>12345678</span>
//         <input className='form__input form__input_place_bottle-form' onChange={setDataHandler} value={data.volume} name='volume' placeholder='Объём'/>
//         <span className='form__error-span form__error-span_place_bottle-form'></span>
//         <input className='form__input form__input_place_bottle-form' onChange={setDataHandler} value={data.capWeight} name='capWeight' placeholder='Вес крышки'/>
//         <span className='form__error-span form__error-span_place_bottle-form'></span>
//         <input className='form__input form__input_place_bottle-form' onChange={setDataHandler} value={data.country} name='country' placeholder='Страна производства'/>
//         <span className='form__error-span form__error-span_place_bottle-form'></span>
//         <input className='form__input form__input_place_bottle-form' onChange={setDataHandler} value={data.brutto} name='brutto' placeholder='Вес закрытой бутылки'/>
//         <span className='form__error-span form__error-span_place_bottle-form'></span>
//         <input className='form__input form__input_place_bottle-form' onChange={setDataHandler} value={data.model} name='model' placeholder='Модель бутылки'/>
//         <span className='form__error-span form__error-span_place_bottle-form'></span>
//         <input className='form__input form__input_place_bottle-form' onChange={setDataHandler} value={data.emptyWeight} name='emptyWeight' placeholder='Вес пустой бутылки'/>
//         <span className='form__error-span form__error-span_place_bottle-form'></span>
//         <input className='form__input form__input_place_bottle-form' onChange={setDataHandler} value={data.label} name='label' placeholder='Этикетка'/>
//         <span className='form__error-span form__error-span_place_bottle-form'></span>
//         <input className='form__input form__input_place_bottle-form' onChange={setDataHandler} value={data.barcode} name='barcode' placeholder='Штрих-код'/>
//         <span className='form__error-span form__error-span_place_bottle-form'></span>
//         <input className='form__input form__input_place_bottle-form' onChange={setDataHandler} value={data.alcoType} name='alcoType' placeholder='Тип алкоголя'/>
//         <span className='form__error-span form__error-span_place_bottle-form'></span>
//         <button className='form__submit-button form__submit-button_place_bottle-form' type='submit'>Создать</button>
//       </form>
//   )
// }
function BottleForm({ props, setDataHandler, onSubmitHandler }) {

  return (
    <form className='form form_place_bottle-form' type='submit' onSubmit={onSubmitHandler}>
        <input className='form__input form__input_place_bottle-form' onChange={setDataHandler} value={props.data.title} name='title' placeholder='Наименование позиции'/>
        <span className='form__error-span form__error-span_place_bottle-form'>12345678</span>
        <input className='form__input form__input_place_bottle-form' onChange={setDataHandler} value={props.data.volume} name='volume' placeholder='Объём'/>
        <span className='form__error-span form__error-span_place_bottle-form'></span>
        <input className='form__input form__input_place_bottle-form' onChange={setDataHandler} value={props.data.capWeight} name='capWeight' placeholder='Вес крышки'/>
        <span className='form__error-span form__error-span_place_bottle-form'></span>
        <input className='form__input form__input_place_bottle-form' onChange={setDataHandler} value={props.data.country} name='country' placeholder='Страна производства'/>
        <span className='form__error-span form__error-span_place_bottle-form'></span>
        <input className='form__input form__input_place_bottle-form' onChange={setDataHandler} value={props.data.brutto} name='brutto' placeholder='Вес закрытой бутылки'/>
        <span className='form__error-span form__error-span_place_bottle-form'></span>
        <input className='form__input form__input_place_bottle-form' onChange={setDataHandler} value={props.data.model} name='model' placeholder='Модель бутылки'/>
        <span className='form__error-span form__error-span_place_bottle-form'></span>
        <input className='form__input form__input_place_bottle-form' onChange={setDataHandler} value={props.data.emptyWeight} name='emptyWeight' placeholder='Вес пустой бутылки'/>
        <span className='form__error-span form__error-span_place_bottle-form'></span>
        <input className='form__input form__input_place_bottle-form' onChange={setDataHandler} value={props.data.label} name='label' placeholder='Этикетка'/>
        <span className='form__error-span form__error-span_place_bottle-form'></span>
        <input className='form__input form__input_place_bottle-form' onChange={setDataHandler} value={props.data.barcode} name='barcode' placeholder='Штрих-код'/>
        <span className='form__error-span form__error-span_place_bottle-form'></span>
        <input className='form__input form__input_place_bottle-form' onChange={setDataHandler} value={props.data.alcoType} name='alcoType' placeholder='Тип алкоголя'/>
        <span className='form__error-span form__error-span_place_bottle-form'></span>
        <button className='form__submit-button form__submit-button_place_bottle-form' type='submit'>Создать</button>
      </form>
  )
}

export default BottleForm;