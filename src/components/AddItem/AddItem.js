function AddItem() {
  return (
    <div className='addItem'>
      <h1 className='component-title'>Добавить позицию</h1>
      <form className='form form_place_addItem' type='submit'>
        <input className='form__input form__input_place_addItem' placeholder='Наименование позиции'/>
        <span className='form__error-span form__error-span_place_addItem'>12345678</span>
        <input className='form__input form__input_place_addItem' placeholder='Объём'/>
        <span className='form__error-span form__error-span_place_addItem'></span>
        <input className='form__input form__input_place_addItem' placeholder='Объём'/>
        <span className='form__error-span form__error-span_place_addItem'></span>
        <input className='form__input form__input_place_addItem' placeholder='Страна производства'/>
        <span className='form__error-span form__error-span_place_addItem'></span>
        <input className='form__input form__input_place_addItem' placeholder='Вес закрытой бутылки'/>
        <span className='form__error-span form__error-span_place_addItem'></span>
        <input className='form__input form__input_place_addItem' placeholder='Модель бутылки'/>
        <span className='form__error-span form__error-span_place_addItem'></span>
        <input className='form__input form__input_place_addItem' placeholder='Вес пустой бутылки'/>
        <span className='form__error-span form__error-span_place_addItem'></span>
        <input className='form__input form__input_place_addItem' placeholder='Этикетка'/>
        <span className='form__error-span form__error-span_place_addItem'></span>
        <input className='form__input form__input_place_addItem' placeholder='Штрих-код'/>
        <span className='form__error-span form__error-span_place_addItem'></span>
        <input className='form__input form__input_place_addItem' placeholder='Тип алкоголя'/>
        <span className='form__error-span form__error-span_place_addItem'></span>
        <button className='form__submit-button form__submit-button_place_addItem' type='submit'>Создать</button>
      </form>
    </div>
  )
}

export default AddItem;