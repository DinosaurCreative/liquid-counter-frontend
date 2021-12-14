function BottlesData(props) {
  return (
    <li className='bottlesData__line'>
      <div className='bottlesData__container'>
        <p className='bottlesData__item'>1. 29.05.1988  // БарБос // Петров К. К.</p>
        <div className='bottlesData__btn-container'>
          <label className='bottlesData__label' htmlFor={props._id} checked>
            <input className='bottlesData__open-checkbox' name='itemInfo' type='checkbox' id={props._id}/>
            <span className='bottlesData__open-checkbox-overlay' />
            <ul className='bottlesData__item-data'>
              <li className='bottlesData__item-param' id='title'><p className='bottlesData__param-title'>{'Наименование позиции:      ' + props.title.toUpperCase()}</p></li>
              <li className='bottlesData__item-param' id='volume'><p className='bottlesData__param-title'>Объём: {props.volume}</p></li>
              <li className='bottlesData__item-param' id='full-weight'><p className='bottlesData__param-title'>Вес закрытой бутылки: {props.fullWeight}</p></li>
              <li className='bottlesData__item-param' id='empty-btl-weight'><p className='bottlesData__param-title'>Вес пустой бутылки: {props.emptyWeight}</p></li>
              <li className='bottlesData__item-param' id='cap-weight'><p className='bottlesData__param-title'>Вес крышки: {props.capWeight}</p></li>
              <li className='bottlesData__item-param' id='barcode'><p className='bottlesData__param-title'>Штрих-код: {props.barcode}</p></li>
              <li className='bottlesData__item-param' id='alco-type'><p className='bottlesData__param-title'>Тип алкоголя: {props.alcoType}</p></li>
              <li className='bottlesData__item-param' id='label'><p className='bottlesData__param-title'>Этикетка: {props.label}</p></li>
              <li className='bottlesData__item-param' id='origin'><p className='bottlesData__param-title'>Страна производства: {props.origin}</p></li>
              <li className='bottlesData__item-param' id='btl-model'><p className='bottlesData__param-title'>Модель бутылки: {props.btlModel}</p></li>
            </ul>
          </label>
          <button className='bottlesData__update-btn'></button>
          <button className='bottlesData__delete-btn'></button>
        </div>
      </div>
    </li>
  )
}

export default BottlesData;