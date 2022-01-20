function BottleForm({ props, setDataHandler, onSubmitHandler }) {

  return (
    <form className='form form_place_bottle-form' type='submit' onSubmit={onSubmitHandler}>
        <input className='form__input form__input_place_bottle-form' onChange={setDataHandler} value={props.data.title} name='title' placeholder='Наименование позиции'/>
        <span className='form__error-span form__error-span_place_bottle-form'>12345678</span>
        <input className='form__input form__input_place_bottle-form' onChange={setDataHandler} value={props.data.volume} name='volume' placeholder='Объём'/>
        <span className='form__error-span form__error-span_place_bottle-form'></span>
        <input className='form__input form__input_place_bottle-form' onChange={setDataHandler} value={props.data.bottleCapWeight} name='bottleCapWeight' placeholder='Вес крышки'/>
        <span className='form__error-span form__error-span_place_bottle-form'></span>
        <input className='form__input form__input_place_bottle-form' onChange={setDataHandler} value={props.data.madeIn} name='madeIn' placeholder='Страна производства'/>
        <span className='form__error-span form__error-span_place_bottle-form'></span>
        <input className='form__input form__input_place_bottle-form' onChange={setDataHandler} value={props.data.fullWeight} name='fullWeight' placeholder='Вес закрытой бутылки'/>
        <span className='form__error-span form__error-span_place_bottle-form'></span>
        <input className='form__input form__input_place_bottle-form' onChange={setDataHandler} value={props.data.bottleModel} name='bottleModel' placeholder='Модель бутылки'/>
        <span className='form__error-span form__error-span_place_bottle-form'></span>
        <input className='form__input form__input_place_bottle-form' onChange={setDataHandler} value={props.data.bottleWeight} name='bottleWeight' placeholder='Вес пустой бутылки'/>
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

// function BottleForm({ data, onSubmitHandler, setDataHandler }) {

//   return (
//     <form className='form form_place_bottle-form' type='submit' onSubmit={onSubmitHandler}>
//         <input className='form__input form__input_place_bottle-form' onChange={setDataHandler} value={data.title} name='title' placeholder='Наименование позиции'/>
//         <span className='form__error-span form__error-span_place_bottle-form'>12345678</span>
//         <input className='form__input form__input_place_bottle-form' onChange={setDataHandler} value={data.volume} name='volume' placeholder='Объём'/>
//         <span className='form__error-span form__error-span_place_bottle-form'></span>
//         <input className='form__input form__input_place_bottle-form' onChange={setDataHandler} value={data.bottleCapWeight} name='bottleCapWeight' placeholder='Вес крышки'/>
//         <span className='form__error-span form__error-span_place_bottle-form'></span>
//         <input className='form__input form__input_place_bottle-form' onChange={setDataHandler} value={data.madeIn} name='madeIn' placeholder='Страна производства'/>
//         <span className='form__error-span form__error-span_place_bottle-form'></span>
//         <input className='form__input form__input_place_bottle-form' onChange={setDataHandler} value={data.fullWeight} name='fullWeight' placeholder='Вес закрытой бутылки'/>
//         <span className='form__error-span form__error-span_place_bottle-form'></span>
//         <input className='form__input form__input_place_bottle-form' onChange={setDataHandler} value={data.bottleModel} name='bottleModel' placeholder='Модель бутылки'/>
//         <span className='form__error-span form__error-span_place_bottle-form'></span>
//         <input className='form__input form__input_place_bottle-form' onChange={setDataHandler} value={data.bottleWeight} name='bottleWeight' placeholder='Вес пустой бутылки'/>
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