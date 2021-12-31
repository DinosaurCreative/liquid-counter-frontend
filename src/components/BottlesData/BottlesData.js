function BottlesData(props) {
  return (
    <li className='bottlesData__line'>
      <div className='bottlesData__container'>
        <p className='bottlesData__item'>{props.props.title + ' ' + props.props.volume}</p>
        <div className='bottlesData__btn-container'>
          <label className='bottlesData__label' htmlFor={props.props._id} checked>
            <input className='bottlesData__open-checkbox' name='itemInfo' type='checkbox' id={props.props._id}/>
            <span className='bottlesData__open-checkbox-overlay' />
            <ul className='bottlesData__item-data'>
              <li className='bottlesData__item-param' id='title'><p className='bottlesData__param-title'>Наименование позиции: <b>&#8195; {props.props.title.toUpperCase()}</b></p></li>
              <li className='bottlesData__item-param' id='volume'><p className='bottlesData__param-title'>Объём: <b>&#8195;{`${props.props.volume}`}</b></p></li>
              <li className='bottlesData__item-param' id='full-weight'><p className='bottlesData__param-title'>Вес закрытой бутылки: <b>&#8195;{props.props.fullWeight}</b></p></li>
              <li className='bottlesData__item-param' id='empty-btl-weight'><p className='bottlesData__param-title'>Вес пустой бутылки: <b>&#8195;{props.props.emptyWeight}</b></p></li>
              <li className='bottlesData__item-param' id='cap-weight'><p className='bottlesData__param-title'>Вес крышки: <b>&#8195;{props.props.capWeight}</b></p></li>
              <li className='bottlesData__item-param' id='barcode'><p className='bottlesData__param-title'>Штрих-код: <b>&#8195;{props.props.barcode}</b></p></li>
              <li className='bottlesData__item-param' id='alco-type'><p className='bottlesData__param-title'>Тип алкоголя: <b>&#8195;{props.props.alcoType}</b></p></li>
              <li className='bottlesData__item-param' id='label'><p className='bottlesData__param-title'>Этикетка: <b>&#8195;{props.props.label}</b></p></li>
              <li className='bottlesData__item-param' id='origin'><p className='bottlesData__param-title'>Страна производства: <b>&#8195;{props.props.origin}</b></p></li>
              <li className='bottlesData__item-param' id='btl-model'><p className='bottlesData__param-title'>Модель бутылки: <b>&#8195;{props.props.btlModel}</b></p></li>
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