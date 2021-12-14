import ItemList from "../ItemList/ItemList";

function PreviousInventa(props) {
  return (
      <li className='previousInventa__line'>
      <div className='previousInventa__container'>
        <p className='previousInventa__item'>1. 29.05.1988  // БарБос // Петров К. К.</p>
        <div className='previousInventa__btn-container'>
          <label className='previousInventa__label' htmlFor={props._id} checked>
            <input className='previousInventa__open-checkbox' name='itemInfo' type='checkbox' id={props._id}/>
            <span className='previousInventa__open-checkbox-overlay' />
            <ul className='previousInventa__item-data'>
              <li className='previousInventa__item-param' id='title'><p className='previousInventa__param-title'>Наименование позиции: {props.title}</p></li>
              <li className='previousInventa__item-param' id='volume'><p className='previousInventa__param-title'>Объём: {props.volume}</p></li>
              <li className='previousInventa__item-param' id='full-weight'><p className='previousInventa__param-title'>Вес закрытой бутылки: {props.fullWeight}</p></li>
              <li className='previousInventa__item-param' id='empty-btl-weight'><p className='previousInventa__param-title'>Вес пустой бутылки: {props.emptyWeight}</p></li>
              <li className='previousInventa__item-param' id='cap-weight'><p className='previousInventa__param-title'>Вес крышки: {props.capWeight}</p></li>
              <li className='previousInventa__item-param' id='barcode'><p className='previousInventa__param-title'>Штрих-код: {props.barcode}</p></li>
              <li className='previousInventa__item-param' id='alco-type'><p className='previousInventa__param-title'>Тип алкоголя: {props.alcoType}</p></li>
              <li className='previousInventa__item-param' id='label'><p className='previousInventa__param-title'>Этикетка: {props.label}</p></li>
              <li className='previousInventa__item-param' id='origin'><p className='previousInventa__param-title'>Страна производства: {props.origin}</p></li>
              <li className='previousInventa__item-param' id='btl-model'><p className='previousInventa__param-title'>Модель бутылки: {props.btlModel}</p></li>
            </ul>
          </label>
          <button className='previousInventa__update-btn'></button>
          <button className='previousInventa__delete-btn'></button>
          {/* <button className='previousInventa__open-btn'></button> */}
        </div>
      </div>
    </li>
  )
};

export default PreviousInventa;